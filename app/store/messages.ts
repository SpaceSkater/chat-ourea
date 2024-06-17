import { create } from "zustand";

export type MessageType = {
  role: "user" | "assistant" | "system";
  content: string;
};

type MessagesStore = {
  messages: MessageType[];
  isPending: boolean;
  setIsPending: (isPending: boolean) => void;
  addInputMessage: (newMessage: MessageType) => void;
  updateMessages: (newMessages: MessageType[]) => void;
  deleteMessage: (index: number) => void;
};

export const useMessagesStore = create<MessagesStore>((set) => ({
  messages: [],
  isPending: false,
  setIsPending: (isPending: boolean) => set({ isPending }),
  addInputMessage: (newMessage: MessageType) =>
    set((state) => ({ messages: [...state.messages, newMessage] })),
  updateMessages: (newMessages: MessageType[]) => set({ messages: newMessages }),
  deleteMessage: (index: number) =>
    set((state) => {
      const afterDeleteMessages = state.messages.filter((_, i) => i !== index);
      return { messages: afterDeleteMessages };
    }),
}));
