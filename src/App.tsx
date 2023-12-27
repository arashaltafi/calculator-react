import ActionsComponent from "./components/ActionsComponent"
import OperationComponent from "./components/OperationComponent"
import ResultComponent from "./components/ResultComponent"

const App = () => {

  return (
    <div className='div-col'>
      <ResultComponent />
      <ActionsComponent />
      <OperationComponent />
    </div>
  )
}

export default App
