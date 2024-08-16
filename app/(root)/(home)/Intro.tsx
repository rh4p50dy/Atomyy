import Image from "next/image";
import Link from "next/link";

export default function Intro() {
  return (
    <div className="flex items-center h-screen mx-[8%] mb-10">
        <div className="flex-grow w-1/2 pe-[5%]">
            <p className="text-5xl font-semibold py-2 opacity-80 text-accent">Welcome to Atomy!</p>
            <p className="leading-loose opacity-50 text-lg text-justify py-4">Promote green energy through nuclear power: an efficient, low-carbon solution ensuring sustainable, reliable electricity while protecting our environment.</p>
            
            {/* ButtonContainer */}
            <div className="flex my-3">
              {/* Button 1 */}
              <div className="w-1/3">
                <div className="p-2 rounded-full text-center text-white text-lg bg-accent hover:bg-white hover:text-accent transition-all hover:border-accent border-2 ">
                  <Link href="/#about" className="transition-all">Learn More</Link>
                </div>
              </div>

              {/* Button 2 */}
              {/* <div className="w-1/4">
                <div className="border-2 border-accent p-2 rounded-full text-center text-accent hover:bg-accent hover:text-white transition-all text-lg ">
                    Learn More
                </div>
              </div> */}
            </div>
        </div>
        <div className="flex-grow w-1/2">
          <div className="relative overflow-hidden">
            {/* <div className="absolute text-white text-center bg-[#00000022] top-[50%] w-full h-full">
              <p className="my-[40%] text-4xl font-semibold">Green Energy</p>
            </div> */}
            <Image src="/nuclear_plant.jpg" alt="" className="rounded-xl" width={1000} height={1000} />

          </div>
        </div>

    </div>
  )
}
