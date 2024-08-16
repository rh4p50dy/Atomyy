import Image from "next/image"

function InfoSection({icon="/icons/chart.png",number="521",description="HOUSEHEOLDS"}:{icon: string,number: string, description: string}) {
  return (
    <div className="flex-grow w-1/4 p-6">
      <Image src={icon} alt="" width={60} height={60} className="mx-auto"/>
      <p className="text-center text-3xl mt-6 mb-4 font-semibold">{number}</p>
      <p className="text-center opacity-55 text-lg">{description}</p>
    </div>
  )
}

export default InfoSection