import React from "react";
import Packages from './Packages'
import Service from "./Service";

export default function PageContent() {
  return (
    <div>
    <div class="section section-about-us">
      <div class="container">
        <div class="row">
          <div class="col-md-8 ml-auto mr-auto text-center">
            <h2 class="title">Who we are?</h2>
            <h5 class="description">According to the National Oceanic and Atmospheric Administration, Ted, Scambos, NSIDClead scentist, puts the potentially record low maximum sea ice extent tihs year down to low ice extent in the Pacific and a late drop in ice extent in the Barents Sea.</h5>
          </div>
          </div>
          </div>
        </div>

  
    
<Service />
<center>
       
<h2 class="title">Packages</h2>
    </center>
       <Packages />

    </div>
  );
}
