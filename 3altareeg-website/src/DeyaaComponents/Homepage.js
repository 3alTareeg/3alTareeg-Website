import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
// import SignInCompanies from "./DeyaaComponents/SignInCompanies";

class HomePage extends Component {
  state = {};
  render() {
    return (
      <>
        <Link to="/SignInCompanies">
          <div>
            <h1>Companies</h1>
          </div>
        </Link>
        <Link to="/SignInDrivers">
          <div>
            <h1>Drivers </h1>
          </div>
        </Link>
      </>
    );
  }
}

export default HomePage;
