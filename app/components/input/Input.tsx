"use client";
import { useForm } from "react-hook-form";
import { Textarea } from "@/components/ui/textarea";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import useClientChat from "@/app/hooks/useClientChat";
import { Eraser, ImageDown, MessageSquarePlus, SendHorizontal } from "lucide-react";

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
      <div className="relative mx-auto max-w-5xl p-2 md:border-x">
        <div className="w-full space-y-2">
          {/* <div className="flex justify-end rounded-md">
            <div className="flex gap-4 rounded-md px-2 py-1">
              <span className="hover:text-zinc-400">
                <Eraser size={18} />
              </span>
              <span className="hover:text-zinc-400">
                <ImageDown size={18} />
              </span>
              <span className="hover:text-zinc-400">
                <MessageSquarePlus size={18} />
              </span>
            </div>
          </div> */}
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
