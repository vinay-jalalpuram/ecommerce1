import logo from './logo.svg';
import './App.css';
import Hello from './components/Hello'
import Welcome from './components/Welcome';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload1.
          <Hello>vinay</Hello>
          <Hello name="suresh"></Hello>
          <Hello name="ramesh"></Hello>
          <Hello name="shekar"></Hello>
          <Hello name="john"></Hello>
          <Hello name="shyam"></Hello>
          
          
          Welcome class components below: 
          <Welcome name="suresh">12</Welcome>
          <Welcome name="ramesh">13</Welcome>
          <Welcome name="shyam">14</Welcome>

        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
