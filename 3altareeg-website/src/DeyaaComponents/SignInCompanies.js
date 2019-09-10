import React, { Component } from "react";
import axios from "axios";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import "./Style/SignInCompanies.css";

class SignInCompanies extends Component {
  state = {
    name: "",
    email: "",
    valid: false
  };
  clear = e => {};
  render() {
    return (
      // <>
      //   <h1>Companies</h1>
      //   <form
      //     onSubmit={async e => {
      //       e.preventDefault();
      //       // console.log(e.target.name.value);

      //       await this.setState({
      //         email: e.target.email.value,
      //         password: e.target.password.value
      //       });
      //       console.log(this.state);

      //       let res = await axios.post(
      //         "http://localhost:9000/signUpCompanies/getUsers",
      //         this.state
      //       );
      //       console.log(res.data);
      //       if (res.data.length !== 0) await this.setState({ valid: true });
      //       else await this.setState({ valid: false });
      //       // e.target.name.value = "";
      //       // e.target.password.value = "";
      //       this.clear(e);
      //     }}
      //   >
      //     <div>
      //       <label htmlFor="email">Email: </label>
      //       <input type="email" id="email" name="email" />
      //     </div>
      //     <div>
      //       <label htmlFor="password">Password: </label>
      //       <input type="password" id="password" name="password" />
      //     </div>
      //     <input type="submit" value="Sign In" />
      //   </form>
      //   <Link to="/SignUpCompanies">
      //     <div>Not a Member?</div>
      //   </Link>
      //   {this.state.valid ? "VALID" : "NOT VALID"}
      // </>

      <>
        <div class="SignInCompanies">
          <div class="container">
            <div class="d-flex justify-content-center h-100">
              <div class="card">
                <div class="card-header">
                  <h3>Companies</h3>
                  <div class="d-flex justify-content-end social_icon">
                    <span>
                      <i class="fab fa-facebook-square"></i>
                    </span>
                    <span>
                      <i class="fab fa-twitter-square"></i>
                    </span>
                  </div>
                </div>
                <div class="card-body">
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
                      if (res.data.length !== 0)
                        await this.setState({ valid: true });
                      else await this.setState({ valid: false });
                      //       // e.target.name.value = "";
                      //       // e.target.password.value = "";
                      //       this.clear(e);
                    }}
                  >
                    <div class="input-group form-group">
                      <div class="input-group-prepend">
                        <span class="input-group-text">
                          <i class="fas fa-user"></i>
                        </span>
                      </div>
                      <input
                        type="email"
                        class="form-control"
                        placeholder="Email"
                        name="email"
                      />
                    </div>
                    <div class="input-group form-group">
                      <div class="input-group-prepend">
                        <span class="input-group-text">
                          <i class="fas fa-key"></i>
                        </span>
                      </div>
                      <input
                        type="password"
                        class="form-control"
                        placeholder="Password"
                        name="password"
                      />
                    </div>
                    <div class="row align-items-center remember">
                      <input type="checkbox" />
                      Remember Me
                    </div>
                    <div class="form-group">
                      <input
                        type="submit"
                        value="Login"
                        class="btn float-right login_btn"
                      />
                    </div>
                  </form>
                </div>
                <div class="card-footer">
                  <div class="d-flex justify-content-center links">
                    Don't have an account?
                    <Link to="/SignUpDrivers">Sign Up</Link>
                  </div>
                  <div class="d-flex justify-content-center">
                    <a href="#">Forgot your password?</a>
                  </div>
                  {this.state.valid ? (
                    <span style={{ color: "white" }}>VALID </span>
                  ) : (
                    <span style={{ color: "red" }}>
                      Your email or password is incorrect
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default SignInCompanies;
