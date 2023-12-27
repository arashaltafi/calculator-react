import React from "react"
import TodoList from "./components/TodoList"

const App = () => {

  const styles: React.CSSProperties = {
    color: 'black'
  }

  return (
    <div style={styles} className='flex items-center justify-center flex-col gap-8'>
      Component App
      <TodoList name="Prop Test" />
    </div>
  )
}

export default App
