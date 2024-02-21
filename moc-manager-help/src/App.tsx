// Remove the duplicate import statement for 'React'
// import React from 'react';
import logo from './logo.svg';
import './App.css';
import React from 'react';
import HelloTodd from './HelloTodd';  
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
          <HelloTodd />
        </div>
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
