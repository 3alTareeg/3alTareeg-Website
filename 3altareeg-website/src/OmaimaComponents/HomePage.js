import React, { Component } from "react";
import { Link } from "react-router-dom";
// import "./Home.css";
import "./StyleAdmin/HomeAdmin.css";
import AdminNavBar from "./AdminNavBar";

export default class Home extends Component {
  render() {
    return (
      <>
        <AdminNavBar />
        <body>
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
        </body>
      </>
    );
  }
}
