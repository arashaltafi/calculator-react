import { useSelector } from "react-redux"

const ResultComponent = () => {

  const numbers = useSelector((state: any) => state.numbers)

  return (
    <div className="w-full px-4 py-2 flex flex-col items-end justify-center gap-2">
      <p className="text-xl font-normal select-text text-slate-400 dark:text-slate-500">
        {numbers!.number}
      </p>
      <p className="text-4xl font-bold select-all">
        531,817,587
      </p>
    </div>
  )
}

export default ResultComponent