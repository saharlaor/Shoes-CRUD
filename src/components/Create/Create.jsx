//parent is each shoe component
//import getCat function to be called after each put

import React, { Component, Fragment } from "react";
import api from "../../api/api";

import "./Create.css";

class Create extends Component {
  state = { brand: "", model: "", size: "", price: "" };

  generateInputs = () => {
    return Object.keys(this.state).map((key, i) => (
      <Fragment key={i}>
        <input
          type="text"
          name={key}
          placeholder={`New ${key}`}
          value={this.state[key]}
          onChange={this.handleChange}
        />
      </Fragment>
    ));
  };

  postProducts = async () => {
    await api.post("/", this.state);
    this.props.getProducts();
    this.props.hideCreate();
  };

  handleChange = (e) => {
    console.log(e.target.name);
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div className="Create">
        {this.generateInputs()}
        <button onClick={this.postProducts}>Create</button>
      </div>
    );
  }
}
export default Create;
