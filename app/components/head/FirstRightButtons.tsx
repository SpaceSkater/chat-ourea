import { Button } from "@/components/ui/button"
import { Github, Bolt } from "lucide-react"
import ThemeButton from "./ThemeButton"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"

const FirstRightButtons = () => {
  return (
    <div className="flex items-center gap-2">
      <Sheet>
        <SheetTrigger>
          <Button size='icon' variant='outline' asChild>
            <span>
              <Bolt size={18} />
            </span>
          </Button>
        </SheetTrigger>

        <SheetContent>
          <SheetHeader>
            <SheetTitle>Are you absolutely sure?</SheetTitle>
            <SheetDescription>
              This action cannot be undone. This will permanently delete your account
              and remove your data from our servers.
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>

      <Button size='icon' variant='outline' asChild>
        <a
          aria-label="GitHub"
          href="https://github.com/SpaceSkater/chat-ourea"
          rel="noopener"
          target="_blank"
        >
          <Github size={18} />
        </a>
      </Button>
      <ThemeButton />
    </div>
  )
}

export default FirstRightButtons