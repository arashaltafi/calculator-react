const OperationComponent = () => {
  return (
    <div className="w-full px-4 py-2 grid grid-cols-4 grid-rows-5 items-center justify-center gap-4">
      <button className="operation-btn operation-btn-gray">AC</button>
      <button className="operation-btn operation-btn-gray">±</button>
      <button className="operation-btn operation-btn-gray">%</button>
      <button className="operation-btn operation-btn-yellow">÷</button>

      <button className="operation-btn">7</button>
      <button className="operation-btn">8</button>
      <button className="operation-btn">9</button>
      <button className="operation-btn operation-btn-yellow">x</button>

      <button className="operation-btn">4</button>
      <button className="operation-btn">5</button>
      <button className="operation-btn">6</button>
      <button className="operation-btn operation-btn-yellow">-</button>

      <button className="operation-btn">1</button>
      <button className="operation-btn">2</button>
      <button className="operation-btn">3</button>
      <button className="operation-btn operation-btn-yellow">+</button>

      <button className="operation-btn col-span-2">0</button>
      <button className="operation-btn">.</button>
      <button className="operation-btn operation-btn-yellow">=</button>
    </div>
  )
}

export default OperationComponent