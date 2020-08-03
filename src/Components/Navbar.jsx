import React from "react";
import Cart from "./Cart";

export default function Navbar(props) {
  return (
    <nav className="navbar navbar-light bg-light justify-content-between">
      <div className="container">
        <div className="title">
          <span  className="navbar-brand">
            Nike
          </span>
        </div>
        <div className="cart">
          <button
            onClick={props.onShowCart}
            type="button"
            className="btn bg-success text-white"
          >
            Cart{" "}
            <span className="badge badge-light ml-2">{props.state.totalItems}</span>
          </button>
          {props.state.showCart ? <Cart totalPrice={props.state.totalPrice} /> : null}
        </div>
      </div>
    </nav>
  );
}
