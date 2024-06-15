import { Button } from "@/components/ui/button"
import { Github, Bolt } from "lucide-react"
import ThemeButton from "./ThemeButton"
import SettingSheet from "./SettingSheet"

const FirstRightButtons = () => {
  return (
    <div className="flex items-center gap-2">
      {/* setting */}
      <SettingSheet>
        <Button size='icon' variant='outline' asChild>
          <span>
            <Bolt size={18} />
          </span>
        </Button>
      </SettingSheet>

      {/* github link */}
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

      {/* theme button */}
      <ThemeButton />
    </div>
  )
}

export default FirstRightButtons