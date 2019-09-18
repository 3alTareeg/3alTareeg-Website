import React, { Component } from "react";
import soso from "./soso.css";
export default class Service extends Component {
  render() {
    return (
      <div style={{ marginTop: "-10%" }}>
        <section class="services-area pt-100 pb-70" id="services">
          <div class="container">
            <div class="row">
              <div class="col-xl-8 mx-auto text-center">
                <div class="section-title">
                  <h4>what we do</h4>
                  <p style={{ color: "#9a9a9a" }}>
                    Connecting the companies with the drivers so the company can
                    display their products in easy way
                  </p>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-lg-4 col-md-6">
                <div class="single-service" style={{ border: "none" }}>
                  <i class="fa fa-rocket"></i>
                  <h4>marketing</h4>
                  <p style={{ color: "#9a9a9a" }}>
                    We will market your products in a special and new way.{" "}
                  </p>
                </div>
              </div>
              <div class="col-lg-4 col-md-6">
                <div class="single-service" style={{ border: "none" }}>
                  <i class="fa fa-camera"></i>
                  <h4>app</h4>
                  <p style={{ color: "#9a9a9a" }}>
                    You can use our easy-to-use application.{" "}
                  </p>
                </div>
              </div>
              <div class="col-lg-4 col-md-6">
                <div class="single-service" style={{ border: "none" }}>
                  <i class="fa fa-clock-o"></i>
                  <h4>support</h4>
                  <p style={{ color: "#9a9a9a" }}>24/7 hot line support. </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
