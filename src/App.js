import './App.css';
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
    </div>
  );
}

export default App;
