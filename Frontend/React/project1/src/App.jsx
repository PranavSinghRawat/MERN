import { useState } from "react"
import { nanoid } from "nanoid"
import Create from "./components/Create"
import Read from "./components/Read"
import { Fragment } from "react"
const App = () => {

  const [todo, settodos] = useState([
    { id: 1, title: "kaam karle", isCompleted: false }
  ])
  
  
  
  return (
    <Fragment>
      <Create todo={todo} settodos={settodos} />
      <Read todo={todo} settodos={settodos}  />
    </Fragment>
  )
}

export default App
