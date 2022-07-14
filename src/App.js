import logo from './logo.svg';
import './App.css';
import Hello from './components/Hello'
import Welcome from './components/Welcome';
import DemoApp from './DemoApp';
import DemoAppHook from './components/DemoAppHook';
import React, {useState, useEffect} from 'react';


function App() {

   const [flag, setFlag] = useState(false);
   
  return (
    <div className="App">
      <header className="App-header">       

               

            <button onClick={() => setFlag(!flag)}>Swtich Component to Hooks.</button>

            {flag ? <DemoApp /> : <DemoAppHook /> }
      </header>
    </div>
  );
}

export default App;
