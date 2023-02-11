import {useState} from 'react';

import Banner from '@components/banner';
import Cart from '@components/cart';
import ShoppingList from '@components/shoppingList'
import QuestionForm from '@components/questionForm';
import './App.css';

function App() {

  const [cart,updateCart] = useState([]);

  return (
    <div className="App">
      <Banner></Banner>
      <div>
        <Cart cart={getCart} updateCart={updateCart}></Cart>
      </div>
      <div>
        <ShoppingList cart={cart} updateCart={updateCart}></ShoppingList>
      </div>
      <div>
        <QuestionForm></QuestionForm>
      </div>
    </div>
  );
}

export default App;
