"use client";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useEffect } from "react";
import { modelsList } from "@/app/shared/modelsList";
import { useOptionsStore } from "@/app/store/options";
const ModelSelect = () => {
  const { model, setModel, setApiKey, setBaseURL, setSearchKey } = useOptionsStore();

  const onChangeModel = (value: string) => {
    if (!value) return;
    setModel(value);
    localStorage.setItem("model", value);
  };

  // Load the model options from local storage
  useEffect(() => {
    const items = ["model", "apiKey", "apiUrl", "searchKey"] as const;
    const setters = {
      model: setModel,
      apiKey: setApiKey,
      apiUrl: setBaseURL,
      searchKey: setSearchKey,
    };

    items.forEach((item) => {
      const value = localStorage.getItem(item);
      if (value) setters[item](value);
    });
  }, []);

  return (
    <div className="flex w-[136px] items-center gap-2 pb-2 sm:w-[200px]">
      <Select value={model || ""} onValueChange={(value) => onChangeModel(value)}>
        <SelectTrigger>
          <SelectValue placeholder="Select a Model" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>OpenAPI</SelectLabel>
            {modelsList.map((m, i) => (
              <SelectItem key={i} value={m.value}>
                {m.name}
              </SelectItem>
            ))}
          </SelectGroup>
          <SelectGroup>
            <SelectLabel>Ollama</SelectLabel>
            <SelectItem value="l">Llama3-8B</SelectItem>
            <SelectItem value="g">Gemma-7B</SelectItem>
            <SelectItem value="m">Mistral-7B</SelectItem>
            <SelectItem value="q">qwen-4B</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
};

export default ModelSelect;
