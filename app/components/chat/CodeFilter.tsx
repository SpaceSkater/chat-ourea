import Markdown from "react-markdown";
import { useTheme } from "next-themes";
import { FileCode } from "lucide-react";
import { CodeBlock, dracula, github } from "react-code-blocks";

type CodeFilterProps = {
  content: string;
  enjectCode: (code: string) => void;
};

const CodeFilter = ({ content, enjectCode }: CodeFilterProps) => {
  const { theme } = useTheme();
  return (
    <Markdown
      components={{
        p({ node, children, ...props }) {
          return (
            <p className="leading-6" {...props}>
              {children}
            </p>
          );
        },
        code({ node, className, children, ...props }) {
          const match = /language-(\w+)/.exec(className || ""); // 解释：匹配以 language- 开头的字符串 match = ["language-js", "js"]
          return match ? (
            <div className="relative">
              <div className="my-2 flex text-white">
                <div
                  onClick={() => enjectCode(String(children).replace(/\n$/, ""))}
                  className="flex w-[300px] cursor-pointer items-center gap-2 rounded-md bg-zinc-600 p-2 hover:bg-zinc-400"
                >
                  <div className="rounded-full bg-zinc-800 p-2">
                    <FileCode size={25} />
                  </div>

                  <div>
                    <p>CodeBox</p>
                    <p className="text-sm uppercase">{match[1]} file</p>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <code className={className} {...props}>
              {children}
            </code>
          );
        },
      }}
    >
      {content}
    </Markdown>
  );
};

export default CodeFilter;
