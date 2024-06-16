import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";
import { Eraser, ImageDown, MessageSquarePlus } from "lucide-react";
import Tabs from "./Tabs";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
const SecondHead = () => {
  return (
    <div className="mx-auto max-w-5xl px-2 pt-2">
      <div className="flex justify-between">
        {/* Tabs */}
        <Tabs />

        {/* Modle select */}
        <div className="flex w-[200px] items-center gap-2 pb-2">
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Select a Model" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>OpenAI</SelectLabel>
                <SelectItem value="est">GPT-3.5-Turbo</SelectItem>
                <SelectItem value="cst">GPT-4-Turbo</SelectItem>
                <SelectItem value="mst">GPT-4o</SelectItem>
              </SelectGroup>
              <SelectGroup>
                <SelectLabel>Ollama</SelectLabel>
                <SelectItem value="gmt">Llama3-8B</SelectItem>
                <SelectItem value="cet">Gemma-7B</SelectItem>
                <SelectItem value="set">Mistral-7B</SelectItem>
                <SelectItem value="pas">qwen-4B</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );
};

export default SecondHead;

{
  /* Tools buttons */
}
{
  /* <div className="flex gap-2 pb-2">
<TooltipProvider>
  <Tooltip>
    <TooltipTrigger asChild>
      <Button size="icon" variant="outline">
        <MessageSquarePlus size={18} />
      </Button>
    </TooltipTrigger>
    <TooltipContent>
      <p>New Chat</p>
    </TooltipContent>
  </Tooltip>
</TooltipProvider>

<TooltipProvider>
  <Tooltip>
    <TooltipTrigger asChild>
      <Button size="icon" variant="outline">
        <Eraser size={18} />
      </Button>
    </TooltipTrigger>
    <TooltipContent>
      <p>Clean Messages</p>
    </TooltipContent>
  </Tooltip>
</TooltipProvider>

<TooltipProvider>
  <Tooltip>
    <TooltipTrigger asChild>
      <Button size="icon" variant="outline">
        <ImageDown size={18} />
      </Button>
    </TooltipTrigger>
    <TooltipContent>
      <p>Save Snap</p>
    </TooltipContent>
  </Tooltip>
</TooltipProvider>
</div> */
}
