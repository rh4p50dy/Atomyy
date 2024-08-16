import { Links } from "@/types"
import FooterLink from "./FooterLink"
export const footLinks: Links[] = [
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
    }
]
export const socialLinks: Links[] = [
    {
        name: "Facebook",
        path: "https://www.facebook.com/matias.smith27",
    },
    {
        name: "LinkedIn",
        path: "https://www.linkedin.com/in/minsittpaingmhuu/",
    },
    {
        name: "Telegram",
        path: "https://t.me/minnsitt",
    },
    {
        name: "Email",
        path: "mailto:admin@atomy.energy",
    },
    
]

function QuickLink() {
    
  return (
    <>
        {/* Quick Link 1 */}
        <div className="flex-grow w-1/4 mx-[20px]">
                <div className="flex flex-col">
                    <h1 className="text-xl py-[20px] font-semibold">
                        Quick Links        
                    </h1>
                    {
                        footLinks.map((link, index) => (
                            <FooterLink key={index} link={link}/>
                        ))
                    }

                </div>
            </div>
            <div className="flex-grow w-1/4 mx-[20px]">
                <div className="flex flex-col">
                        <h1 className="text-xl py-[20px] font-semibold">
                            Social Links       
                        </h1>
                        {
                            socialLinks.map((link, index) => (
                                <FooterLink key={index} link={link}/>
                            ))
                        }
                </div>
            </div>
    </>
  )
}

export default QuickLink