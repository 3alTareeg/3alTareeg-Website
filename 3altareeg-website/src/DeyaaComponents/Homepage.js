import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
// import SignInCompanies from "./DeyaaComponents/SignInCompanies";
import "./Style/HomePage.css";
import logo from "./Style/SignInDriver.jpg";
// import bg from "./Style/HomePage.jpg";
import logo2 from "./Style/SignInCompanies.jpg";

class HomePage extends Component {
  state = {};
  render() {
    return (
      // <>
      //   <Link to="/SignInCompanies">
      //     <div>
      //       <h1>Companies</h1>
      //     </div>
      //   </Link>
      //   <Link to="/SignInDrivers">
      //     <div>
      //       <h1>Drivers </h1>
      //     </div>
      //   </Link>
      // </>
      <div className="HomePage">
        <div className="container containerh">
          <Link
            style={{ textDecoration: "none", marginRight: "5%" }}
            to="/SignInDrivers"
          >
            <div className="cardh" style={{ marginRight: "5%" }}>
              <div className="card__image-container">
                <img
                  className="card__image"
                  src={logo}
                  style={{ height: "320px" }}
                  alt=""
                />
              </div>

              <svg className="card__svg" viewBox="0 0 800 500">
                <path
                  className="y"
                  d="M 0 100 Q 50 200 100 250 Q 250 400 350 300 C 400 250 550 150 650 300 Q 750 450 800 400 L 800 500 L 0 500"
                  stroke="transparent"
                  fill="#333"
                />
                <path
                  className="card__line"
                  d="M 0 100 Q 50 200 100 250 Q 250 400 350 300 C 400 250 550 150 650 300 Q 750 450 800 400"
                  stroke="pink"
                  stroke-width="3"
                  fill="transparent"
                />
              </svg>

              <div className="card__content">
                <h1 className="card__title">Driver</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Soluta dolor praesentium at quod autem omnis, amet eaque unde
                  perspiciatis adipisci possimus quam facere illo et quisquam
                  quia earum nesciunt porro.
                </p>
              </div>
            </div>
          </Link>
          <Link to="/SignInCompanies" style={{ textDecoration: "none" }}>
            <div className="cardh">
              <div className="card__image-container">
                <img
                  className="card__image"
                  src={logo2}
                  alt=""
                  style={{ height: "320px" }}
                />
              </div>

              <svg className="card__svg" viewBox="0 0 800 500">
                <path
                  d="M 0 100 Q 50 200 100 250 Q 250 400 350 300 C 400 250 550 150 650 300 Q 750 450 800 400 L 800 500 L 0 500"
                  stroke="transparent"
                  fill="#333"
                />
                <path
                  className="card__line"
                  d="M 0 100 Q 50 200 100 250 Q 250 400 350 300 C 400 250 550 150 650 300 Q 750 450 800 400"
                  stroke="pink"
                  stroke-width="3"
                  fill="transparent"
                />
              </svg>

              <div className="card__content">
                <h1 className="card__title">Company</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Soluta dolor praesentium at quod autem omnis, amet eaque unde
                  perspiciatis adipisci possimus quam facere illo et quisquam
                  quia earum nesciunt porro.
                </p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    );
  }
}

export default HomePage;
