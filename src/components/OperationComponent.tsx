import { useEffect, useRef } from "react"
import { useDispatch } from "react-redux"
import numberSlice from "../redux/numberSlice"

const OperationComponent = () => {

  const dispatch = useDispatch()

  const number1 = useRef<HTMLButtonElement | null>(null)
  const number2 = useRef<HTMLButtonElement | null>(null)
  const number3 = useRef<HTMLButtonElement | null>(null)
  const number4 = useRef<HTMLButtonElement | null>(null)
  const number5 = useRef<HTMLButtonElement | null>(null)
  const number6 = useRef<HTMLButtonElement | null>(null)
  const number7 = useRef<HTMLButtonElement | null>(null)
  const number8 = useRef<HTMLButtonElement | null>(null)
  const number9 = useRef<HTMLButtonElement | null>(null)

  useEffect(() => {
    document.addEventListener('keydown', (event) => {
      const keyName = event.key
      console.log(keyName)
      switch (keyName) {
        case '1':
          number1.current?.click()
          number1.current?.classList.add('operation-btn-active')
          break;
        case '2':
          number2.current?.click()
          number2.current?.classList.add('operation-btn-active')
          break;
        case '3':
          number3.current?.click()
          number3.current?.classList.add('operation-btn-active')
          break;
        case '4':
          number4.current?.click()
          number4.current?.classList.add('operation-btn-active')
          break;
        case '5':
          number5.current?.click()
          number5.current?.classList.add('operation-btn-active')
          break;
        case '6':
          number6.current?.click()
          number6.current?.classList.add('operation-btn-active')
          break;
        case '7':
          number7.current?.click()
          number7.current?.classList.add('operation-btn-active')
          break;
        case '8':
          number8.current?.click()
          number8.current?.classList.add('operation-btn-active')
          break;
        case '9':
          number9.current?.click()
          number9.current?.classList.add('operation-btn-active')
          break;
        case 'backspace':
          alert('backspace')
          break;
        default:
          break;
      }
    })

    document.addEventListener('keyup', (event) => {
      number1.current?.classList.remove('operation-btn-active')
      number2.current?.classList.remove('operation-btn-active')
      number3.current?.classList.remove('operation-btn-active')
      number4.current?.classList.remove('operation-btn-active')
      number5.current?.classList.remove('operation-btn-active')
      number6.current?.classList.remove('operation-btn-active')
      number7.current?.classList.remove('operation-btn-active')
      number8.current?.classList.remove('operation-btn-active')
      number9.current?.classList.remove('operation-btn-active')
    })
  }, [])

  const handleClickNumbers = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    console.log(e)
    if (e.currentTarget.textContent == '1') {
      dispatch(numberSlice.actions.setNumber('1'))
    }
  }

  return (
    <div className="w-full h-full px-4 py-2 grid grid-cols-4 grid-rows-5 items-center justify-center gap-4">
      <button className="operation-btn operation-btn-gray">AC</button>
      <button className="operation-btn operation-btn-gray">±</button>
      <button className="operation-btn operation-btn-gray">%</button>
      <button className="operation-btn operation-btn-yellow">÷</button>

      <button ref={number7} className="operation-btn">7</button>
      <button ref={number8} className="operation-btn">8</button>
      <button ref={number9} className="operation-btn">9</button>
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