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
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import Input from "../input/Input";
import CodeFilter from "./CodeFilter";
import { useState } from "react";

const Chat = () => {
  const { messages, isPending, deleteMessage } = useMessagesStore();
  // const { ref } = useScrollToBottom(messages);
  function handleCopy(content: string) {
    navigator.clipboard.writeText(content);
  }
  const [CodeContent, setCodeContent] = useState<string>("");

  function enjectCode(code: string) {
    setCodeContent(code);
  }

  return (
    <ResizablePanelGroup direction="horizontal">
      <ResizablePanel defaultSize={70} maxSize={70}>
        {/* <iframe
          // src="https://www.youtube.com/embed/yH0JZhecGTk"
          src="https://player.bilibili.com/player.html?aid=19390801&bvid=BV1bW411n7fY&cid=31621681&page=1"
          title="Video Player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="h-full w-full"
        /> */}
        <div className="flex h-full flex-col">
          <iframe srcDoc={CodeContent} className="w-full grow bg-secondary" />
          <div className="p-2">footer</div>
        </div>
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize={30} className="flex flex-col">
        <div className="relative mx-auto w-full flex-1 overflow-hidden overflow-y-scroll p-2">
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
                    {/* <ContentMarkdown content={message.content} /> */}
                    <CodeFilter content={message.content} enjectCode={enjectCode} />
                  </div>
                </HoverCardTrigger>

                <HoverCardContent
                  side={message.role === "user" ? "left" : "right"}
                  align="end"
                  className="w-fit p-2"
                >
                  <div className="flex gap-2">
                    <span
                      className="hover:text-red-700"
                      onClick={() => deleteMessage(index)}
                    >
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
          {/* <div ref={ref}></div> */}
        </div>
        <Input />
      </ResizablePanel>
    </ResizablePanelGroup>
  );
};

export default Chat;
