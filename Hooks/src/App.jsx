import React, { useEffect, useState, useRef, useMemo, useCallback } from 'react'
import './App.css'
import Header from './components/Footer';
import Profile from './components/Profile';
import Footer from './components/Footer';
import { useReducer } from 'react';


function App() {
  const initialState={count:0}

  const reducer =(state, action)=>{
    switch(action.type){
      case 'increase' : {
        return {count:state.count + 1}
      }
      case 'decrease' :{
        return {count:state.count - 1}
      }
      case 'input' : {
        return {count: action.payload}
      }
      default:{
        return state
      }
    }
    
  }
  
  const[state,dispatch] = useReducer(reducer, initialState)
   
  return (
    <>
    <h1>{state.count}</h1>
    <button onClick={()=>dispatch({type:'increase'})}>Increase</button>

    <button onClick={()=>dispatch({type:'decrease'})}>Decrease</button>
    <br/>
    <input value={state.count}
    onChange={(e)=>dispatch({type:'input', payload: Number(e.target.value)})}
     type="number"/>


    {/* <Profile/>
    <Footer/> */}
    </>
  )
}


export default App
