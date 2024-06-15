'use client';
import { Send } from 'lucide-react';
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea";
import useClientChat from '@/app/hooks/useClientChat';

type Inputs = {
  input: string
}

const Input = () => {
  const { sendToLLM } = useClientChat({})
  const { register, reset, handleSubmit, formState: { errors } } = useForm<Inputs>()
  function onSubmit(data: Inputs) {
    sendToLLM({ input: data.input })
    reset({ input: '' })
  }
  return (
    <div className="border-t">
      <div className="max-w-5xl mx-auto md:border-x p-2">
        <div className="flex justify-between items-center gap-2">
          <Textarea
            className=""
            {...register("input", { required: "no content! please input something..." })}
            placeholder="Ctrl + Enter to send message"
            onKeyDown={(e) => {
              if (e.key === "Enter" && e.ctrlKey) {
                handleSubmit(onSubmit)()
              }
            }}
          />
          <Button
            variant='ghost'
            onClick={handleSubmit(onSubmit)}
            className="w-16 h-16 p-5 rounded-full border flex items-center justify-center">
            <Send size={20} />
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Input