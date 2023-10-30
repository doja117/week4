import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
let todo=[]
function DisplayArr() {
  return (
    <ul>
      {todo.map((d, index) => (
        <li key={index}>{d}</li>
      ))}
    </ul>
  );
}

function App() {
  const [input,setInput]=useState("")
  return (<>
    <input placeholder='Enter Input' onChange={(e)=>{
      setInput(e.target.value)
    
    }}></input>
    <button onClick={()=>{
      todo.push(input)      
    }}>Submit</button>
    <br />
    <DisplayArr />
  </>)
}

export default App
