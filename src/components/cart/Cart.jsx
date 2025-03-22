import React from 'react';
import "./cart.scss";
import {  useNavigate } from 'react-router-dom';
import { useCart } from './CartContext';


 const Cart = ()=> {
  const navigate = useNavigate();

  const handleClick = (path) => {
    navigate(path) 
  };
  const { cart, addToCart, removeFromCart } = useCart();
  
  return (

    <div className="Cart">
      <h1 className='shop'>Shopping cart</h1>
      <div className="Cart-box">
            <hr className="cart-line" />
            <button
              className="Cart-linetext"
              onClick={() => handleClick("/allsale")}
            >
              Back to the store
            </button>
          </div>
          <div>
      <h2>Корзина</h2>
      {cart.length === 0 ? <p>Корзина пуста</p> : (
        cart.map(item => (
          <div key={item.id}>
            <span>{item.title} - {item.price}₽</span>
            <button onClick={() => removeFromCart(item.id)}>Удалить</button>
          </div>
        ))
      )}
      <button onClick={() => addToCart({ id: 1, name: "Товар 1", price: 500 })}>
        Добавить Товар 1
      </button>
    </div>
       
       
    </div>
  )
}

export default Cart;