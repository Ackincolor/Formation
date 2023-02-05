import React from 'react';
import logo from './logo.svg';
import './App.css';

import Menu from './components/menu/menu';

import './assets/css/style.scss'
import './assets/js/app'


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <Menu></Menu>
      </header>
    </div>
  );
}

export default App;
