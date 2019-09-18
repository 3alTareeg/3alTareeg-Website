import React, { Component } from "react";
import axios from "axios";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import "./Style/SignInDriver.css";

class SignIn extends Component {
  state = {
    password: "",
    email: "",
    valid: true,
    NAME: "",
    EMAIL: "",
    PASSWORD: "",
    PLATENUMBER: "",
    WORK: "",
    NAMEPRODUCT: [],
    PRODUCTWEIGHT: [],
    FILE: []
  };
  render() {
    return (
      // <>
      //   <h1>Drivers</h1>
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
      //         "http://localhost:9000/signUpDrivers/getUsers",
      //         this.state
      //       );
      //       console.log(res.data);
      //       if (res.data.length !== 0) await this.setState({ valid: true });
      //       else await this.setState({ valid: false });
      //       // e.target.name.value = "";
      //       // e.target.password.value = "";
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
      //   <Link to="/SignUpDrivers">
      //     <div>Not a Member?</div>
      //   </Link>
      //   {this.state.valid ? "VALID" : "NOT VALID"}
      // </>
      <>
        <div className="SignInDriver">
          <div className="container">
            <div className="d-flex justify-content-center h-100">
              <div className="card x" style={{ height: "330px" }}>
                <div className="card-header">
                  <h3>Drivers</h3>
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
                      if (res.data.length !== 0) {
                        await this.setState({
                          valid: true,
                          NAME: res.data[0].name,
                          EMAIL: res.data[0].email,
                          PASSWORD: res.data[0].password,
                          PLATENUMBER: res.data[0].plateNumber,
                          WORK: res.data[0].work,
                          NAMEPRODUCT: res.data[0].nameProduct,
                          PRODUCTWEIGHT: res.data[0].productWeight,
                          FILE: res.data[0].file
                        });
                        window.localStorage.setItem("logedInDriver", "true");
                        console.log(this.state);
                        this.props.history.push({
                          pathname: "/HomeDriver",
                          state: {
                            name: this.state.NAME,
                            email: this.state.EMAIL,
                            password: this.state.PASSWORD,
                            plateNumber: this.state.PLATENUMBER,
                            work: this.state.WORK,
                            nameProduct: this.state.NAMEPRODUCT,
                            productWeight: this.state.PRODUCTWEIGHT,
                            file: this.state.FILE,
                            info: res.data[0]
                          }
                        });
                      } else await this.setState({ valid: false });
                      // e.target.name.value = "";
                      // e.target.password.value = "";
                    }}
                  >
                    <div className="input-group form-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text">
                          <i className="fas fa-user"></i>
                        </span>
                      </div>
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Email"
                        name="email"
                      />
                    </div>
                    <div className="input-group form-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text">
                          <i className="fas fa-key"></i>
                        </span>
                      </div>
                      <input
                        type="password"
                        className="form-control"
                        placeholder="Password"
                        name="password"
                      />
                    </div>
                    <div className="row align-items-center remember">
                      {/* <input type="checkbox" />
                      Remember Me */}
                    </div>
                    {this.state.email !== "" || this.state.password !== "" ? (
                      this.state.valid ? null : (
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
                    <Link to="/SignUpDrivers">Sign Up</Link>
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

export default SignIn;
