import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { Github, MessageSquarePlus, Eraser, ImageDown } from 'lucide-react';
import FirstRightButtons from "./FirstRightButtons";
const Head = () => {
  return (
    <div className="border-b">
      {/* First head */}
      <div className="p-2">
        <div className="flex justify-between items-center">
          <div>Logo</div>
          <FirstRightButtons />
        </div>
      </div>
      {/* Second head */}
      <div className="max-w-5xl mx-auto px-2 pb-2">
        <div className="flex justify-between items-center">
          {/* Modle select */}
          <div className="flex items-center gap-2">
            <Select>
              <SelectTrigger>
                <SelectValue placeholder='Select a Model' />
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
                  <SelectItem value="cet">Mistral-7B</SelectItem>
                  <SelectItem value="cet">qwen-4B</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <div className="flex items-center gap-2">
            {/* New Chat button */}
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button size='icon' variant='outline'>
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
                  <Button size='icon' variant='outline'>
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
                  <Button size='icon' variant='outline'>
                    <ImageDown size={18} />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Save Snap</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Head