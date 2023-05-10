import React from "react";
import "./Cart.css";
import "bootstrap/dist/css/bootstrap.css";
const Cart = (props) => {
  const cart = props.cart;
  const total = cart.reduce((total, item) => total + Number(item.price), 0);

  return (
    <div className="main-cart">
      <h4>Selected Course</h4>
      <p>Total Course:{cart.length}</p>
      <p>Total price:{total}</p>
      <button className="btn my-btn">Review Order</button>
    </div>
  );
};

export default Cart;
