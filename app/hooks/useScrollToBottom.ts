import { useEffect, useRef } from "react";
import { MessageType } from "../store/messages";

export default function useScrollToBottom(messages: MessageType[]) {
  const bottomRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    bottomRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "end",
    });
  }, [messages]);

  return { ref: bottomRef };
}
