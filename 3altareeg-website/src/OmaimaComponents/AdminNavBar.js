import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

class AdminNavBar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
          <div className="container">
            <a className="navbar-brand" href="/HomeAdmin">
              <i class="fas fa-road"></i> ON THE ROAD
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarResponsive"
              aria-controls="navbarResponsive"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarResponsive">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item active">
                  <a className="nav-link" href="/HomeAdmin">
                    Home
                    <span className="sr-only">(current)</span>
                  </a>
                </li>
                <li class="nav-item">
                  <Link
                    class="nav-link"
                    // onClick={}
                    to="/LoginAdmin"
                    style={{ color: "red", cursor: "pointer" }}
                  >
                    <i
                      class="fas fa-sign-out-alt"
                      style={{ fontSize: "1.3em" }}
                    ></i>
                    <p> &nbsp; Logout</p>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default AdminNavBar;
