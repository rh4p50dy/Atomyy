import { Links } from "@/types"
import Link from "next/link"


function FooterLink({link}:{link:Links}) {
  const {name, path} = link
  return (
    <Link href={path}><p className="lg:text-lg text-[12px] opacity-50 lg:mb-2 lg:border-b-2 border-[#181717cc] hover:text-accent hover:border-b-2 hover:border-accent hover:opacity-100 transition-all w-fit">{name}</p></Link>
  )
}

export default FooterLink