import ActionsComponent from "./components/ActionsComponent"
import OperationComponent from "./components/OperationComponent"
import ResultComponent from "./components/ResultComponent"

const App = () => {

  return (
    <div className='div-col w-full lg:w-2/3 xl:w-1/2 2xl:w-1/3 h-screen overflow-hidden mx-auto'>
      <section className="w-full bg-yellow-500">
        <ResultComponent />
      </section>
      <section className="w-full bg-sky-500">
        <ActionsComponent />
      </section>
      <section className="w-full flex-1 bg-red-500">
        <OperationComponent />
      </section>
    </div>
  )
}

export default App
