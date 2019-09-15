import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

export default function NavBar(props) {
  console.log(props.info);
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div className="container">
          <a className="navbar-brand" href="#">
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
                <Link
                  className="nav-link"
                  to={{
                    pathname: "/HomeCompanies",
                    state: {
                      info: props.info
                    }
                  }}
                >
                  Home
                  <span className="sr-only">(current)</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to={{
                    pathname: "/About",
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
                    pathname: "/Contact",
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
                    pathname: "/CompanyProfile",
                    state: {
                      companyName: props.info.name
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
                  // to="/SignInCompanies"
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
