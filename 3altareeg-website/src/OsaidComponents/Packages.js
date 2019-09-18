import React, { Component } from "react";
import Contact from "./Contact";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

export default class Packages extends Component {
  cardStyle = {
    boxShadow: "0px 22px 34px -27px rgba(0,0,0,0.75)"
  };
  cardRecommand = {
    boxShadow: "0px 13px 14px -1px rgba(0,0,0,0.75)"
  };

  mouseOver = id => {
    document.getElementById(`${id}`).style.border =
      "2px outset rgba(28,110,164,0.75)";
  };

  mouseOut = id => {
    document.getElementById(`${id}`).style.border = "none";
  };
  render() {
    console.log(this.props);
    return (
      <div style={{ width: "80%", margin: "auto" }}>
        <div className="card-deck">
          <div
            className="card"
            id="soso"
            style={this.cardStyle}
            onMouseEnter={this.mouseOver.bind(this, "soso")}
            onMouseLeave={this.mouseOut.bind(this, "soso")}
          >
            <img
              src={require("./pic/10.png")}
              className="card-img-top"
              alt="..."
            />

            <div className="card-body">
              <h5 className="card-title">10 Car</h5>
              <p className="card-text">
                This package offers 10 cars to display your product on it.
              </p>
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">10 Cars</li>
              <li className="list-group-item">24/7 Support</li>
              <li className="list-group-item">Maximum of 50 Product </li>
            </ul>
            <div className="card-body">
              <Link
                // href="#"
                className="btn btn-primary btn-lg"
                // onClick={() => (
                //   <Route
                //     path="/Contact"
                //     render={props => <Contact {...props} package={15} />}
                //   />
                // )}
                to={{
                  pathname: "/FormPage",
                  state: {
                    package: 10,
                    companyName: this.props.companyName,
                    companyAddress: this.props.companyAddress,
                    companyEmail: this.props.companyEmail,
                    companyPassword: this.props.companyPassword,
                    Image:
                      "C:/Orange/3alTareeg-Website/3altareeg-website/src/OsaidComponents/pic/10.png",
                    info: this.props.info
                  }
                }}
              >
                Card link
              </Link>
            </div>
          </div>

          <div
            className="card"
            id="soso1"
            style={this.cardRecommand}
            onMouseEnter={this.mouseOver.bind(this, "soso1")}
            onMouseLeave={this.mouseOut.bind(this, "soso1")}
          >
            <img
              src={require("./pic/20.png")}
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">20 Car</h5>
              <p className="card-text">
                This package offers 20 cars to display your product on it.
              </p>
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">20 Cars</li>
              <li className="list-group-item">24/7 Support</li>
              <li className="list-group-item">Maximum of 100 Product</li>
            </ul>
            <div className="card-body">
              <Link
                to={{
                  pathname: "/FormPage",
                  state: {
                    package: 20,
                    companyName: this.props.companyName,
                    companyAddress: this.props.companyAddress,
                    companyEmail: this.props.companyEmail,
                    companyPassword: this.props.companyPassword,
                    info: this.props.info
                  }
                }}
                // href="#"
                className="btn btn-primary btn-lg"
              >
                Card link
              </Link>
            </div>
          </div>
          <div
            className="card"
            id="soso2"
            style={this.cardStyle}
            onMouseEnter={this.mouseOver.bind(this, "soso2")}
            onMouseLeave={this.mouseOut.bind(this, "soso2")}
          >
            <img
              src={require("./pic/30.png")}
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">30 Car</h5>
              <p className="card-text">
                This package offers 30 cars to display your product on it.
              </p>
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">30 Cars</li>
              <li className="list-group-item">24/7 Support</li>
              <li className="list-group-item">Maximum of 200 Product</li>
            </ul>
            <div className="card-body">
              <Link
                to={{
                  pathname: "/FormPage",
                  state: {
                    package: 30,
                    companyName: this.props.companyName,
                    companyAddress: this.props.companyAddress,
                    companyEmail: this.props.companyEmail,
                    companyPassword: this.props.companyPassword,
                    info: this.props.info
                  }
                }}
                // href="#"
                className="btn btn-primary btn-lg"
              >
                Card link
              </Link>
            </div>
          </div>
        </div>
      </div>

      /////////////
    );
  }
}
