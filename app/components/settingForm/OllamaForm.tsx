import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const OllamaForm = () => {
  return (
    <div className="space-y-2 rounded-md border p-2">
      <label className="">Ollama</label>
      <Input type="url" placeholder="BASE-URL" />
      <div className="flex justify-end">
        <Button>Save</Button>
      </div>
    </div>
  );
};

export default OllamaForm;
