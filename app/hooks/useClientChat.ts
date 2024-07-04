import { useOptionsStore } from "../store/options";
import { useMessagesStore, useSearchStore, MessageType } from "../store/messages";
import { outputPrompt, fetchOnLangchain, fetchOnWebSearch } from "../services/langchain";

type sendToLLM = {
  input: string;
};

type Error = (error: any) => void;

function useClientChat(onError?: Error) {
  const { model, apiKey, searchApiKey, baseURL } = useOptionsStore();
  const { messages, addInputMessage, updateMessages, setIsPending } = useMessagesStore();
  const {
    setIsPending: setIsSearching,
    addSearchInput,
    updateSearchResults,
    setSearchContext,
  } = useSearchStore();

  async function chatToLLM({ input }: sendToLLM) {
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
      onError && onError(error);
    }
  }

  async function webSearch({ input }: sendToLLM) {
    setIsSearching(true);
    addSearchInput(input);
    try {
      const streamResponse = await fetchOnWebSearch({
        question: input,
        options: {
          apiKey,
          baseURL,
          searchApiKey,
        },
      });

      if (!streamResponse) {
        setIsPending(false);
        return;
      }

      let searchText = "";
      for await (const chunk of streamResponse) {
        if (chunk.context) {
          setSearchContext(chunk.context);
        }
        if (chunk.answer) {
          searchText += chunk.answer;
          updateSearchResults(searchText);
        }
      }

      setIsSearching(false);
      return streamResponse;
    } catch (error) {
      setIsSearching(false);
      onError && onError(error);
    }
  }

  return { chatToLLM, webSearch };
}

export default useClientChat;
