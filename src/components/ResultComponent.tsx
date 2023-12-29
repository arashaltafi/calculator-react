import { useSelector } from "react-redux"

const ResultComponent = () => {

  const number = useSelector((state: any) => state?.numbers.number)
  const result = useSelector((state: any) => state?.numbers.result)

  return (
    <div className="w-full px-4 py-2 flex flex-col items-end justify-center gap-2">
      <p className="w-3/4 overflow-hidden flex justify-end text-xl font-normal select-text text-slate-400 dark:text-slate-500">
        {number || ' 0 '}
      </p>
      <p className="w-3/4 overflow-hidden flex justify-end text-4xl font-bold select-all">
        {result || ' 0 '}
      </p>
    </div>
  )
}

export default ResultComponent