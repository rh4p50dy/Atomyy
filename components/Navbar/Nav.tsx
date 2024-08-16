"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Links } from '@/types/index'
export const links: Links[] = [
    {
        name: "Home",
        path: "/",
    },
    {
        name: "Chat",
        path: "/chat",
    },
    {
        name: "Conference",
        path: "/conference",
    },
    {
        name: "Courses",
        path: "#",
    },
    {
        name: "Achievement",
        path: "#",
    },
  ]

export default function Nav() {
    const path = usePathname();
  return (
    
    <>
        {links.map((link, index) => (
            <Link  key={index} className={`${path===link.path ?"border-b-2 border-accent text-accent":""} transition-all hover:text-accent text-lg  ` } href={link.path}>{link.name}</Link>
        ))}
    </>
        
  )
}
