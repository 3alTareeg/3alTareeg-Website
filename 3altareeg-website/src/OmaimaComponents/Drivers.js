import React, { Component } from "react";
export default class Drivers extends Component {
  state = {
    show: false
  };
  render() {
    const {
      name,
      plateNumber,
      isAvailable,
      _id,
      nameProduct,
      productWeight,
      file,
      work,
      email
    } = this.props.driver;
    return (
      <>
        {/* <div class="BODYD">
          <div
            class="card text-white bg-info mb-3"
            style={{ "max-width": "18rem" }}
          >
            <div class="card-header">Number of car:{plateNumber}</div>
            <div class="card-body">
              <h5 class="card-title">Driver name:{name}</h5>
              <p
                class="card-text"
                style={{ color: isAvailable ? "red" : "black" }}
              > */}
        {/* isAvailable */}
        {/* <input
                  type="checkbox"
                  name="check"
                  onChange={this.props.updatAvaliable.bind(
                    this,
                    isAvailable,
                    _id
                  )}
                /> */}
        {/* </p>
              <p>
                {nameProduct.map((elem, i) => (
                  <p>
                    Product: {elem}, Weight: {productWeight[i]}
                  </p>
                ))}
              </p>
            </div>
          </div>
        </div> */}
        <div className="card card-body mb-3">
          <h4 style={{ marginTop: "0" }}>
            <span style={{ fontWeight: "bold" }}> Driver Name:</span> {name}{" "}
            <i
              class="fas fa-sort-down"
              style={{ cursor: "pointer" }}
              onClick={() => {
                this.setState({ Show: !this.state.Show });
              }}
            ></i>{" "}
          </h4>
          <ul
            className="list-group"
            style={this.state.Show ? { display: "block" } : { display: "none" }}
          >
            <li className="list-group-item">
              {" "}
              <span style={{ fontWeight: "bold" }}>Plate Number:</span>{" "}
              {plateNumber}
            </li>
            <li className="list-group-item">
              {" "}
              <span style={{ fontWeight: "bold" }}>Email:</span> {email}
            </li>
            <li className="list-group-item">
              {" "}
              <span style={{ fontWeight: "bold" }}>Work:</span> {work}
            </li>
            <li className="list-group-item">
              <span style={{ fontWeight: "bold" }}>Products:</span>{" "}
              <ol>
                {nameProduct.map((elem, i) => (
                  <li>
                    <span style={{ fontWeight: "bold" }}> Product Name:</span>{" "}
                    {elem},{" "}
                    <span style={{ fontWeight: "bold" }}> Weight: </span>
                    {productWeight[i]}
                  </li>
                ))}{" "}
              </ol>
            </li>
          </ul>
        </div>
      </>
    );
  }
}
