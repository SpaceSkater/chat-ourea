import {
  AIMessage,
  HumanMessage,
  SystemMessage,
  MessageType,
} from "@langchain/core/messages";
import { LLM } from "../shared/models";
import { TokenTextSplitter } from "langchain/text_splitter";
import { ChatPromptTemplate } from "@langchain/core/prompts";
import { MemoryVectorStore } from "langchain/vectorstores/memory";
import { createRetrievalChain } from "langchain/chains/retrieval";
import { StringOutputParser } from "@langchain/core/output_parsers";
import { MessageType as ClientMessageType } from "../store/messages";
import { createStuffDocumentsChain } from "langchain/chains/combine_documents";
import { SearchApiLoader } from "@langchain/community/document_loaders/web/searchapi";

type ChatOptionsType = {
  model: string;
  apiKey: string;
  baseURL: string;
};

type SearchOptionsType = {
  apiKey: string;
  searchKey: string;
  baseURL: string;
};

type fetchOnLangchain = {
  prompt: MessageType[];
  options: ChatOptionsType;
};

type fetchOnWebSearch = {
  question: string;
  options: SearchOptionsType;
};

export function outputPrompt(messages: ClientMessageType[]) {
  const prompt = messages.map((m) => {
    if (m.role === "system") {
      return new SystemMessage(m.content);
    } else if (m.role === "assistant") {
      return new AIMessage(m.content);
    } else if (m.role === "user") {
      return new HumanMessage(m.content);
    }
  });
  return prompt as unknown as MessageType[];
}

export async function fetchOnLangchain({ prompt, options }: fetchOnLangchain) {
  // console.log("prompt", prompt);
  const { model, apiKey, baseURL } = options;
  const chatModel = LLM.chatModel({ apiKey, baseURL, model });

  try {
    const parser = new StringOutputParser();
    const streamResponse = await chatModel.pipe(parser).stream(prompt);
    return streamResponse;
  } catch (error: any) {
    throw new Error(error);
  }
}

export async function fetchOnWebSearch({ question, options }: fetchOnWebSearch) {
  const { apiKey, baseURL, searchKey } = options;
  const query = question;

  const chatModel = LLM.chatModel({ apiKey, baseURL });
  const embModel = LLM.embeddingsModel({ apiKey, baseURL });

  try {
    // 1. Search
    const loader = new SearchApiLoader({
      q: query,
      apiKey: searchKey,
      engine: "google",
    });
    const docs = await loader.load();

    // 2. Split
    const textSplitter = new TokenTextSplitter({
      chunkSize: 800,
      chunkOverlap: 100,
    });
    const splitDocs = await textSplitter.splitDocuments(docs);

    // 3. Vectorize and store (MemoryVectorStore)
    const vectorStore = await MemoryVectorStore.fromDocuments(splitDocs, embModel);

    // 4. Create Template
    const questionAnsweringPrompt = ChatPromptTemplate.fromMessages([
      ["system", "Answer the user's questions based on the below context:\n\n{context}"],
      ["human", "{input}"],
    ]);

    // 5. Create Chains
    const combineDocsChain = await createStuffDocumentsChain({
      llm: chatModel,
      prompt: questionAnsweringPrompt,
    });

    const chain = await createRetrievalChain({
      retriever: vectorStore.asRetriever(),
      combineDocsChain,
    });

    // 6. Invoke
    // const res = await chain.invoke({ input: question });
    // return res;
    const streamResponsees = await chain.stream({ input: question });
    return streamResponsees;
  } catch (error: any) {
    throw new Error(error);
  }
}
