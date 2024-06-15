import { Copy, Trash2 } from 'lucide-react';
import { ScrollArea } from "@/components/ui/scroll-area";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";

const Chat = () => {
  return (
    <ScrollArea className="max-w-5xl mx-auto md:border-x w-full p-2">
      <div className="flex w-full mb-2">
        <HoverCard>
          <HoverCardTrigger className="max-w-[85%]">
            <div className="px-3 py-2 rounded-lg bg-zinc-200 dark:bg-zinc-800">
              I am a code expert. I can help you with your code.
            </div>
          </HoverCardTrigger>

          <HoverCardContent
            side="right"
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

      <div className="justify-end flex w-full mb-2">
        <HoverCard>
          <HoverCardTrigger className="max-w-[85%]">
            <div className="px-3 py-2 rounded-lg bg-zinc-600 dark:bg-zinc-100 dark:text-zinc-950 text-white">
              Hello, can you tell me why the sky is blue?
            </div>
          </HoverCardTrigger>

          <HoverCardContent
            side="left"
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
    </ScrollArea>
  )
}

export default Chat