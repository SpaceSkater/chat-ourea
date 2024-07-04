"use client";

import { cn } from "@/lib/utils";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import useClientChat from "@/app/hooks/useClientChat";
import { useSearchStore } from "@/app/store/messages";
import { Search, Loader, Trash2 } from "lucide-react";
import ContentMarkdown from "@/app/components/chat/ContentMarkdown";

type Inputs = {
  input: string;
};

export default function Page() {
  const { isPending, searchContext, searchResults, deleteSearchResults } =
    useSearchStore();
  const { webSearch } = useClientChat((err) => {
    console.error(err);
  });
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const handleSearch = (data: Inputs) => {
    console.log(data.input);
    reset({ input: "" });
    webSearch({ input: data.input });
  };
  return (
    <div className="mx-auto w-full max-w-5xl overflow-hidden overflow-y-scroll md:border-x">
      <div
        className={cn(
          "sticky top-0 w-full bg-white dark:bg-black",
          searchResults.input ? "" : "h-full"
        )}
      >
        <div
          className={cn(
            "flex flex-col items-center",
            searchResults.input ? "" : "h-full justify-center pb-10"
          )}
        >
          <div
            className={cn("text-4xl font-bold", searchResults.input ? "my-5" : "mb-5")}
          >
            Ourea Web Search
          </div>
          <div className="w-[85%] p-2">
            <div className="mx-auto flex gap-2">
              <Input
                placeholder="Seach anything you want..."
                disabled={isPending}
                className=""
                {...register("input", {
                  required: "no content! please input something...",
                })}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && e.ctrlKey) {
                    handleSubmit(handleSearch)();
                  }
                }}
              />
              <Button
                className="px-8"
                onClick={handleSubmit(handleSearch)}
                disabled={isPending}
              >
                <Search size={18} />
              </Button>
            </div>
          </div>
        </div>

        {searchResults.input && (
          <div className="mx-auto w-[85%] p-2">
            <div className="flex items-center justify-between border-b pb-2">
              <div className="flex items-center gap-1">
                <Search size={18} />
                <p className="px-2 text-lg font-bold">Web Search Results</p>
                {isPending ? <Loader size={18} className="animate-spin" /> : ""}
              </div>

              <div className="cursor-pointer" onClick={deleteSearchResults}>
                <Trash2 size={18} className="hover:text-zinc-300" />
              </div>
            </div>
          </div>
        )}
      </div>

      {searchResults.input && (
        <div className="mx-auto w-[85%] p-2">
          <div className="rounded border px-2">
            <div className="border-b py-2 font-bold">{searchResults.input}</div>

            <div className="py-2">
              {searchResults.results ? (
                <ContentMarkdown content={searchResults.results} />
              ) : (
                <p className="animate-pulse">Searching...</p>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

{
  /* {
        searchContext && <div>
          {
            searchContext.map((c, index) => {
              return (
                <div key={index} className="p-2">
                  <div className="">{c.pageContent}</div>
                </div>
              );
            })
          }
        </div>
      } */
}
