import InfoSection from "@/components/Home/InfoSection"

function Highlights() {
  return (
    <div className="bg-[#c6ffb744] px-[10%]">
        <p className="text-4xl py-10 text-center font-semibold">Highlights</p>
        <div className="flex mx-[10%] pb-10">
            <InfoSection icon="/icons/energy-saving.png" number="50-100 MW" description="POWER GENERATION"/>
            <InfoSection icon="/icons/lifespan.png" number="40-60 Yrs" description="LIFESPAN"/>
            <InfoSection icon="/icons/household.png" number="+65700" description="HOUSEHEOLDS"/>
            <InfoSection number="+Millions $" description="SAVINGS"/>
        </div>
    </div>
  )
}

export default Highlights