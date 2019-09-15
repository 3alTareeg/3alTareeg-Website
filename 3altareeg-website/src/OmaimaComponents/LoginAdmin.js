import React, { Component } from "react";
import { Link } from "react-router-dom";
//  import './Loginstyle.css';
import "./StyleAdmin/Login.css";
export default class LoginAdmin extends Component {
  state = {
    username: "admin",
    password: "admin",
    valid: false
  };
  //  onchange=(e)=>{
  //     if(this.state.username === e.name.username && this.state.password === e.name.password){
  //       alert('Go to the next page!')
  //  }
  // }
  render() {
    return (
      <>
        <div class="main">
          <div class="containerlogin">
            <center>
              <div class="middle">
                <div id="login">
                  <form
                    onSubmit={e => {
                      e.preventDefault();
                      if (
                        e.target.username.value === "admin" &&
                        e.target.password.value === "admin"
                      ) {
                        this.setState({ valid: true });
                        this.props.history.push("/HomeAdmin");
                      }
                    }}
                  >
                    <p>
                      <span class="fa fa-user"></span>
                      <input
                        class="inputLogin"
                        name="username"
                        type="text"
                        Placeholder="Username"
                        onChange={this.handleChange}
                        required
                      />
                    </p>
                    <p>
                      <span class="fa fa-lock"></span>
                      <input
                        class="inputLogin"
                        name="password"
                        type="password"
                        Placeholder="Password"
                        required
                      />
                    </p>
                    {/* <Link to="/HomeAdmin"> */}
                    <div>
                      <span
                        style={{
                          // width: "100%",
                          // "text-align": "right",
                          display: "inline-block"
                        }}
                      >
                        <input
                          class="inputLogin"
                          type="submit"
                          value="Log In"
                          name="login"
                          disabled={!this.state.username}
                        />
                      </span>
                    </div>
                    {/* </Link> */}
                  </form>
                </div>
                <div class="logo">ADMIN</div>
              </div>
            </center>
          </div>
        </div>
      </>
    );
  }
}
