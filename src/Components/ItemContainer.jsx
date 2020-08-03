import React, { Component } from "react";
import ItemContent from "./ItemContent";
import { getData } from "../data/data";
import Navbar from "./Navbar";

export default class ItemContainer extends Component {
  state = {
    shoes: getData(),
   
    showCart: false,
    totalItems: 0,
    totalPrice: 0,
  };
  handleShowCart = () => {
    console.log("showed");
    this.setState({
      showCart: !this.state.showCart,
    });
  };

  // addIngredientHandler = (type) => {
  //   const oldCount = this.state.ingredients[type];
  //   console.log('oldCount: ',oldCount);

  //   const updatedCount = oldCount + 1;
  //   console.log('updatedCount: ',updatedCount);

  //   const updatedIngredients = {
  //     ...this.state.ingredients,
  //   };
  //   console.log('type: ',type);
  //   updatedIngredients[type] = updatedCount;
  //   console.log(updatedIngredients[type],'type ing');
  //   const priceAddition = INGREDIENT_PRICES[type];

  //   const oldPrice = this.state.totalPrice;
  //   console.log(oldPrice,'old Price');
  //   const newPrice = oldPrice + priceAddition;
  //   this.setState({
  //     totalPrice: newPrice,
  //     ingredients: updatedIngredients,
  //   });
  // };

  handleAdd = (details) => {
    // let a  = this.state.shoes[details]
    let priceAddition = details.price;
  
    let oldPrice = this.state.totalPrice;
    let newPrice = oldPrice + priceAddition;

    let itemsCount = this.state.totalItems
  
 
    let updatedItemsCount = itemsCount + 1
    console.log(updatedItemsCount,'counted');

    this.setState({
      totalPrice: newPrice,
      totalItems:updatedItemsCount
    });
  };
  render() {
    return (
      <div>
        <Navbar state={this.state} onShowCart={this.handleShowCart} />
        <div className="container mt-5">
          <div className="">
            <ItemContent onAdd={this.handleAdd} shoes={this.state.shoes} />
            {/* <ItemContent  shoes={this.state.shoes} /> */}
          </div>
        </div>
      </div>
    );
  }
}
