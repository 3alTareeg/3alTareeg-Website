import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import SignUpDriver from "./DeyaaComponents/SignUpDriver";
import SignInDriver from "./DeyaaComponents/SignInDriver";
import SignUpCompanies from "./DeyaaComponents/SignUpCompanies";
import SignInCompanies from "./DeyaaComponents/SignInCompanies";
import HomePageLogin from "./DeyaaComponents/Homepage";
import HomePage from "./OsaidComponents/HomePage";
import FormPage from "./AlfarComponents/FormPage";
import HomePageAdmin from "./OmaimaComponents/HomePage";
import MapCompanies from "./OmaimaComponents/MapCompanies";
import MapDrivers from "./OmaimaComponents/MapDrivers";
import LoginAdmin from "./OmaimaComponents/LoginAdmin";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Contact from "./OsaidComponents/Contact";

//WARNING: PLEASE DONT DO ANY CHANGES IN THIS FILE, JUST CALL YOUR COMPONENT HERE TO TEST IF IT WORKS, THEN REMOVE IT.

class App extends Component {
  state = {};

  render() {
    return (
      <>
        {/* <h1>React Working Fine</h1>
        <button onClick={this.checkServer}>Checking server</button> */}
        {/* <SignUpCompanies />
        <SignInCompanies />
        <SignUpDriver />
        <SignInDriver /> */}
        <Router>
          <Route exact path="/Login" component={HomePageLogin} />
          <Route exact path="/SignInCompanies" component={SignInCompanies} />
          <Route exact path="/SignUpCompanies" component={SignUpCompanies} />
          <Route exact path="/SignInDrivers" component={SignInDriver} />
          <Route exact path="/SignUpDrivers" component={SignUpDriver} />
          <Route exact path="/" component={HomePage} />
          <Route exact path="/Contact" component={Contact} />
          <Route exact path="/FormPage" component={FormPage} />
          <Route exact path="/HomeAdmin" component={HomePageAdmin} />
          <Route exact path="/Companies" component={MapCompanies} />
          <Route exact path="/Drivers" component={MapDrivers} />
          <Route exact path="/LoginAdmin" component={LoginAdmin} />

        </Router>
        {/* <HomePage /> */}
      </>
    );
  }
}

export default App;
