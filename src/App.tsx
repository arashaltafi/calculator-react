import { useEffect } from "react"
import ActionsComponent from "./components/ActionsComponent"
import OperationComponent from "./components/OperationComponent"
import ResultComponent from "./components/ResultComponent"
import { Provider } from 'react-redux';
import { store } from './redux/store.ts';

const App = () => {

  useEffect(() => {
    if (localStorage.getItem('theme') === 'dark') {
      document.documentElement.classList.add('dark');
    } else if (localStorage.getItem('theme') === 'light') {
      document.documentElement.classList.remove('dark')
    }
  }, [])

  return (
  <Provider store={store}>
    <div className='div-col py-2 md:py-4 lg:py-8 w-full md:w-2/3 xl:w-1/2 2xl:w-1/3 h-screen md:h-[calc(100vh_-_2rem)] overflow-hidden mx-auto md:my-4 rounded-xl border-0 md:border-2 border-solid border-slate-900 dark:border-slate-100'>
      <section className="w-full">
        <ActionsComponent />
      </section>
      <section className="w-full">
        <ResultComponent />
      </section>
      <section className="w-full flex-1">
        <OperationComponent />
      </section>
    </div>
   </Provider>
  )
}

export default App
