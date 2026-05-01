import { useState } from "react"
import { nanoid } from "nanoid"

const Create = (props) => {
    const todo=props.todo;
    const settodos=props.settodos;
    const [title, settitle] = useState("")
    const Submithandler = (e) => {
        e.preventDefault();
        const newtodo = {
            id: nanoid(),
            title: title,
            isCompleted: false
        }
        console.log(newtodo)
        const copytodo = [...todo];
        copytodo.push(newtodo);      //settodos([...todo,newtodo]) we can do this instead of that three step to copy
        settodos(copytodo)
        settitle("")
    }
    return (
        <>
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
        </>
    )
}

export default Create
