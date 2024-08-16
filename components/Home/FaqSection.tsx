function FaqSection({question, ans1, ans2}:{question:string, ans1:string, ans2:string}) {
  return (
    <div className="flex-growth w-1/3 ">
        <div className="border-2 h-[300px] bg-slate-100 rounded-[10px] rounded-tr-[100px] mx-[10px] p-8">
            <p className="text-xl font-semibold mb-3">{question}</p>
            <p className="text-accent text-lg ">{ans1}</p>
            <p className="opacity-60 font-600 text-justify leading-7">{ans2}</p>
        </div>
    </div>
  )
}

export default FaqSection