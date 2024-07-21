type Model = {
  value: string;
  name: string;
};

export const modelsList: Model[] = [
  { value: "gpt-3.5-turbo", name: "GPT-3.5-Turbo" },
  { value: "gpt-4-turbo", name: "GPT-4-Turbo" },
  { value: "gpt-4o-mini", name: "GPT-4o-mini" },
  { value: "gpt-4o", name: "GPT-4o" },
  { value: "llama3-70b-8192", name: "Llama3-8B" },
  { value: "gemma-7b-it", name: "Gemma-7B" },
  { value: "deepseek-chat", name: "Deepseek-Chat" },
  { value: "deepseek-coder", name: "Deepseek-Coder" },
];
