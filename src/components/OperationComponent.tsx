import { useEffect, useRef } from "react"

const OperationComponent = () => {

  const number1 = useRef<HTMLButtonElement | null>(null)
  const number2 = useRef<HTMLButtonElement | null>(null)
  const number3 = useRef<HTMLButtonElement | null>(null)
  const number4 = useRef<HTMLButtonElement | null>(null)
  const number5 = useRef<HTMLButtonElement | null>(null)
  const number6 = useRef<HTMLButtonElement | null>(null)
  const number7 = useRef<HTMLButtonElement | null>(null)
  const number8 = useRef<HTMLButtonElement | null>(null)

  useEffect(() => {
    document.addEventListener('keydown', (event) => {
      const keyName = event.key
      console.log(keyName)
      if (keyName === '1') {
        number1.current?.click()
        console.log('clicked')
      }
    })
  }, [])

  const handleClickNumbers = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    console.log(e)
  }

  return (
    <div className="w-full h-full px-4 py-2 grid grid-cols-4 grid-rows-5 items-center justify-center gap-4">
      <button className="operation-btn operation-btn-gray">AC</button>
      <button className="operation-btn operation-btn-gray">±</button>
      <button className="operation-btn operation-btn-gray">%</button>
      <button className="operation-btn operation-btn-yellow">÷</button>

      <button ref={number7} className="operation-btn">7</button>
      <button ref={number8} className="operation-btn">8</button>
      <button className="operation-btn">9</button>
      <button className="operation-btn operation-btn-yellow">x</button>

      <button ref={number4} onClick={(e) => handleClickNumbers(e)} className="operation-btn">4</button>
      <button ref={number5} onClick={(e) => handleClickNumbers(e)} className="operation-btn">5</button>
      <button ref={number6} onClick={(e) => handleClickNumbers(e)} className="operation-btn">6</button>
      <button className="operation-btn operation-btn-yellow">-</button>

      <button ref={number1} onClick={(e) => handleClickNumbers(e)} className="operation-btn">1</button>
      <button ref={number2} onClick={(e) => handleClickNumbers(e)} className="operation-btn">2</button>
      <button ref={number3} onClick={(e) => handleClickNumbers(e)} className="operation-btn">3</button>
      <button className="operation-btn operation-btn-yellow">+</button>

      <button className="operation-btn col-span-2">0</button>
      <button className="operation-btn">.</button>
      <button className="operation-btn operation-btn-yellow">=</button>
    </div>
  )
}

export default OperationComponent