import { useEffect, useState } from "react"
import ActionsComponent from "./components/ActionsComponent"
import OperationComponent from "./components/OperationComponent"
import ResultComponent from "./components/ResultComponent"
import { Provider } from 'react-redux';
import { store } from './redux/store.ts';

const App = () => {
  const [orientation, setOrientation] = useState<number | null>(null);

  useEffect(() => {
    if (localStorage.getItem('theme') === 'dark') {
      document.documentElement.classList.add('dark');
    } else if (localStorage.getItem('theme') === 'light') {
      document.documentElement.classList.remove('dark')
    }

    setOrientation(window.orientation);
    window.addEventListener('orientationchange', () => {
      setOrientation(window.orientation);
    });
  }, [])

  return (
    <Provider store={store}>
      {orientation ? (
        <p className="h1 text-slate-800 dark:text-slate-100 w-full h-screen flex items-center justify-center">Please Rotate Your Device To Portrait</p>
      ) : (
        <div className='ios-padding div-col py-2 md:py-4 lg:py-8 w-full md:w-2/3 h-screen md:h-[calc(100vh_-_2rem)] overflow-hidden mx-auto md:my-4 rounded-xl border-0 md:border-2 border-solid border-slate-900 dark:border-slate-100'>
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
      )}
    </Provider>
  )
}

export default App
