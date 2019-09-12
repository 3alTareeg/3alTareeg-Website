import React, { Component } from "react";
export default class Drivers extends Component {
  render() {
    console.log(this.props.updatAvaliable);
    const { name, plateNumber, isAvailable, _id } = this.props.driver;
    return (
      <>
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
            >
              isAvailable
              <input
                type="checkbox"
                name="check"
                onChange={this.props.updatAvaliable.bind(
                  this,
                  isAvailable,
                  _id
                )}
              />
            </p>
          </div>
        </div>
      </>
    );
  }
}
