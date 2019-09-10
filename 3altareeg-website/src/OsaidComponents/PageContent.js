import React from "react";
import Packages from './Packages'

export default function PageContent() {
  return (
    <div>
      <div class="container-fluid bg-2 text-center">
        <h3 class="margin">What Am I?</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.{" "}
        </p>
      </div>

      <br />
      <center>
        <h3>Packages:</h3>
      </center>

       <Packages />

    </div>
  );
}