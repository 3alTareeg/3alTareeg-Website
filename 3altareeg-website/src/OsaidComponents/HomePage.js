import React, { Component } from "react";
import NavBar from "./NavBar";
import Header from "./Header";
import PageContent from "./PageContent";
import Footer from "./Footer";
import Contact from "./Contact";
import HappyCustomer from "./HappyCustomer";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import SignInCompanies from "../DeyaaComponents/SignInCompanies";

export default class HomePage extends Component {
  state = {
    shouldpass: "",
    // name: this.props.location.state.name,
    // email: this.props.location.state.email,
    // password: this.props.location.state.password,
    // address: this.props.location.state.address
    found: false
  };

  logOut = async () => {
    console.log("LOGOUT");
    await this.setState({
      shouldpass: "false",
      found: false
    });
    this.props.location.state = await undefined;
    this.props.history.push("./SignInCompanies");
  };
  static getDerivedStateFromProps(props, state) {
    console.log(props);
    let newState;
    if (props.location.state === undefined && state.found === false)
      newState = {
        shouldpass: "false"
      };
    else
      newState = {
        shouldpass: "true"
      };
    return newState;

    // console.log("NOT FOUND");
  }
  render() {
    // console.log(this.props.location.state);
    // console.log(this.props.location.state.name);
    if (this.state.shouldpass === "false") {
      //  return <Link To="/SignInCompanies"> Please Login</Link>;
      //   return null;
      return (
        <button
          onClick={() => {
            this.props.history.push("./SignInCompanies");
          }}
        >
          Please login
        </button>
      );
    } else
      return (
        <div>
          <NavBar logOut={this.logOut} />
          <br />
          <br />
          <Header />

          <PageContent
            companyName={this.props.location.state.name}
            companyAddress={this.props.location.state.address}
          />

          <br />
          {/* <Contact /> */}
          <HappyCustomer />
          <Footer />
        </div>
      );
  }
}
