import React from "react";
import Packages from "./Packages";
import Service from "./Service";

export default function PageContent(props) {
  return (
    <div>
      <div class="section section-about-us">
        <div class="container">
          <div class="row">
            <div class="col-md-8 ml-auto mr-auto text-center">
              <h1>Who we are?</h1>
              <h5 class="description" id="about" name="about">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
                quaerat fugit quas veniam perferendis repudiandae sequi Lorem
                ipsum dolor sit amet consectetur adipisicing elit. Qui quaerat
                fugit quas veniam perferendis repudiandae sequi..
              </h5>
            </div>
          </div>
        </div>
      </div>

      <Service />
      <center>
        <h2>Packages</h2>
      </center>
      <Packages
        companyName={props.companyName}
        companyAddress={props.companyAddress}
        companyEmail={props.companyEmail}
        companyPassword={props.companyPassword}
        info={props.info}
      />
    </div>
  );
}
