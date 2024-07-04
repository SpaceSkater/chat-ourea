import { ChatOpenAI, OpenAIEmbeddings } from "@langchain/openai";

type OptionsType = {
  model?: string;
  apiKey: string;
  baseURL: string;
};

class LLMManager {
  constructor() {}

  chatModel({ apiKey, baseURL, model }: OptionsType) {
    return new ChatOpenAI({
      model,
      apiKey,
      configuration: { baseURL },
    });
  }

  embeddingsModel({ apiKey, baseURL }: OptionsType) {
    return new OpenAIEmbeddings({
      apiKey,
      configuration: { baseURL },
    });
  }
}

export const LLM = new LLMManager();
