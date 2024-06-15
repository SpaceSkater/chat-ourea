'use client'
import { Copy, Trash2 } from 'lucide-react';
import { ScrollArea } from "@/components/ui/scroll-area";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { useMessagesStore } from '@/app/store/messages';
import { cn } from '@/lib/utils';

const Chat = () => {
  const { messages } = useMessagesStore()
  return (
    <ScrollArea className="max-w-5xl mx-auto md:border-x w-full p-2">
      {messages.map((message, index) => (
        <div key={index} className={cn(
          "flex w-full mb-4",
          message.role === "user" ? "justify-end" : "justify-start"
        )}>
          <HoverCard>
            <HoverCardTrigger className="max-w-[85%]">
              <div className={cn(
                "px-3 py-2 rounded-lg",
                message.role === "user" ? "bg-zinc-600 dark:bg-zinc-100 dark:text-zinc-950 text-white" : "bg-zinc-200 dark:bg-zinc-800"
              )}>
                {message.content}
              </div>
            </HoverCardTrigger>

            <HoverCardContent
              side={message.role === "user" ? "left" : "right"}
              align="end"
              className="w-fit p-2"
            >
              <div className="flex gap-2">
                <Trash2 size={18} className="hover:text-red-700" />
                <Copy size={18} className="hover:text-zinc-500" />
              </div>
            </HoverCardContent>
          </HoverCard>
        </div>
      ))}
    </ScrollArea>
  )
}

export default Chat