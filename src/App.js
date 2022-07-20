import React from 'react';
import './App.css';
import {useSelector, useDispatch} from 'react-redux'
import {incNumber, decNumber} from "./actions/index"

function App() {
  const myState = useSelector((state)=>state.changeTheNumber)
  const dispatch = useDispatch();
  return (
    <>
    <div className="main-div">
      <div className="container">
      <h1>Increment and Decrement</h1>
      <h4>using react redux</h4>
      <div className="quantity">
        <a  className="quantity__minus" onClick={()=> dispatch(decNumber(5))}><span>-</span></a>
        <input className="quantity__input" type="text" value={myState} />
        <a  className="quantity__plus" onClick={()=> dispatch(incNumber(5))}><span>+</span></a>
      </div>
      </div>
    </div>
    </>
  );
}

export default App;
