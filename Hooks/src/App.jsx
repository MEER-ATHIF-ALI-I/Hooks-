import React, { useEffect, useState, useRef, useMemo } from 'react'
import './App.css'
import Header from './components/Header';


function App() {
   const [count, setCount] =useState(0);
   const newFn=()=>{}
  return (
    <>
    <Header newFn={newFn}/>
    <h1>{count}</h1>
    <button onClick ={()=>setCount(prev=>prev+1)}>Click Here</button>
    </>
  )
}


export default App
