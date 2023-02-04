import React from 'react';

import Banner from './components/banner/Banner';
import Cart from './components/cart/Cart';

import './App.css';

function App() {
  return (
    <div className="App">
      <Banner></Banner>
      <div>
      <Cart></Cart>
      </div>
    </div>
  );
}

export default App;
