import { useRef } from "react"

interface TodoListProps {
    name: string
}

const TodoList = (props: TodoListProps) => {

    const inputName = useRef<HTMLInputElement>(null);

    const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        alert(`Hello World, ${inputName.current}`)
        console.log('handleClick', e)
        console.log('inputName', inputName?.current?.value)
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log('handleChange', e)
    }

    return (
        <div className="div-col">
            <h1 className="h1">TodoList Component</h1>
            <p className="p">{props.name}</p>
            <button className="btn" onClick={(e) => handleClick(e)}>Click Me</button>
            <input ref={inputName} className="input" type="text" onChange={(e) => handleChange(e)} />
        </div>
    )
}

export default TodoList