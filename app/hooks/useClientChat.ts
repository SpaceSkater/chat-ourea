import { useOptionsStore } from "../store/options";
import { useMessagesStore, MessageType } from "../store/messages";
import { outputPrompt, fetchOnLangchain } from "../services/langchain";

type sendToLLM = {
  input: string;
};

type useClientChatPropa = {
  onError?: (error: any) => void;
};

function useClientChat({ onError }: useClientChatPropa) {
  const { model, apiKey, baseURL } = useOptionsStore();
  const { messages, addInputMessage, updateMessages, setIsPending } = useMessagesStore();

  async function sendToLLM({ input }: sendToLLM) {
    setIsPending(true);
    const newMessages = [...messages, { role: "user", content: input }] as MessageType[];
    addInputMessage({ role: "user", content: input });

    const prompt = outputPrompt(newMessages);

    try {
      const streamResponse = await fetchOnLangchain({
        prompt,
        options: { model, apiKey, baseURL },
      });
      let textContent = "";
      for await (const chunk of streamResponse) {
        textContent += chunk;
        updateMessages([...newMessages, { role: "assistant", content: textContent }]);
      }

      setIsPending(false);
    } catch (error) {
      setIsPending(false);
      if (onError) onError(error);
    }
  }

  return { sendToLLM };
}

export default useClientChat;
