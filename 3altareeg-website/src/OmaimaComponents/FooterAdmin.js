import React, { Component } from "react";

export default class Footer extends Component {
  mapRes = {
    height: "100%",
    width: "100%",
    position: "absolute"
  };

  render() {
    return (
      <div>
        <footer class="py-4 bg-dark">
          <div class="container">
            <p class="m-0 text-center text-white">
              Copyright &copy; OnTheRoad 2019
            </p>
          </div>
        </footer>
      </div>
    );
  }
}
