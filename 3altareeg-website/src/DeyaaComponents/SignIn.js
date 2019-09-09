import React, { Component } from "react";
import axios from "axios";

class SignIn extends Component {
  state = {
    name: "",
    email: ""
  };
  render() {
    return (
      <>
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
              "http://localhost:9000/signUp/getUsers",
              this.state
            );
            console.log(res.data);
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
      </>
    );
  }
}

export default SignIn;
