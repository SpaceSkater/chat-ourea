import { create } from "zustand";

export type MessageType = {
  role: "user" | "assistant" | "system";
  content: string;
};

type MessagesStore = {
  messages: MessageType[];
  addInputMessage: (newMessage: MessageType) => void;
  updateMessages: (newMessages: MessageType[]) => void;
};

export const useMessagesStore = create<MessagesStore>((set) => ({
  messages: [],
  addInputMessage: (newMessage: MessageType) =>
    set((state) => ({ messages: [...state.messages, newMessage] })),
  // updateAssistantMessage: (content: string) => set(state => { })
  updateMessages: (newMessages: MessageType[]) =>
    set({ messages: newMessages }),
}));
