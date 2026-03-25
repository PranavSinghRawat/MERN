import { useState } from "react"
import { nanoid } from "nanoid"

const App = () => {

  const [todo, settodos] = useState([
    { id: 1, title: "kaam karle", isCompleted: false }
  ])
  const [title, settitle] = useState("")
  const Submithandler = (e) => {
    e.preventDefault();
    const newtodo = {
      id: nanoid(),
      title: title,
      isCompleted: false
    }
    console.log(newtodo)
    const copytodo=[...todo];
    copytodo.push(newtodo);
    settodos(copytodo)
    settitle("")
  }
  const rendertodo=todo.map(todo=>{
    return <li key={todo.id}>{todo.title}</li>
  })
  return (
    <div>
      <h1>Create Task</h1>
      <br />
      <form onSubmit={Submithandler}>
        <input
          onChange={(e) => settitle(e.target.value)}
          value={title}
          type="text" placeholder="title" />
        <br />
        {/*<br />
        <input onChange={(e)=>console.log(e.target.checked)} type="checkbox" />Completed
        <br /> 

        <br />*/}
        <button>create todo</button>
      </form>
      <hr />
      <h1>Pending ToDos</h1>
      <ol>{rendertodo}</ol>
    </div>
  )
}

export default App
