import React from 'react'
import "./App.css";
import {incNumber} from "./actions/index";
import {decNumber} from "./actions/index";

import { useSelector, useDispatch } from "react-redux";

const App = () => {

  // it alternative to the useContext hooks in react / consumer from context API
  const changeTheNumber = useSelector(state => state.changeTheNumber);
  
  const dispatch = useDispatch();

  return (
    <>
      <div className="main-div">
      

      <div class="container">
  
      <h1>Increment/Decrement counter</h1>
      <h4>using React and Redux</h4>
      
      <div class="quantity">
        <a class="quantity__minus" title="Decrement" onClick={() => dispatch(decNumber(10))}><span>-</span></a>
        <input name="quantity" type="text" class="quantity__input" value={changeTheNumber} />
        <a class="quantity__plus" title="Increment" onClick={() => dispatch(incNumber(5))}><span>+</span></a>
      </div>
  
          </div>
        </div>
    </>
  )
}

export default App