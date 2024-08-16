"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import MobileQuickLink from "./MobileQuickLink";
import QuickLink from "./QuickLink";

function Footer(): JSX.Element {
  const [isClient, setIsClient] = useState(false);
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    // Update client-side state
    setIsClient(true);
    setWindowWidth(window.innerWidth);

    // Event listener for window resize
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (!isClient) {
    // Render nothing or a placeholder during SSR
    return <></>;
  }

  return (
    <footer className="pt-8 px-[5%] text-white bg-[#181717cc] rounded-t-[50px]  w-full">
      <div className="flex lg:flex-row flex-col">
        {/* Section 1 */}
        <div className="flex-grow lg:w-1/4 w-full lg:px-[40px] px-[20px] flex flex-col">
          <Link href="/">
            <h1 className="lg:text-3xl py-[20px] text-xl font-semibold">
              AT
              <span className="text-accent">OMY</span>
            </h1>
          </Link>
          <p className="lg:text-[16px] text-[12px]">
            Your green energy supplier {" "}
            <span className="text-accent lg:text-[22px] text-[16px] font-[600]">efficient</span>{" "}
            and{" "}
            <span className="text-accent lg:text-[22px] text-[16px] font-[600]">low-carbon.</span>
          </p>
        </div>

        {windowWidth > 1200 ? <QuickLink /> : <MobileQuickLink />}
        <div className="flex-grow lg:w-1/4 w-full mx-[20px]">
          <div className="flex flex-col">
            <h1 className="lg:text-xl lg:py-[20px] pt-[20px] pb-[10px] text-sm font-semibold">
              Location
            </h1>
            <p className="lg:text-[16px] text-[12px] opacity-50">No.(24/356) Anonymous Street </p>
            <p className="lg:text-[16px] text-[12px] opacity-50">Tain Paw Ward, Mayangone Township.</p>
            <p className="lg:text-[16px] text-[12px] opacity-50">Yangon Region, Myanmar</p>
            <h1 className="lg:text-xl lg:py-[20px] pt-[20px] pb-[10px] text-sm font-semibold">
              Contact
            </h1>
            <Link href="mailto:admin@atomy.energy">
              <p className="lg:text-[16px] text-[12px] opacity-50  hover:text-accent hover:opacity-100">Mail: admin@atomy.energy</p>
            </Link>
            <Link href="tel:+959762215631">
              <p className="lg:text-[16px] text-[12px] opacity-50 hover:text-accent hover:opacity-100">Ph: +959762215631</p>
            </Link>
          </div>
        </div>
      </div>
      <div className="text-center lg:pt-4 pt-[30px] lg:text-[16px] text-[10px] pb-2 opacity-50">
        &copy; 2024, Atomy Energy. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
