import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Search } from "lucide-react";
export default function page() {
  return (
    // <ScrollArea className="mx-auto w-full max-w-5xl p-2 md:border-x">
    //   web search page
    // </ScrollArea>
    <div className="mx-auto w-full max-w-5xl md:border-x">
      <div className="flex h-full flex-col items-center justify-center pb-10">
        <div className="mb-10 text-4xl font-bold">Ourea Web Search</div>
        <div className="w-[80%] p-2">
          <div className="mx-auto flex gap-2">
            <Input placeholder="Seach anything you want..." className="" />
            <Button className="px-8">
              <Search size={18} />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
