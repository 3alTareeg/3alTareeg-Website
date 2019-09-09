import React, { Component } from "react";
import axios from "axios";

class SignUpCompanies extends Component {
  state = {
    name: "",
    email: "",
    password: "",
    address: ""
  };
  render() {
    return (
      <>
        <h1>Companies</h1>
        <form
          onSubmit={async e => {
            e.preventDefault();
            console.log(e.target.name.value);

            await this.setState({
              name: e.target.name.value,
              email: e.target.email.value,
              password: e.target.password.value,
              address: e.target.address.value
            });

            let res = await axios.post(
              "http://localhost:9000/signUpCompanies/CreateUser",
              this.state
            );
            console.log(res.data);
            // e.target.name.value = "";
            // e.target.email.value = "";
            // e.target.password.value = "";
          }}
        >
          <div>
            <label htmlFor="name">Name: </label>
            <input type="text" id="name" name="name" />
          </div>
          <div>
            <label htmlFor="email">Email: </label>
            <input type="email" id="email" name="email" />
          </div>
          <div>
            <label htmlFor="password">Password: </label>
            <input type="password" id="password" name="password" />
          </div>
          <div>
            <label htmlFor="address">Adress: </label>
            <input type="text" id="address" name="address" />
          </div>
          <input type="submit" value="Sign Up" />
        </form>
      </>
    );
  }
}

export default SignUpCompanies;
