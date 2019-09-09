import React, { Component } from "react";
import axios from "axios";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

class SignInCompanies extends Component {
  state = {
    name: "",
    email: "",
    valid: false
  };
  clear = e => {};
  render() {
    return (
      <>
        <h1>Companies</h1>
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
              "http://localhost:9000/signUpCompanies/getUsers",
              this.state
            );
            console.log(res.data);
            if (res.data.length !== 0) await this.setState({ valid: true });
            else await this.setState({ valid: false });
            // e.target.name.value = "";
            // e.target.password.value = "";
            this.clear(e);
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
        <Link to="/SignUpCompanies">
          <div>Not a Member?</div>
        </Link>
        {this.state.valid ? "VALID" : "NOT VALID"}
      </>
    );
  }
}

export default SignInCompanies;
