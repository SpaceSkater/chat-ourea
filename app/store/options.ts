import { create } from "zustand";

type OptionsType = {
  model: string;
  baseURL: string;
  apiKey: string;
  setModel: (model: string) => void;
  setBaseURL: (baseURL: string) => void;
  setApiKey: (apiKey: string) => void;
};

export const useOptionsStore = create<OptionsType>((set) => ({
  model: "gpt-3.5-turbo",
  baseURL: "https://aihubmix.com/v1",
  apiKey: "sk-IROh3pr6Nj91RvT77cE8Da3d87194eC9AaDd2189E975B42f",
  setModel: (model: string) => set({ model }),
  setBaseURL: (baseURL: string) => set({ baseURL }),
  setApiKey: (apiKey: string) => set({ apiKey }),
}));
