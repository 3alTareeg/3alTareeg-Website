import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

export default function NavBarDriver(props) {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div className="container">
          <a className="navbar-brand" href="/HomeDriver">
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
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to={{
                    pathname: "/AboutDriver",
                    state: {
                      info: props.info
                    }
                  }}
                >
                  About
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  className="nav-link"
                  to={{
                    pathname: "/ContactDriver",
                    state: {
                      info: props.info
                    }
                  }}
                >
                  Contact
                </Link>
              </li>
              <li class="nav-item">
                <Link
                  class="nav-link"
                  to={{
                    pathname: "/HomeDriver",
                    state: {
                      info: props.info
                    }
                  }}
                  style={{ color: "#0cbd9d" }}
                >
                  <i
                    class="fas fa-user-circle"
                    style={{ fontSize: "1.3em" }}
                  ></i>
                  <p> &nbsp; Profile</p>
                </Link>
              </li>

              <li class="nav-item">
                <p
                  class="nav-link"
                  onClick={() => props.logOut()}
                  style={{ color: "red", cursor: "pointer" }}
                >
                  <i
                    class="fas fa-sign-out-alt"
                    style={{ fontSize: "1.3em" }}
                  ></i>
                  <p> &nbsp; Logout</p>
                </p>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
