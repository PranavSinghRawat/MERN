
const handleclick=()=>{
  alert('button clicked')
}
const handleparamclick=(msg)=>{
  alert(msg);
}
const wrapper=()=>{
  handleparamclick('kya ladle padhle ');
}
const App = () => {
  return (
    <> 
      <div>App</div>
      <div>hello world</div>
      <button onClick={handleclick}>click</button>

      <button onClick={wrapper}>click(param)</button>
    </>
    );
}

export default App;

