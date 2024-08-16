import FaqSection from "@/components/Home/FaqSection"
import Link from "next/link"

function Faq() {
  return (
    <section className="px-[8%] py-4">
        <p className="text-4xl py-10 text-center font-semibold">Frequently Asked Questions</p>
        <div className="flex mx-[10%]">
            <FaqSection question="Is nuclear energy is dangerous?" ans1="No!" ans2="Nuclear energy is a clean, reliable, and efficient power source that plays a crucial role in combating climate change and ensuring energy security."/>
            <FaqSection question="Advantages of using nuclear energy?" ans1="Yes!" ans2="Nuclear energy offers a reliable, low-carbon power source that significantly reduces greenhouse gas emissions while providing consistent and large-scale electricity production."/>
            <FaqSection question="Is nuclear energy cost-effective?" ans1="Yes!" ans2="While initial costs are high, nuclear energy is cost-effective over time due to low operational costs and the ability to provide large-scale, continuous power."/>
        </div>
        <div className="mx-auto w-1/4 my-10">
            <div className="border-2 border-accent p-2 rounded-full hover:bg-accent hover:text-white transition-all text-center text-accent text-lg ">
                <Link href={"/chat"}>Chat with our AI Assistant</Link>
            </div>
        </div>
    </section>
  )
}

export default Faq