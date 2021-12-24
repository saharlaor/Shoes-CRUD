//parent is each shoe component
//import getCat function to be called after each put

import React, { Component, Fragment } from "react";

import api from "../../api/api";

import "./Update.css";

class Update extends Component {
  constructor(props) {
    super(props);
    const { brand, model, size, price } = this.props.initial;
    this.state = { brand, model, size, price };
  }

  generateInputs = () => {
    console.log(this.state);
    return Object.keys(this.state).map((key, i) => (
      <Fragment key={i}>
        <input
          type="text"
          name={key}
          placeholder={`New ${key}`}
          value={this.state[key]}
          onChange={this.handleChange}
          required
        />
        <br />
      </Fragment>
    ));
  };

  handleUpdate = async (e) => {
    e.preventDefault();
    this.props.visFunc();

    await api.put(this.props.id, this.state);
    this.props.getProducts();
  };

  handleCancel = async () => {
    this.props.visFunc();
  };

  handleChange = (e) => {
    console.log(e.target.name);
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    if (!this.state.brand) {
      console.log(this.state);
      return <div></div>;
    }
    const inputs = this.generateInputs();
    return (
      <div className="Update">
        {inputs}
        <button type="submit" onClick={this.handleUpdate}>
          Update
        </button>
        <button onClick={this.handleCancel}>Cancel</button>
      </div>
    );
  }
}
export default Update;
