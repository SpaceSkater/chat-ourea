"use client";

import Link from "next/link";
import { useMemo } from "react";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

type TabProps = {
  pathname: string;
  currentPathname: string;
  children: React.ReactNode;
};

const Tab = ({ pathname, currentPathname, children }: TabProps) => {
  return (
    <div
      className={cn(
        "flex h-full items-center rounded px-2 text-xs sm:px-4 sm:text-base",
        pathname === currentPathname
          ? "bg-zinc-200 dark:bg-zinc-800"
          : "cursor-pointer hover:underline hover:underline-offset-2"
      )}
    >
      {children}
    </div>
  );
};

const Tabs = () => {
  const pathname = usePathname();
  const tabsList = useMemo(() => {
    return [
      {
        pathname: "/",
        children: "Chat",
      },
      {
        pathname: "/web-search",
        children: "Web Search",
      },
      {
        pathname: "/knowledge-base",
        children: "Knowledge Base",
      },
    ];
  }, []);
  return (
    <div className="left-1/2 top-0 flex h-10 items-center gap-2 rounded-md border p-1 sm:absolute sm:-translate-x-1/2">
      {tabsList.map((tab, i) => (
        <Tab key={i} pathname={tab.pathname} currentPathname={pathname}>
          <Link href={tab.pathname as string}>{tab.children}</Link>
        </Tab>
      ))}
    </div>
  );
};

export default Tabs;
