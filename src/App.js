import './App.css';
import Screen from './components/Screen';
import Button from './components/Button';
import ClearButton from './components/ClearButton';
import inspiredCodeLogo from "./images/logo-large.png";

function App() {
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
        <Screen />
        <div className='row'>
          <Button>1</Button>
          <Button>2</Button>
          <Button>3</Button>
          <Button>+</Button>
        </div>
        <div className='row'>
          <Button>4</Button>
          <Button>5</Button>
          <Button>6</Button>
          <Button>-</Button>
        </div>
        <div className='row'>
          <Button>7</Button>
          <Button>8</Button>
          <Button>9</Button>
          <Button>*</Button>
        </div>
        <div className='row'>
          <Button>=</Button>
          <Button>0</Button>
          <Button>.</Button>
          <Button>/</Button>
        </div>
        <div className='row'>
          <ClearButton>Clear</ClearButton>
        </div>
      </div>
    </div>
  );
}

export default App;
