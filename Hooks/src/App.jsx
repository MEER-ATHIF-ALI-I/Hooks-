import React, { useEffect, useState } from 'react'
import './App.css'


function App() {
  const [value, setValue] =useState(0)
  const [count, setCount] =useState(0)


  useEffect(()=>{
    setCount(prev=>prev+1)
  })
  return (
    <>
   <button onClick={()=>{setValue(prev=>prev -1)}}>-1</button>
   <h1>{value}</h1>
   <button onClick={()=>{setValue(prev=>prev +1)}}>+1</button>
   <h1>Render Count:{count}</h1>
    </>
  )
}


export default App
