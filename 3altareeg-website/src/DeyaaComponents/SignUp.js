import React, { Component } from "react";
import axios from "axios";

class SignUp extends Component {
  state = {
    name: "",
    email: "",
    password: ""
  };
  render() {
    return (
      <>
        <form
          onSubmit={async e => {
            e.preventDefault();
            console.log(e.target.name.value);

            await this.setState({
              name: e.target.name.value,
              email: e.target.email.value,
              password: e.target.password.value
            });

            let res = await axios.post(
              "http://localhost:9000/signUp/CreateUser",
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
          <input type="submit" value="Sign Up" />
        </form>
      </>
    );
  }
}

export default SignUp;
