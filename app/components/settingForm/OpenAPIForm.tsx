"use client";
import { Check } from "lucide-react";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useOptionsStore } from "@/app/store/options";

type Inputs = {
  apiUrl: string;
  apiKey: string;
};

const OpenAPIForm = () => {
  const [isSave, setIsSave] = useState(false);
  const { register, handleSubmit } = useForm<Inputs>();
  const { apiKey, baseURL, setApiKey, setBaseURL } = useOptionsStore();

  const handleSave = (data: Inputs) => {
    if (!data.apiKey) return;
    localStorage.setItem("apiUrl", data.apiUrl);
    localStorage.setItem("apiKey", data.apiKey);
    setIsSave(true);

    setTimeout(() => {
      setIsSave(false);
    }, 1000);
  };

  useEffect(() => {
    const apiKeyLocal = localStorage.getItem("apiKey");
    const apiUrlLocal = localStorage.getItem("apiUrl");
    if (apiKeyLocal) {
      setApiKey(apiKeyLocal);
    }
    if (apiUrlLocal) {
      setBaseURL(apiUrlLocal);
    }
  }, []);

  return (
    <div className="space-y-2 rounded-md border p-2">
      <label className="">OpenAPI</label>
      <Input
        type="url"
        placeholder="Default - https://api.openai.com"
        defaultValue={baseURL || ""}
        {...register("apiUrl")}
      />
      <Input
        type="url"
        placeholder="API - KEY"
        defaultValue={apiKey || ""}
        {...register("apiKey")}
      />
      <div className="flex justify-end">
        <Button onClick={handleSubmit(handleSave)} className="w-[65px]">
          {isSave ? <Check size={20} /> : "Save"}
        </Button>
      </div>
    </div>
  );
};

export default OpenAPIForm;
