const App = () => {
  return (
    <div>
      <h1>Create Task</h1>
      <br />
      <form>
        <input
        onChange={(e)=>console.log(e)}
        type="text" placeholder="title" />
        <br />
        <br />
        <input type="checkbox" />Completed
        <br />
        <br />
        <button>create todo</button>
      </form>
    </div>
  )
}

export default App
