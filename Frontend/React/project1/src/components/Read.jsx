const Read = (props) => {
    const todo=props.todo;
    const settodos=props.settodos;
    const deletehandler=(id)=>{
        const filteredtodo = todo.filter(todo=>todo.id!==id)
        settodos(filteredtodo)
    }
    const rendertodo = todo.map(todo => {
        return <li key={todo.id}>{todo.title}  |  <span onClick={()=>deletehandler(todo.id)}>delete</span></li>
    })
    return (
        <div>
            <h1 style={{color: " tomato"}}>Pending ToDos</h1>
            <ol>{rendertodo}</ol>
        </div>
    )
}

export default Read
