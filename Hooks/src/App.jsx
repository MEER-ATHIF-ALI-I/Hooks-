import React, { useEffect, useState, useRef } from 'react'
import './App.css'


function App() {
 
 const inputElem= useRef()

const btnClicked=()=>{
  console.log(inputElem.current);
  inputElem.current.style.background= "blue";
}
  return (
    <>
  <input type="text" ref={inputElem}/>
  <button onClick={btnClicked}>Click Here</button>
    </>
  )
}


export default App
