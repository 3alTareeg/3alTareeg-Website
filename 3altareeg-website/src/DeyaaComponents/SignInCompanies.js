import React, { Component } from "react";
import axios from "axios";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import "./Style/SignInCompanies.css";

class SignInCompanies extends Component {
  state = {
    name: "",
    email: "",
    valid: false,
    password: "",
    NAME: "",
    EMAIL: "",
    PASSWORD: "",
    ADDRESS: ""
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
        <div className="SignInCompanies">
          <div className="container">
            <div className="d-flex justify-content-center h-100">
              <div className="card x">
                <div className="card-header">
                  <h3>Companies</h3>
                  <div className="d-flex justify-content-end social_icon">
                    <span>
                      <i className="fab fa-facebook-square"></i>
                    </span>
                    <span>
                      <i className="fab fa-twitter-square"></i>
                    </span>
                  </div>
                </div>
                <div className="card-body">
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
                      console.log("RESPONSE", res.data);
                      // console.log("NAME", res.data[0].name);
                      // console.log("EMAIL", res.data[0].email);

                      if (res.data.length !== 0) {
                        await this.setState({
                          valid: true,
                          NAME: res.data[0].name,
                          EMAIL: res.data[0].email,
                          PASSWORD: res.data[0].password,
                          ADDRESS: res.data[0].address
                        });
                        window.localStorage.setItem("logedIn", "true");
                        this.props.history.push({
                          pathname: "/HomeCompanies",
                          state: {
                            name: this.state.NAME,
                            email: this.state.EMAIL,
                            password: this.state.PASSWORD,
                            address: this.state.ADDRESS,
                            info: res.data[0]
                          }
                        });
                      } else await this.setState({ valid: false });
                      //       // e.target.name.value = "";
                      //       // e.target.password.value = "";
                      //       this.clear(e);
                    }}
                  >
                    <div className="input-group form-group">
                      <div className="input-group-prepend u">
                        <span className="input-group-text">
                          <i className="fas fa-user"></i>
                        </span>
                      </div>
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Email"
                        name="email"
                        required
                      />
                    </div>
                    <div className="input-group form-group">
                      <div className="input-group-prepend u">
                        <span className="input-group-text">
                          <i className="fas fa-key"></i>
                        </span>
                      </div>
                      <input
                        type="password"
                        className="form-control"
                        placeholder="Password"
                        name="password"
                        required
                      />
                    </div>
                    <div className="row align-items-center remember">
                      <input type="checkbox" />
                      Remember Me
                    </div>
                    {this.state.email !== "" || this.state.password !== "" ? (
                      this.state.valid ? (
                        <span style={{ color: "white" }}>VALID </span>
                      ) : (
                        <span style={{ color: "red", textAlign: "center" }}>
                          <h6>Your email or password is incorrect</h6>
                        </span>
                      )
                    ) : null}
                    <div className="form-group">
                      <input
                        type="submit"
                        value="Login"
                        className="btn float-right login_btn"
                      />
                    </div>
                  </form>
                </div>
                <div className="card-footer">
                  <div className="d-flex justify-content-center links">
                    Don't have an account?
                    <Link to="/SignUpCompanies">Sign Up</Link>
                  </div>
                  <div className="d-flex justify-content-center">
                    <a href="#">Forgot your password?</a>
                  </div>
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
