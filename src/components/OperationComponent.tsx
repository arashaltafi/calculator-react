import { useEffect, useRef } from "react"
import { useDispatch } from "react-redux"
import numberSlice from "../redux/numberSlice"

const OperationComponent = () => {

  const dispatch = useDispatch()

  const number0 = useRef<HTMLButtonElement | null>(null)
  const number1 = useRef<HTMLButtonElement | null>(null)
  const number2 = useRef<HTMLButtonElement | null>(null)
  const number3 = useRef<HTMLButtonElement | null>(null)
  const number4 = useRef<HTMLButtonElement | null>(null)
  const number5 = useRef<HTMLButtonElement | null>(null)
  const number6 = useRef<HTMLButtonElement | null>(null)
  const number7 = useRef<HTMLButtonElement | null>(null)
  const number8 = useRef<HTMLButtonElement | null>(null)
  const number9 = useRef<HTMLButtonElement | null>(null)
  const actionDot = useRef<HTMLButtonElement | null>(null)
  const actionEqual = useRef<HTMLButtonElement | null>(null)
  const actionDivision = useRef<HTMLButtonElement | null>(null)
  const actionPlus = useRef<HTMLButtonElement | null>(null)
  const actionMinus = useRef<HTMLButtonElement | null>(null)
  const actionTimes = useRef<HTMLButtonElement | null>(null)
  const actionRemaining = useRef<HTMLButtonElement | null>(null)
  const actionAC = useRef<HTMLButtonElement | null>(null)
  const actionPlusMinus = useRef<HTMLButtonElement | null>(null)

  useEffect(() => {
    document.addEventListener('keydown', (event) => {
      const keyName = event.key
      console.log(keyName)
      switch (keyName) {
        case '0':
          number0.current?.click()
          number0.current?.classList.add('operation-btn-active')
          break;
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
        case '.':
          actionDot.current?.click()
          actionDot.current?.classList.add('operation-btn-active')
          break;
        case '=':
          actionEqual.current?.click()
          actionEqual.current?.classList.add('operation-btn-yellow-active')
          break;
        case '+':
          actionPlus.current?.click()
          actionPlus.current?.classList.add('operation-btn-yellow-active')
          break;
        case '-':
          actionMinus.current?.click()
          actionMinus.current?.classList.add('operation-btn-yellow-active')
          break;
        case '*':
          actionTimes.current?.click()
          actionTimes.current?.classList.add('operation-btn-yellow-active')
          break;
        case '/':
          actionDivision.current?.click()
          actionDivision.current?.classList.add('operation-btn-yellow-active')
          break;
        case '%':
          actionRemaining.current?.click()
          actionRemaining.current?.classList.add('operation-btn-gray-active')
          break;
        case 'Backspace':
          alert('Backspace')
          break;
        default:
          break;
      }
    })

    document.addEventListener('keyup', () => {
      number0.current?.classList.remove('operation-btn-active')
      number1.current?.classList.remove('operation-btn-active')
      number2.current?.classList.remove('operation-btn-active')
      number3.current?.classList.remove('operation-btn-active')
      number4.current?.classList.remove('operation-btn-active')
      number5.current?.classList.remove('operation-btn-active')
      number6.current?.classList.remove('operation-btn-active')
      number7.current?.classList.remove('operation-btn-active')
      number8.current?.classList.remove('operation-btn-active')
      number9.current?.classList.remove('operation-btn-active')
      actionDot.current?.classList.remove('operation-btn-active')
      actionEqual.current?.classList.remove('operation-btn-yellow-active')
      actionPlus.current?.classList.remove('operation-btn-yellow-active')
      actionMinus.current?.classList.remove('operation-btn-yellow-active')
      actionTimes.current?.classList.remove('operation-btn-yellow-active')
      actionDivision.current?.classList.remove('operation-btn-yellow-active')
      actionRemaining.current?.classList.remove('operation-btn-gray-active')
      actionPlusMinus.current?.classList.remove('operation-btn-gray-active')
      actionAC.current?.classList.remove('operation-btn-gray-active')
    })
  }, [])

  const handleClickNumbers = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const numberSelected: string = e?.currentTarget?.textContent || ''
    dispatch(numberSlice.actions.setNumber(numberSelected))
  }

  return (
    <div className="w-full h-full px-4 py-2 grid grid-cols-4 grid-rows-5 items-center justify-center gap-4">
      <button ref={actionAC} onClick={() => dispatch(numberSlice.actions.clearNumber())} className="operation-btn operation-btn-gray">AC</button>
      <button ref={actionPlusMinus} className="operation-btn operation-btn-gray">±</button>
      <button ref={actionRemaining} className="operation-btn operation-btn-gray">%</button>
      <button ref={actionDivision} onClick={() => dispatch(numberSlice.actions.setAction('÷'))} className="operation-btn operation-btn-yellow">÷</button>

      <button ref={number7} onClick={(e) => handleClickNumbers(e)} className="operation-btn">7</button>
      <button ref={number8} onClick={(e) => handleClickNumbers(e)} className="operation-btn">8</button>
      <button ref={number9} onClick={(e) => handleClickNumbers(e)} className="operation-btn">9</button>
      <button ref={actionTimes} onClick={() => dispatch(numberSlice.actions.setAction('*'))} className="operation-btn operation-btn-yellow">x</button>

      <button ref={number4} onClick={(e) => handleClickNumbers(e)} className="operation-btn">4</button>
      <button ref={number5} onClick={(e) => handleClickNumbers(e)} className="operation-btn">5</button>
      <button ref={number6} onClick={(e) => handleClickNumbers(e)} className="operation-btn">6</button>
      <button ref={actionMinus} onClick={() => dispatch(numberSlice.actions.setAction('-'))} className="operation-btn operation-btn-yellow">-</button>

      <button ref={number1} onClick={(e) => handleClickNumbers(e)} className="operation-btn">1</button>
      <button ref={number2} onClick={(e) => handleClickNumbers(e)} className="operation-btn">2</button>
      <button ref={number3} onClick={(e) => handleClickNumbers(e)} className="operation-btn">3</button>
      <button ref={actionPlus} onClick={() => dispatch(numberSlice.actions.setAction('+'))} className="operation-btn operation-btn-yellow">+</button>

      <button ref={number0} onClick={(e) => handleClickNumbers(e)} className="operation-btn col-span-2">0</button>
      <button ref={actionDot} onClick={(e) => handleClickNumbers(e)} className="operation-btn">.</button>
      <button ref={actionEqual} onClick={() => dispatch(numberSlice.actions.calculateResult())} className="operation-btn operation-btn-yellow">=</button>
    </div>
  )
}

export default OperationComponent