import React from 'react';
import logo from './logo.svg';

import { BrowserRouter, Routes, Route} from "react-router-dom";
import Dashboard from './pages/Dashboard';
import Transaction from './pages/Transaction';
import Mpc from './pages/Mpc';
import Consultation from './pages/Consultation';

import Menu from './components/menu/menu';

import './App.scss'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Menu />}>
          <Route index element={<Dashboard />}/>
          <Route path="consultation" element={<Consultation />}/>
          <Route path="transaction" element={<Transaction />}/>
          <Route path="mpc" element={<Mpc />}/>
        </Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
