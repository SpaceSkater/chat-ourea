import { create } from "zustand";
import type { Document } from "@langchain/core/documents";

export type MessageType = {
  role: "user" | "assistant" | "system";
  content: string;
};

export type searchResultsType = {
  input: string;
  results: string;
};

type MessagesStore = {
  messages: MessageType[];
  isPending: boolean;
  setIsPending: (isPending: boolean) => void;
  addInputMessage: (newMessage: MessageType) => void;
  updateMessages: (newMessages: MessageType[]) => void;
  deleteMessage: (index: number) => void;
};

type SearchStore = {
  searchResults: searchResultsType;
  searchContext: Document<Record<string, any>>[];
  isPending: boolean;
  setIsPending: (isPending: boolean) => void;
  addSearchInput: (input: string) => void;
  updateSearchResults: (result: string) => void;
  deleteSearchResults: () => void;
  setSearchContext: (searchContext: Document<Record<string, any>>[]) => void;
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

export const useSearchStore = create<SearchStore>((set) => ({
  isPending: false,
  searchResults: {
    input: "",
    results: "",
  },
  searchContext: [],
  setIsPending: (isPending: boolean) => set({ isPending }),
  setSearchContext: (searchContext: Document<Record<string, any>>[]) =>
    set({ searchContext }),
  addSearchInput: (input: string) =>
    set((state) => ({ searchResults: { input, results: "" } })),
  updateSearchResults: (results: string) =>
    set((state) => ({
      searchResults: { input: state.searchResults.input, results },
    })),
  deleteSearchResults: () =>
    set((state) => ({ searchResults: { input: "", results: "" } })),
}));
