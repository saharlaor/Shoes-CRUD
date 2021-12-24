import React from "react";
import ShoeCard from "../ShoeCard/ShoeCard";

import api from "../../api/api";

import "./App.css";
import Create from "../Create/Create";

class App extends React.Component {
  state = {
    products: [],
    createVis: true,
  };

  getProducts = async () => {
    const { data } = await api.get();
    this.setState({ products: data });
  };

  componentDidMount() {
    this.getProducts();
  }

  render() {
    console.log(this.state.createVis);
    const createObj = this.state.createVis ? (
      <button
        className="create-btn"
        onClick={() => this.setState({ createVis: false })}>
        Create a new shoe
      </button>
    ) : (
      <Create
        getProducts={this.getProducts}
        hideCreate={() => this.setState({ createVis: true })}
      />
    );
    const shoeList = this.state.products.map((product) => {
      return (
        <ShoeCard
          getProducts={this.getProducts}
          product={product}
          key={product.id}
        />
      );
    });
    return (
      <div className="App">
        {createObj}
        <div className="App__shoe-list">{shoeList}</div>
      </div>
    );
  }
}

export default App;
