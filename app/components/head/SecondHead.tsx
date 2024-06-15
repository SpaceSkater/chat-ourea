import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";
import { Eraser, ImageDown, MessageSquarePlus } from "lucide-react";
import Tabs from "./Tabs";
const SecondHead = () => {
  return (
    <div className="mx-auto max-w-5xl px-2 pt-2">
      <div className="flex justify-between">
        {/* Tabs */}
        <Tabs />

        {/* Tools buttons */}
        <div className="flex gap-2 pb-2">
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
        </div>
      </div>
    </div>
  );
};

export default SecondHead;
