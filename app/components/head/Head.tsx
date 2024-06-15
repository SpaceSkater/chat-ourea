import FirstRightButtons from "./FirstRightButtons";
import SecondHead from "./SecondHead";
import Tabs from "./Tabs";
const Head = () => {
  return (
    <div className="border-b">
      {/* First head */}
      <div className="pt-2 px-2">
        <div className="flex justify-between items-center">
          <div>Logo</div>
          <FirstRightButtons />
        </div>
      </div>
      {/* head tabs */}
      <SecondHead />
    </div>
  )
}

export default Head

{/* Modle select */ }
{/* <div className="flex items-center gap-2">
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
</div> */}