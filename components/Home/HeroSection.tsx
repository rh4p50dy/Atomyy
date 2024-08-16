function HeroSection({title="About Us", body="lorem"}:{title:string, body: string}) {
  return (
    <div className="py-4 items-center">
        
        <div className="flex-grow w-full border-s-[6px] ps-5 border-accent py-2">
            <p className="text-lg font-semibold my-2">{title}</p>
            <p className="opacity-50 leading-7">{body}</p>
        </div>
    </div>
  )
}

export default HeroSection