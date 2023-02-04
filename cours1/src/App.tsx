import React from 'react';

import Banner from './components/banner';
import Cart from './components/cart';
import ShoppingList from './components/shoppingList'
import QuestionForm from './components/questionForm';

import './App.css';

function App() {
  return (
    <div className="App">
      <Banner></Banner>
      <div>
      <Cart></Cart>
      </div>
      <div>
        <ShoppingList></ShoppingList>
      </div>
      <div>
        <QuestionForm></QuestionForm>
      </div>
    </div>
  );
}

export default App;
