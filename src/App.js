import './App.css';
import Screen from './components/Screen';
import Button from './components/Button';
import ClearButton from './components/ClearButton';
import inspiredCodeLogo from "./images/logo-large.png";
import { useState } from 'react';
import { evaluate } from "mathjs";

function App() {

  const [input,setInput] = useState("");

  const updateInput = (value) => {
    setInput(input + value);
  };

  const calculateResult = () => {
    input ? setInput(evaluate(input)) : alert("please enter a number");
  };

  return (
    <div className="App">
      <div className='inspiredCode-logo-container'>
        <img 
          src={inspiredCodeLogo}
          className='inspiredCode-logo'
          alt='Inspired Code logo'
        />
      </div>
      <div className='calculator-container'>
        <Screen input={input} />
        <div className='row'>
          <Button clickHandler = {updateInput}>1</Button>
          <Button clickHandler = {updateInput}>2</Button>
          <Button clickHandler = {updateInput}>3</Button>
          <Button clickHandler = {updateInput}>+</Button>
        </div>
        <div className='row'>
          <Button clickHandler = {updateInput}>4</Button>
          <Button clickHandler = {updateInput}>5</Button>
          <Button clickHandler = {updateInput}>6</Button>
          <Button clickHandler = {updateInput}>-</Button>
        </div>
        <div className='row'>
          <Button clickHandler = {updateInput}>7</Button>
          <Button clickHandler = {updateInput}>8</Button>
          <Button clickHandler = {updateInput}>9</Button>
          <Button clickHandler = {updateInput}>*</Button>
        </div>
        <div className='row'>
          <Button clickHandler = {calculateResult}>=</Button>
          <Button clickHandler = {updateInput}>0</Button>
          <Button clickHandler = {updateInput}>.</Button>
          <Button clickHandler = {updateInput}>/</Button>
        </div>
        <div className='row'>
          <ClearButton clearHandler={()=> setInput("")} >
            Clear
          </ClearButton>
        </div>
      </div>
    </div>
  );
}

export default App;
