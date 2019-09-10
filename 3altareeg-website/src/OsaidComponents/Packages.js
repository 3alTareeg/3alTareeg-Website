import React, { Component } from "react";

export default class Packages extends Component {
  cardStyle = {
    boxShadow: "0px 22px 34px -27px rgba(0,0,0,0.75)"
  };
  cardRecommand = {
    boxShadow: "0px 13px 14px -1px rgba(0,0,0,0.75)"
  };

  render() {
    return (
      <div style={{ width: "80%", margin: "auto" }}>
        <div class="card-deck">
          <div class="card" style={this.cardStyle}>
            <img src={require("./pic/10.png")} class="card-img-top" alt="..." />

            <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">Cras justo odio</li>
    <li class="list-group-item">Dapibus ac facilisis in</li>
    <li class="list-group-item">Vestibulum at eros</li>
  </ul>
  <div class="card-body">
    <a href="#" class="btn btn-primary btn-lg">Card link</a>
  </div>
          </div>
          
          <div class="card" style={this.cardRecommand}>
            <img src={require("./pic/20.png")} class="card-img-top" alt="..." />
            <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">Cras justo odio</li>
    <li class="list-group-item">Dapibus ac facilisis in</li>
    <li class="list-group-item">Vestibulum at eros</li>
  </ul>
  <div class="card-body">
    <a href="#" class="btn btn-primary btn-lg">Card link</a>
  </div>
          </div>
          <div class="card" style={this.cardStyle}>
            <img src={require("./pic/30.png")} class="card-img-top" alt="..." />
            <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">Cras justo odio</li>
    <li class="list-group-item">Dapibus ac facilisis in</li>
    <li class="list-group-item">Vestibulum at eros</li>
  </ul>
  <div class="card-body">
    <a href="#" class="btn btn-primary btn-lg">Card link</a>
  </div>
          </div>
        </div>
      </div>
    );
  }
}