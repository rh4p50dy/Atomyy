import HeroSection from "@/components/Home/HeroSection"

function Hero() {
  return (
    <section className="bg-[#c6ffb744] pe-[8%]" id="about">
        <div className="flex">
            <div className="flex-grow w-[55%] bg-slate-300" style={{backgroundImage: "url('/images/aboutus.jpg')", backgroundSize: "cover", backgroundPosition: "center"}}>
              {/* <Image src="/nuclear_plant.jpg" className="py-10 mx-auto" alt={""} width={500} height={500}/> */}
            </div>
            <div className="flex-grow w-[45%] ps-10 py-10">
                <div>
                  <p className="text-5xl my-8 font-semibold">About Us</p>
                  <span className="text-accent text-xl font-semibold">ATOMY</span>
                  <span className="opacity-50 leading-loose text-justify"> is a leading nuclear energy company focused on delivering safe, reliable, and sustainable energy through advanced technology. Committed to safety and a cleaner future, we are at the forefront of utilizing nuclear power for global energy needs.</span>
                </div>
                <HeroSection title="Our Mission" body="Our mission is to provide clean, efficient nuclear energy that empowers communities and supports global climate change efforts. We focus on continuous innovation to ensure our energy solutions are safe, powerful, and sustainable for future generations." />
                <HeroSection title="Our Vision" body="We envision nuclear energy as a central, carbon-free power source in the global energy mix, driving progress and improving quality of life worldwide. Our goal is to lead this energy revolution through relentless innovation and a commitment to excellence."/>
                <HeroSection title="Global Impact" body="As a global leader in nuclear energy, we partner with countries and organizations to develop and implement nuclear power projects. Our international collaborations emphasize knowledge transfer, technical assistance, and promoting the peaceful use of nuclear technology for energy and medical applications"/>
            </div>
        </div>
    </section>
  )
}

export default Hero