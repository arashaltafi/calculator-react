import TodoList from "./components/TodoList"

const App = () => {

  return (
    <div className='flex items-center justify-center flex-col gap-8'>
      Component App
      <TodoList name="Prop Test" />
    </div>
  )
}

export default App
