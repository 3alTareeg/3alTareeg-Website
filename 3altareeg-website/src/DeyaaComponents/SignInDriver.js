import React, { Component } from "react";
import axios from "axios";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

class SignIn extends Component {
  state = {
    name: "",
    email: "",
    valid: false
  };
  render() {
    return (
      <>
        <h1>Drivers</h1>
        <form
          onSubmit={async e => {
            e.preventDefault();
            // console.log(e.target.name.value);

            await this.setState({
              email: e.target.email.value,
              password: e.target.password.value
            });
            console.log(this.state);

            let res = await axios.post(
              "http://localhost:9000/signUpDrivers/getUsers",
              this.state
            );
            console.log(res.data);
            if (res.data.length !== 0) await this.setState({ valid: true });
            else await this.setState({ valid: false });
            // e.target.name.value = "";
            // e.target.password.value = "";
          }}
        >
          <div>
            <label htmlFor="email">Email: </label>
            <input type="email" id="email" name="email" />
          </div>
          <div>
            <label htmlFor="password">Password: </label>
            <input type="password" id="password" name="password" />
          </div>
          <input type="submit" value="Sign In" />
        </form>
        <Link to="/SignUpDrivers">
          <div>Not a Member?</div>
        </Link>
        {this.state.valid ? "VALID" : "NOT VALID"}
      </>
    );
  }
}

export default SignIn;
