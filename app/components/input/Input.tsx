"use client";
import { Send } from "lucide-react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import useClientChat from "@/app/hooks/useClientChat";

type Inputs = {
  input: string;
};

const Input = () => {
  const { sendToLLM } = useClientChat({});
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  function onSubmit(data: Inputs) {
    sendToLLM({ input: data.input });
    reset({ input: "" });
  }
  return (
    <div className="border-t">
      <div className="mx-auto max-w-5xl p-2 md:border-x">
        <div className="flex items-center justify-between gap-2">
          <Textarea
            className=""
            {...register("input", { required: "no content! please input something..." })}
            placeholder="Ctrl + Enter to send message"
            onKeyDown={(e) => {
              if (e.key === "Enter" && e.ctrlKey) {
                handleSubmit(onSubmit)();
              }
            }}
          />
          <Button
            variant="ghost"
            onClick={handleSubmit(onSubmit)}
            className="flex h-16 w-16 items-center justify-center rounded-full border p-5"
          >
            <Send size={20} />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Input;
