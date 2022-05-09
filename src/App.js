import React from 'react';
import logo from './logo.svg';
import './App.css';
import Fcomponent from './Fcomponent';
import Ccomponent from './Ccomponent';
import { Menu } from './Menu';
import Fg from './Fg';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Fcomponent />
        <Ccomponent />
        <Menu />
        <Fg />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
        Web Developer Blog
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Web Developer Blog
        </a>
      </header>
    </div>
  );
}

export default App;

