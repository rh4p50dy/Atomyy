"use client"
import Link from "next/link"
import { links } from "./Nav"
function MobileNav({setIsOpen}:{setIsOpen:any}) {
  
  return (
    <div className="px-[10%] mt-[20px] text-[15px]">
      {links.map((link, index) => (
        <Link key={index} href={link.path} onClick={()=>setIsOpen(false)}>
          <div  className="my-[2%] border-b-[1px] border-[#181717cc] hover:border-b-[1px] hover:opacity-50 hover:border-white">
            {link.name}
          </div>
        </Link>

      ))}
    </div>
  )
}

export default MobileNav