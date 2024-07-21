"use client";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useForm } from "react-hook-form";
import { SendHorizontal } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
import useClientChat from "@/app/hooks/useClientChat";

type Inputs = {
  input: string;
};

const Input = () => {
  const { chatToLLM } = useClientChat((err) => {
    console.error(err);
  });
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  function onSubmit(data: Inputs) {
    chatToLLM({ input: data.input });
    reset({ input: "" });
  }
  return (
    <div className="z-50 border-t bg-background">
      <div className="relative p-2">
        <div className="w-full space-y-2">
          <div className="flex items-center justify-between gap-2">
            <Textarea
              className=""
              {...register("input", {
                required: "no content! please input something...",
              })}
              placeholder="Ctrl + Enter to send message"
              onKeyDown={(e) => {
                if (e.key === "Enter" && e.ctrlKey) {
                  handleSubmit(onSubmit)();
                }
              }}
            />
          </div>
        </div>

        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <button
                className="absolute bottom-4 right-4 p-1 hover:text-zinc-400"
                onClick={handleSubmit(onSubmit)}
              >
                <SendHorizontal size={20} />
              </button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Send</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
    </div>
  );
};

export default Input;
