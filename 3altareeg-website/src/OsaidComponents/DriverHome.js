import React, { Component } from "react";
import NavBar from "./NavBar";

export default class Drivers extends Component {
  Counter = () => {};
  render() {
    return (
      <div style={{ margin: "auto" }}>
        <br></br>
        <br></br>
        <br></br>
        <NavBar />
        <div className="driver">
          <div class="alert alert-primary" role="alert">
            Welcome : Osaid Ayadi
          </div>{" "}
          <p>
            <strong>Email: </strong> osaid@yahoo.com{" "}
          </p>
          <p>
            <strong>Plate Number: </strong> 50-22515{" "}
          </p>
          <p>
            <strong>Work: </strong>
            <span class="tags">UBER</span>
          </p>
        </div>
        <div class="card" style={{ margin: "auto" }}>
          <img
            src="http://f1.imgci.com/PICTURES/CMS/28500/28513.jpg"
            class="card-img-top"
            style={{
              width: "200px",
              height: "200px",
              margin: "auto",
              borderRadius: "50%"
            }}
            alt="..."
          />
          <br></br>
          <figure style={{ margin: "auto" }}>
            <figcaption class="ratings">
              <p>
                Ratings
                <a href="#">
                  <span class="fa fa-star"></span>
                </a>
                <a href="#">
                  <span class="fa fa-star"></span>
                </a>
                <a href="#">
                  <span class="fa fa-star"></span>
                </a>
                <a href="#">
                  <span class="fa fa-star"></span>
                </a>
                <a href="#">
                  <span class="fa fa-star-o"></span>
                </a>
              </p>
            </figcaption>
          </figure>
          <div class="card-body"></div>
          <ul class="list-group list-group-flush">
            <h2>
              <strong>Your Wallet</strong>
            </h2>
            <h2>
              <strong
                style={{
                  border: "2px solid gray",
                  display: "block",
                  padding: "auto"
                }}
              >
                $ 158.5{" "}
              </strong>
            </h2>
            <h2>
              <strong>Your Products</strong>
            </h2>
            <div
              id="product"
              style={{ display: "grid", gridTemplateColumns: "auto auto auto" }}
            >
              <li class="list-group-item">
                {" "}
                <img
                  src="https://i5.walmartimages.com/asr/bbd7504a-a39c-479d-a2de-5288d49d7c4d_1.09d5f701091987e3ec287bba19f38ef4.jpeg?odnHeight=450&odnWidth=450&odnBg=FFFFFF"
                  style={{ width: "150px", height: "150px" }}
                  class="card-img-top"
                  alt="..."
                />
                <div class="card-body">
                  <p
                    class="card-text"
                    style={{ gridColumnStart: 1, gridColumnEnd: 2 }}
                  >
                    {" "}
                    Pepsi{" "}
                  </p>
                </div>
              </li>
              <li class="list-group-item">
                {" "}
                <img
                  src="https://images-na.ssl-images-amazon.com/images/I/71dVrBe4qdL._SL1500_.jpg"
                  style={{ width: "150px", height: "150px" }}
                  class="card-img-top"
                  alt="..."
                />
                <div class="card-body">
                  <p
                    class="card-text"
                    style={{ gridColumnStart: 1, gridColumnEnd: 2 }}
                  >
                    {" "}
                    Reese's Chocolate{" "}
                  </p>
                </div>
              </li>
              <li class="list-group-item">
                {" "}
                <img
                  src="https://images-na.ssl-images-amazon.com/images/I/51alnVJ4aFL._SX569_.jpg"
                  style={{ width: "150px", height: "150px" }}
                  class="card-img-top"
                  alt="..."
                />
                <div class="card-body">
                  <p
                    class="card-text"
                    style={{ gridColumnStart: 1, gridColumnEnd: 2 }}
                  >
                    {" "}
                    Car Charger for iPhone XS{" "}
                  </p>
                </div>
              </li>
            </div>
          </ul>
        </div>
      </div>
    );
  }
}
