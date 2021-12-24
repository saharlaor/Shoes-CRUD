import React, { Component } from "react";

import Update from "../Update/Update";
import api from "../../api/api";

import "./ShoeCard.css";

class ShoeCard extends Component {
  state = { visibilityUpdate: false, id: "" };

  changeVis = () => {
    this.setState((prevState) => {
      return { visibilityUpdate: !prevState.visibilityUpdate };
    });
  };

  deleteProducts = async () => {
    await api.delete(`/${this.props.product.id}`);
    this.props.getProducts();
  };

  render() {
    if (this.state.visibilityUpdate)
      return (
        <div key={this.props.product.id} className="ShoeCard">
          <Update
            id={this.props.product.id}
            getProducts={this.props.getProducts}
            visFunc={this.changeVis}
            initial={this.props.product}
          />
        </div>
      );
    const { brand, model, size, price } = this.props.product;
    return (
      <div key={this.props.product.id} className="ShoeCard">
        <strong>Brand:</strong> {brand}
        <br />
        <strong>Model:</strong> {model}
        <br />
        <strong>Size:</strong> {size}
        <br />
        <strong>Price:</strong> {price}
        <br />
        <button onClick={this.changeVis}>Update</button>
        <button onClick={this.deleteProducts}>Remove</button>
      </div>
    );
  }
}
export default ShoeCard;

//child is the update

// create each cat instance card with call that cat card information

//create a card with a delete button that has a 'delete api' calling that will delete that specific cat and then call the getCat to update the state with out the deleted cat

//has an update component = needs an ID from the parent, the get function

//delete btn
//update component
