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
        "flex h-full items-center rounded-t-md px-2 py-2 text-xs sm:px-4 sm:text-base",
        pathname === currentPathname
          ? "border border-b-0"
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
    <div className="flex items-center gap-2">
      {tabsList.map((tab, i) => (
        <Tab key={i} pathname={tab.pathname} currentPathname={pathname}>
          <Link href={tab.pathname as string}>{tab.children}</Link>
        </Tab>
      ))}
    </div>
  );
};

export default Tabs;
