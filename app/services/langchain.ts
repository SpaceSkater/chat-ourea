import {
  AIMessage,
  HumanMessage,
  SystemMessage,
  MessageType,
} from "@langchain/core/messages";
import { ChatOpenAI } from "@langchain/openai";
import { StringOutputParser } from "@langchain/core/output_parsers";
import { MessageType as ClientMessageType } from "../store/messages";

type OptionsType = {
  model: string;
  apiKey: string;
  baseURL: string;
};

type fetchOnLangchain = {
  prompt: MessageType[];
  options: OptionsType;
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
  console.log("prompt", prompt);
  const { model, apiKey, baseURL } = options;
  try {
    const chatModel = new ChatOpenAI({
      model,
      apiKey,
      configuration: { baseURL },
    });

    const parser = new StringOutputParser();
    const streamResponse = await chatModel.pipe(parser).stream(prompt);

    return streamResponse;
  } catch (error: any) {
    throw new Error(error);
  }
}
