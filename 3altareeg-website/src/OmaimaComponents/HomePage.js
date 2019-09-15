import React, { Component } from "react";
import { Link } from "react-router-dom";
// import "./Home.css";
import "./StyleAdmin/HomeAdmin.css";
import AdminNavBar from "./AdminNavBar";
import FooterAdmin from "./FooterAdmin";

export default class Home extends Component {
  render() {
    return (
      <>
        <AdminNavBar />
        {/* <body>
          <div class="BODY">
            <div class="containerhome">
              <div class="cardhome">
                <h3 class="title">Compaines Requests</h3>
                <div class="bar">
                  <div class="emptybar"></div>
                  <div class="filledbar"></div>
                </div>
                <Link to="/Companies">
                  <div class="circlehome">
                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg">
                      <circle class="stroke" cx="60" cy="60" r="50" />
                    </svg>
                  </div>
                </Link>
              </div>
              <div class="cardhome ">
                <h3 class="title">Avaliable Drivers</h3>
                <div class="bar">
                  <div class="emptybar"></div>
                  <div class="filledbar"></div>
                </div>
                <Link to="/Drivers">
                  <div class="circlehome">
                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg">
                      <circle class="stroke" cx="60" cy="60" r="50" />
                    </svg>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </body> */}
        <div className="container">
          <div class="card w-75" style={{ marginTop: "100px" }}>
            <div class="card-body">
              <h5 class="card-title" style={{ fontWeight: "bold" }}>
                Companies requests
              </h5>
              <p class="card-text">
                In this section you will find all the requests of the companies.
              </p>
              <Link to="/Companies" class="btn btn-primary">
                Click here
              </Link>
            </div>
          </div>
          <div class="card w-75" style={{ marginTop: "55px" }}>
            <div class="card-body">
              <h5 class="card-title" style={{ fontWeight: "bold" }}>
                Drivers
              </h5>
              <p class="card-text">
                In this section you will find all of our drivers.
              </p>
              <Link to="/Drivers" class="btn btn-primary">
                Click here
              </Link>
            </div>
          </div>
          <div
            class="card w-75"
            style={{ marginTop: "55px", marginBottom: "60px" }}
          >
            <div class="card-body">
              <h5 class="card-title" style={{ fontWeight: "bold" }}>
                All Companies
              </h5>
              <p class="card-text">
                In this section you will find all of our companies.
              </p>
              <Link to="/AllCompanies" class="btn btn-primary">
                Click here
              </Link>
            </div>
          </div>
        </div>
        <FooterAdmin />
      </>
    );
  }
}
