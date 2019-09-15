import React, { Component } from "react";
import NavBarDriver from "./NavBarDriver";
import Osaid from "./pic/osaid.png";
import Deyaa from "./pic/deyaaWebsite.jpg";
import Omaima from "./pic/omima.PNG";
import Alfar from "./pic/alFar.jpg";
import NoAccess from "./NoAccess";

class AboutDriver extends Component {
  logOut = async () => {
    console.log("LOGOUT");
    await this.setState({
      //   shouldpass: "false"
    });
    // this.props.location.state = await undefined;
    window.localStorage.setItem("logedInDriver", "false");
    this.props.history.push("./SignInDrivers");
  };
  render() {
    if (localStorage.logedInDriver === "false") return <NoAccess />;
    else
      return (
        <>
          <NavBarDriver
            info={this.props.location.state.info}
            logOut={this.logOut}
          />
          <section
            class="our-webcoderskull padding-lg"
            style={{ height: "100vh" }}
          >
            <div class="container">
              <div class="row heading heading-icon">
                <h2>Our Team</h2>
              </div>
              <ul class="row">
                <li class="col-12 col-md-6 col-lg-3">
                  <div
                    class="cnt-block equal-hight"
                    style={{ height: "349px" }}
                  >
                    <figure>
                      <img src={Deyaa} class="img-responsive" alt="" />
                    </figure>
                    <h3>
                      <a href="http://www.webcoderskull.com/">Deyaa Maali</a>
                    </h3>
                    <p>Freelance Web Developer</p>
                    <ul class="follow-us clearfix">
                      <li>
                        <a href="">
                          <i
                            class="fab fa-facebook"
                            style={{ color: "blue" }}
                            aria-hidden="true"
                          ></i>
                        </a>
                      </li>
                      <li>
                        <a href="">
                          <i
                            class="fab fa-twitter"
                            style={{ color: "#55adee" }}
                            aria-hidden="true"
                          ></i>
                        </a>
                      </li>
                      <li>
                        <a href="">
                          <i
                            class="fab fa-linkedin"
                            style={{ color: "#0077B5" }}
                            aria-hidden="true"
                          ></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li class="col-12 col-md-6 col-lg-3">
                  <div
                    class="cnt-block equal-hight"
                    style={{ height: "349px" }}
                  >
                    <figure>
                      <img src={Osaid} class="img-responsive" alt="" />
                    </figure>
                    <h3>
                      <a href="">Osaid Ayadi </a>
                    </h3>
                    <p>Freelance Web Developer</p>
                    <ul class="follow-us clearfix">
                      <li>
                        <a href="">
                          <i
                            class="fab fa-facebook"
                            style={{ color: "blue" }}
                            aria-hidden="true"
                          ></i>
                        </a>
                      </li>
                      <li>
                        <a href="">
                          <i
                            class="fab fa-twitter"
                            style={{ color: "#55adee" }}
                            aria-hidden="true"
                          ></i>
                        </a>
                      </li>
                      <li>
                        <a href="">
                          <i
                            class="fab fa-linkedin"
                            style={{ color: "#0077B5" }}
                            aria-hidden="true"
                          ></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li class="col-12 col-md-6 col-lg-3">
                  <div
                    class="cnt-block equal-hight"
                    style={{ height: "349px" }}
                  >
                    <figure>
                      <img src={Omaima} class="img-responsive" alt="" />
                    </figure>
                    <h3>
                      <a href="http://www.webcoderskull.com/">Omima Suliman </a>
                    </h3>
                    <p>Freelance Web Developer</p>
                    <ul class="follow-us clearfix">
                      <li>
                        <a href="">
                          <i
                            class="fab fa-facebook"
                            style={{ color: "blue" }}
                          ></i>
                        </a>
                      </li>
                      <li>
                        <a href="">
                          <i
                            className="fab fa-twitter"
                            style={{ color: "#55adee" }}
                          ></i>
                        </a>
                      </li>
                      <li>
                        <a href="">
                          <i
                            class="fab fa-linkedin-in"
                            style={{ color: "#0077B5" }}
                          ></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li class="col-12 col-md-6 col-lg-3">
                  <div
                    class="cnt-block equal-hight"
                    style={{ height: "349px" }}
                  >
                    <figure>
                      <img src={Alfar} class="img-responsive" alt="" />
                    </figure>
                    <h3>
                      <a href="">Mohammad Alfar </a>
                    </h3>
                    <p>Freelance Web Developer</p>
                    <ul class="follow-us clearfix">
                      <li>
                        <a href="">
                          <i
                            class="fab fa-facebook"
                            style={{ color: "blue" }}
                            aria-hidden="true"
                          ></i>
                        </a>
                      </li>
                      <li>
                        <a href="">
                          <i
                            class="fab fa-twitter"
                            style={{ color: "#55adee" }}
                            aria-hidden="true"
                          ></i>
                        </a>
                      </li>
                      <li>
                        <a href="">
                          <i
                            class="fab fa-linkedin"
                            style={{ color: "#0077B5" }}
                            aria-hidden="true"
                          ></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </section>
        </>
      );
  }
}

export default AboutDriver;
