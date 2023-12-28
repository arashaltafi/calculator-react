import { useSelector } from "react-redux"

const ResultComponent = () => {

  const numbers = useSelector((state: any) => state?.numbers.number)
  const result = useSelector((state: any) => state?.numbers.result)

  return (
    <div className="w-full px-4 py-2 flex flex-col items-end justify-center gap-2">
      <p className="text-xl font-normal select-text text-slate-400 dark:text-slate-500">
        {numbers || ' 0 '}
      </p>
      <p className="text-4xl font-bold select-all">
        {result || ' 0 '}
      </p>
    </div>
  )
}

export default ResultComponent