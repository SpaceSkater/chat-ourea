"use client";
import "./index.css";
import { cn } from "@/lib/utils";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Copy, Trash2 } from "lucide-react";
import ContentMarkdown from "./ContentMarkdown";
import { useMessagesStore } from "@/app/store/messages";
import useScrollToBottom from "@/app/hooks/useScrollToBottom";

const Chat = () => {
  const { messages, isPending, deleteMessage } = useMessagesStore();
  const { ref } = useScrollToBottom(messages);
  function handleCopy(content: string) {
    navigator.clipboard.writeText(content);
  }
  return (
    <div className="relative mx-auto w-full overflow-hidden overflow-y-scroll p-2 sm:max-w-5xl md:border-x">
      {messages.map((message, index) => (
        <div
          key={index}
          className={cn(
            "mb-4 flex w-full",
            message.role === "user" ? "justify-end" : "justify-start"
          )}
        >
          <HoverCard>
            <HoverCardTrigger className="max-w-full sm:max-w-[85%]">
              <div
                className={cn(
                  "rounded-lg px-3 py-2",
                  message.role === "user"
                    ? "bg-zinc-600 text-white dark:bg-zinc-100 dark:text-zinc-950"
                    : "bg-zinc-200 dark:bg-zinc-800"
                )}
              >
                <ContentMarkdown content={message.content} />
              </div>
            </HoverCardTrigger>

            <HoverCardContent
              side={message.role === "user" ? "left" : "right"}
              align="end"
              className="w-fit p-2"
            >
              <div className="flex gap-2">
                <span className="hover:text-red-700" onClick={() => deleteMessage(index)}>
                  <Trash2 size={18} />
                </span>
                <span
                  className="hover:text-zinc-500"
                  onClick={() => handleCopy(message.content)}
                >
                  <Copy size={18} />
                </span>
              </div>
            </HoverCardContent>
          </HoverCard>
        </div>
      ))}
      <div ref={ref}></div>
      {isPending && <div className="absolute bottom-1 animate-pulse">Generating...</div>}
    </div>
  );
};

export default Chat;

{
  /* {isPending && (
        <div className="absolute -bottom-2 left-[45%] border-[1.5px] border-zinc-600 ring dark:border-zinc-400">
          <div className="planet bg-zinc-700 dark:bg-zinc-400"></div>
        </div>
      )} */
}
