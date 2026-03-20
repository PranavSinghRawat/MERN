import { useState } from "react";

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

  const profiles=[
    {name: 'pranav',age: 20},
    {name: 'ayushman',age: 21},
    {name: 'atharv',age: 18}
  ];
  const updatedprofiles=profiles.map((profiles,index)=>{
    return(
      <li>
        <span>Name: {profiles.name} </span>
        <small>Age: {profiles.age}</small>
      </li>
    )
  });

  const[username,setusername]=useState('pranav');
  const changehandler=()=>{
    setusername('atharv');
  }
  return (
    <> 
      <div>App</div>
      <div>hello world</div>
      <button onClick={handleclick}>click</button>
      <button onClick={wrapper}>click(param)</button>
      <h1>Rendering json</h1>
      <ol>{updatedprofiles}</ol>
      <h2>Username</h2>
      <h3>{username}</h3>
      <button onClick={changehandler}>change username</button>
    </>
    );
}

export default App;

