interface TodoListProps {
    name: string
}

const TodoList = (props: TodoListProps) => {

    const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        alert(`Hello World, ${e.currentTarget.innerText}`)
        console.log(e)
    }

    return (
        <div className="div-col">
            <h1 className="h1">TodoList Component</h1>
            <p className="p">{props.name}</p>
            <button className="btn" onClick={(e) => handleClick(e)}>Click Me</button>
            <input className="input" type="text" />
        </div>
    )
}

export default TodoList