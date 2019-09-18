import React, { Component } from "react";
import axios from "axios";
import "./Style/SignUpCompanies.css";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

class SignUpCompanies extends Component {
  state = {
    name: "",
    email: "",
    password: "",
    address: ""
  };
  render() {
    return (
      // <>
      //   <h1>Companies</h1>
      //   <form
      //     onSubmit={async e => {
      //       e.preventDefault();
      //       console.log(e.target.name.value);

      //       await this.setState({
      //         name: e.target.name.value,
      //         email: e.target.email.value,
      //         password: e.target.password.value,
      //         address: e.target.address.value
      //       });

      //       let res = await axios.post(
      //         "http://localhost:9000/signUpCompanies/CreateUser",
      //         this.state
      //       );
      //       console.log(res.data);
      //       // e.target.name.value = "";
      //       // e.target.email.value = "";
      //       // e.target.password.value = "";
      //     }}
      //   >
      //     <div>
      //       <label htmlFor="name">Name: </label>
      //       <input type="text" id="name" name="name" />
      //     </div>
      //     <div>
      //       <label htmlFor="email">Email: </label>
      //       <input type="email" id="email" name="email" />
      //     </div>
      //     <div>
      //       <label htmlFor="password">Password: </label>
      //       <input type="password" id="password" name="password" />
      //     </div>
      //     <div>
      //       <label htmlFor="address">Adress: </label>
      //       <input type="text" id="address" name="address" />
      //     </div>
      //     <input type="submit" value="Sign Up" />
      //   </form>
      // </>
      <>
        <div className="SignInCompanies">
          <div className="container">
            <div className="d-flex justify-content-center h-100">
              <div className="card x" style={{ height: "410px" }}>
                <div className="card-header">
                  <h3>Companies</h3>
                  <div className="d-flex justify-content-end social_icon">
                    {/* <span>
                      <i className="fab fa-facebook-square"></i>
                    </span>
                    <span>
                      <i className="fab fa-twitter-square"></i>
                    </span> */}
                  </div>
                </div>
                <div className="card-body">
                  <form
                    onSubmit={async e => {
                      e.preventDefault();
                      // console.log(e.target.name.value);
                      if (
                        e.target.name.value === "" ||
                        e.target.email.value === "" ||
                        e.target.password.value === "" ||
                        e.target.address.value === ""
                      )
                        return;
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
                      //       console.log(res.data);
                      //       // e.target.name.value = "";
                      //       // e.target.email.value = "";
                      //       // e.target.password.value = "";
                      this.props.history.push("./SignInCompanies");
                    }}
                  >
                    <div className="input-group form-group">
                      <div
                        style={{ width: "70px" }}
                        className="input-group-prepend"
                      >
                        <span
                          style={{ width: "70px" }}
                          className="input-group-text"
                        >
                          Name
                        </span>
                      </div>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter your name"
                        name="name"
                      />
                    </div>
                    <div className="input-group form-group">
                      <div
                        style={{ width: "70px" }}
                        className="input-group-prepend"
                      >
                        <span
                          style={{ width: "70px" }}
                          className="input-group-text"
                        >
                          Email
                        </span>
                      </div>
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Enter your email"
                        name="email"
                      />
                    </div>
                    <div className="input-group form-group">
                      <div
                        className="input-group-prepend"
                        style={{ width: "90px" }}
                      >
                        <span
                          style={{ width: "90px" }}
                          className="input-group-text"
                        >
                          Address
                        </span>
                      </div>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter your address"
                        name="address"
                      />
                    </div>
                    <div className="input-group form-group">
                      <div
                        style={{ width: "102px" }}
                        className="input-group-prepend"
                      >
                        <span
                          style={{ width: "102px" }}
                          className="input-group-text"
                        >
                          Password
                        </span>
                      </div>
                      <input
                        type="password"
                        className="form-control"
                        placeholder="Enter your password"
                        name="password"
                      />
                    </div>

                    <div className="form-group">
                      <input
                        type="submit"
                        value="Sign up"
                        className="btn float-right login_btn"
                      />
                    </div>
                  </form>
                </div>
                <div className="card-footer">
                  <div className="d-flex justify-content-center links">
                    Already have an account?
                    <Link to="/SignInCompanies">Sign In</Link>
                  </div>
                  <div className="d-flex justify-content-center">
                    {/* <a href="#">Forgot your password?</a> */}
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

export default SignUpCompanies;
