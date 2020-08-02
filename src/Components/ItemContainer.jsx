import React, { Component } from "react";
import ItemContent from "./ItemContent";
import { getData } from "../data/data";
import Navbar from "./Navbar";

export default class ItemContainer extends Component {
  state = {
    shoes: getData(),
    totalItems:5,
    showCart:false,
    addedItems:1,
    totalPrice:100
  };
  handleShowCart = ()=>{
      console.log('showed');
      this.setState({
          showCart:!this.state.showCart
      })
  }
  render() {
    return (
      <div>
          <Navbar
      
          state={this.state}
          onShowCart={this.handleShowCart}
          />
        <div className="container mt-5">
          <div className="">
            <ItemContent  shoes={this.state.shoes} />
            {/* <ItemContent  shoes={this.state.shoes} /> */}
          </div>
        </div>
      </div>
    );
  }
}
