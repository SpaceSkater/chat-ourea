'use client'

import Link from "next/link"
import { cn } from "@/lib/utils"
import { usePathname } from "next/navigation"
const Tabs = () => {
  const pathname = usePathname()
  return (
    <div className="flex gap-2 items-center" >
      <div className={cn("h-full flex items-center py-2 px-4 rounded-t-md",
        pathname === '/' ? 'border border-b-0 ' : 'cursor-pointer hover:underline hover:underline-offset-2'
      )}>
        <Link href="/">
          Chat
        </Link>
      </div>
      <div className={cn("h-full flex items-center py-2 px-4 rounded-t-md",
        pathname === '/web-search' ? 'border border-b-0 ' : 'cursor-pointer hover:underline hover:underline-offset-2'
      )}>
        <Link href="/web-search">
          Web Search
        </Link>
      </div>
      <div className={cn("h-full flex items-center py-2 px-4 rounded-t-md",
        pathname === '/knowledge-base' ? 'border border-b-0 ' : 'cursor-pointer hover:underline hover:underline-offset-2'
      )}>
        <Link href="/knowledge-base">
          Konwledge Base
        </Link>
      </div>
    </div>
  )
}

export default Tabs