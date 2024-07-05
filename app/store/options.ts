import { create } from "zustand";

type OptionsType = {
  model: string;
  baseURL: string;
  apiKey: string;
  searchKey: string;
  setModel: (model: string) => void;
  setBaseURL: (baseURL: string) => void;
  setApiKey: (apiKey: string) => void;
  setSearchKey: (searchKey: string) => void;
};

export const useOptionsStore = create<OptionsType>((set) => ({
  model: "",
  baseURL: "",
  apiKey: "",
  searchKey: "",
  setModel: (model: string) => set({ model }),
  setBaseURL: (baseURL: string) => set({ baseURL }),
  setApiKey: (apiKey: string) => set({ apiKey }),
  setSearchKey: (searchKey: string) => set({ searchKey }),
}));
