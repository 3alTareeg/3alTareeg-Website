import React, { Component } from "react";
import NavBarDriver from "./NavBarDriver";
import NoAccess from "./NoAccess";
export default class Contact extends Component {
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
          <div class="CONTACT">
            <section
              class="contact pt-100 pb-100"
              id="contact"
              style={{
                height: "100vh"
              }}
            >
              <div class="container">
                <div class="row">
                  <div class="col-xl-6 mx-auto text-center">
                    <div class="section-title mb-100">
                      <h4>contact us</h4>
                    </div>
                  </div>
                </div>
                <div class="row text-center">
                  <div class="col-md-8">
                    <form action="#" class="contact-form">
                      <div class="row">
                        <div class="col-xl-6">
                          <input type="text" placeholder="name" />
                        </div>
                        <div class="col-xl-6">
                          <input type="text" placeholder="email" />
                        </div>
                        <div class="col-xl-6">
                          <input type="text" placeholder="subject" />
                        </div>
                        <div class="col-xl-6">
                          <input type="text" placeholder="telephone" />
                        </div>
                        <div class="col-xl-12">
                          <textarea
                            placeholder="message"
                            cols="30"
                            rows="10"
                          ></textarea>
                          <input type="submit" value="send message" />
                        </div>
                      </div>
                    </form>
                  </div>
                  <div class="col-md-4">
                    <div class="single-contact">
                      <i class="fa fa-map-marker"></i>
                      <h5>Address</h5>
                      <p>661 Amman, NY 11203, Jordan</p>
                    </div>
                    <div class="single-contact">
                      <i class="fa fa-phone"></i>
                      <h5>Phone</h5>
                      <p>(+06) 55 187 71</p>
                    </div>
                    <div class="single-contact">
                      <i class="fa fa-envelope"></i>
                      <h5>Email</h5>
                      <p>3alTareeg@gmail.com</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </>
      );
  }
}
