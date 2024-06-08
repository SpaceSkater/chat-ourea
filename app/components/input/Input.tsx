import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button"
import { Send } from 'lucide-react';
const Input = () => {
  return (
    <div className="border-t">
      <div className="max-w-5xl mx-auto md:border-x p-2">
        <div className="flex justify-between items-center gap-2">
          <Textarea
            className=""
            placeholder="Ctrl + Enter to send message"
          />
          <Button
            variant='ghost'
            className="w-16 h-16 p-5 rounded-full border flex items-center justify-center">
            <Send size={20} />
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Input