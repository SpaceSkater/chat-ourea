import { Copy } from "lucide-react";
import Markdown from "react-markdown";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { CodeBlock, dracula, github } from "react-code-blocks";

const ContentMarkdown = ({ content }: { content: string }) => {
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
        a({ node, children, ...props }) {
          return (
            <a className="text-blue-500 hover:underline" {...props}>
              {children}
            </a>
          );
        },
        code({ node, className, children, ...props }) {
          const match = /language-(\w+)/.exec(className || "");
          return match ? (
            <div className="relative">
              <Button
                variant="ghost"
                size="icon"
                onClick={() =>
                  navigator.clipboard.writeText(String(children).replace(/\n$/, ""))
                }
                className="absolute right-1 top-1 text-zinc-500"
              >
                <Copy size={18} />
              </Button>

              <CodeBlock
                customStyle={{
                  background:
                    theme === "dark" || theme === "system" ? "#18181b" : "#fcfcfc",
                  borderRadius: "0.40rem",
                  margin: "0.5rem 0",
                }}
                text={String(children).replace(/\n$/, "")} // remove last newline
                language={match[1]}
                showLineNumbers={false}
                theme={theme === "dark" || theme === "system" ? dracula : github}
              />
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

export default ContentMarkdown;
