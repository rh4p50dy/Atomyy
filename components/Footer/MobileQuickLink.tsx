import FooterLink from "./FooterLink"
import {footLinks, socialLinks} from "./QuickLink"


function MobileQuickLink() {

  return (
    <>
        <div className="flex">
            {/* Quick Link 1 */}
            <div className="flex-grow w-full mx-[20px]">
                    <div className="flex flex-col">
                        <h1 className="pt-[20px] pb-[10px] text-sm font-semibold">
                            Quick Links        
                        </h1>
                        {
                            footLinks.map((link, index) => (
                                <FooterLink key={index} link={link}/>
                            ))
                        }

                    </div>
                </div>
                <div className="flex-grow lg:w-1/4 w-full mx-[20px]">
                    <div className="flex flex-col">
                            <h1 className="pt-[20px] pb-[10px] text-sm font-semibold">
                                Social Links       
                            </h1>
                            {
                                socialLinks.map((link, index) => (
                                    <FooterLink key={index} link={link}/>
                                ))
                            }
                    </div>
                </div>
        </div>
    </>
  )
}

export default MobileQuickLink