import React, { Component } from "react";
export default class Company extends Component {
  state = { Show: false };
  render() {
    const { updateRequest } = this.props;
    const {
      name,
      request,
      email,
      order,
      _id,
      Package,
      address,
      nameProduct,
      numberOfProducts,
      productWeight,
      price,
      file,
      Date,
      Status
    } = this.props.company;
    return (
      <div className="card card-body mb-3">
        <h4 style={{ marginTop: "0" }}>
          {name} Company <span style={{ color: "rgb(145, 154, 163)" }}></span>
          {` `}
          <i
            class="fas fa-sort-down"
            style={{ cursor: "pointer" }}
            onClick={() => {
              this.setState({ Show: !this.state.Show });
            }}
          />
        </h4>
        <ul
          className="list-group"
          style={this.state.Show ? { display: "block" } : { display: "none" }}
        >
          <li className="list-group-item">
            <span style={{ fontWeight: "bold" }}> Email: </span> {email}
          </li>
          <li className="list-group-item">
            <span style={{ fontWeight: "bold" }}> Address: </span> {address}
          </li>
          <li className="list-group-item">
            <span style={{ fontWeight: "bold" }}>Package</span>: {Package} Cars
          </li>
          <li className="list-group-item">
            <span style={{ fontWeight: "bold" }}> Name of Product: </span>
            {nameProduct}
          </li>
          <li className="list-group-item">
            <span style={{ fontWeight: "bold" }}> Number of Products: </span>
            {numberOfProducts}
          </li>
          <li className="list-group-item">
            <span style={{ fontWeight: "bold" }}> Price: </span> {price} JD
          </li>
          <li className="list-group-item">
            <span style={{ fontWeight: "bold" }}> Product Weight: </span>
            {productWeight}
          </li>
          <li className="list-group-item">
            <span style={{ fontWeight: "bold" }}> Id: </span> {_id}
          </li>
        </ul>
      </div>
    );
  }
}
