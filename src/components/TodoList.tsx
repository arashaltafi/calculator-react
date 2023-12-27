interface TodoListProps {
    name: string
}

const TodoList = (props: TodoListProps) => {
    return (
        <div>
            <h1>TodoList</h1>
            <p>{props.name}</p>
        </div>
    )
}

export default TodoList