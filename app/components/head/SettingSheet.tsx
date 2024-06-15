import { Button } from "@/components/ui/button"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { ChevronsUpDown } from "lucide-react"

type Props = {
  children: React.ReactNode
}
const SettingSheet = ({ children }: Props) => {
  return (
    <Sheet>
      <SheetTrigger>
        {children}
      </SheetTrigger>

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
              <div className="flex justify-between items-center hover:bg-accent border p-2 rounded-md cursor-pointer">
                <div className=' font-semibold'>Histories</div>
                <ChevronsUpDown className="h-4 w-4" />
              </div>
            </CollapsibleTrigger>


            <CollapsibleContent className="border mt-2 rounded-md p-2">
              Yes. Free to use for personal and commercial projects. No attribution
              required.
            </CollapsibleContent>
          </Collapsible>

          <Collapsible defaultOpen={true} className="mt-2">
            <CollapsibleTrigger asChild>
              <div className="flex justify-between items-center hover:bg-accent border p-2 rounded-md cursor-pointer">
                <div className=' font-semibold'>Models Settings</div>
                <ChevronsUpDown className="h-4 w-4" />
              </div>
            </CollapsibleTrigger>

            <CollapsibleContent className="mt-2 space-y-2">
              <div className="space-y-2 border p-2 rounded-md">
                <label className="">OpenAPI</label>
                <Input type='url' placeholder="API-URL" />
                <Input type='url' placeholder="API-KEY" />
                <div className="flex justify-end">
                  <Button>Save</Button>
                </div>
              </div>

              <div className="space-y-2 border p-2 rounded-md">
                <label className="">Ollama</label>
                <Input type='url' placeholder="BASE-URL" />
                <div className="flex justify-end">
                  <Button>Save</Button>
                </div>
              </div>
            </CollapsibleContent>
          </Collapsible>
        </ScrollArea>

      </SheetContent>
    </Sheet>
  )
}

export default SettingSheet