const Read = (props) => {
    const todo=props.todo;
    const settodos=props.settodos;
    const rendertodo = todo.map(todo => {
        return <li key={todo.id}>{todo.title}</li>
    })
    return (
        <div>
            <h1>Pending ToDos</h1>
            <ol>{rendertodo}</ol>
        </div>
    )
}

export default Read
