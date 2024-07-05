import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ChevronsUpDown } from "lucide-react";
import OllamaForm from "../settingForm/OllamaForm";
import OpenAPIForm from "../settingForm/OpenAPIForm";
import SearchAPIForm from "../settingForm/SearchAPIForm";
import { ScrollArea } from "@/components/ui/scroll-area";

type Props = {
  children: React.ReactNode;
};
const SettingSheet = ({ children }: Props) => {
  return (
    <Sheet>
      <SheetTrigger>{children}</SheetTrigger>

      <SheetContent>
        <SheetHeader className="mb-4">
          <SheetTitle>Settings</SheetTitle>
          <SheetDescription>
            This is a settings sheet. You can change the settings here.
          </SheetDescription>
        </SheetHeader>

        <ScrollArea className="h-[540px]">
          <Collapsible defaultOpen={true}>
            <CollapsibleTrigger asChild>
              <div className="flex cursor-pointer items-center justify-between rounded-md border p-2 hover:bg-accent">
                <div className="font-semibold">Histories</div>
                <ChevronsUpDown className="h-4 w-4" />
              </div>
            </CollapsibleTrigger>

            <CollapsibleContent className="mt-2 rounded-md border p-2">
              Yes. Free to use for personal and commercial projects. No attribution
              required.
            </CollapsibleContent>
          </Collapsible>

          <Collapsible defaultOpen={true} className="mt-2">
            <CollapsibleTrigger asChild>
              <div className="flex cursor-pointer items-center justify-between rounded-md border p-2 hover:bg-accent">
                <div className="font-semibold">Models Settings</div>
                <ChevronsUpDown className="h-4 w-4" />
              </div>
            </CollapsibleTrigger>

            <CollapsibleContent className="mt-2 space-y-2">
              <OpenAPIForm />
              <OllamaForm />
              <SearchAPIForm />
            </CollapsibleContent>
          </Collapsible>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  );
};

export default SettingSheet;
