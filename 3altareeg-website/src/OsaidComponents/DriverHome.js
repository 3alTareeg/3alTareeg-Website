import React, { Component } from "react";
import NavBarDriver from "./NavBarDriver";
import Footer from "./Footer";
import "./DriverHome.css";

export default class Drivers extends Component {
  state = {
    shouldpass: ""
  };

  logOut = async () => {
    console.log("LOGOUT");
    await this.setState({
      shouldpass: "false"
    });
    this.props.location.state = await undefined;
    window.localStorage.setItem("logedInDriver", "false");
    this.props.history.push("./SignInDrivers");
  };
  static getDerivedStateFromProps(props, state) {
    console.log(props);
    let newState;
    if (props.location.state === undefined)
      newState = {
        shouldpass: "false"
      };
    else
      newState = {
        shouldpass: "true"
      };
    return newState;
  }
  render() {
    console.log(this.props.location.state);
    if (
      this.state.shouldpass === "false" ||
      localStorage.logedInDriver === "false"
    ) {
      return (
        <>
          <div
            className="BUTTON"
            style={{ position: "relative", top: "700px", left: "47%" }}
          >
            <button
              className="btn btn-danger"
              onClick={() => {
                this.props.history.push("./SignInDrivers");
              }}
            >
              Please login
            </button>
          </div>
          <div className="LOGOUT">
            {" "}
            <svg
              class="text"
              preserveAspectRatio="xMinYMin"
              viewBox="0 0 300 300"
            >
              <g transform="translate(0,-752.36208)" id="layer1">
                <g
                  transform="matrix(0.99043231,0,0,0.9998621,1.43515,0.06799524)"
                  id="g4285"
                >
                  <g
                    id="flowRoot4138"
                    style={{
                      fontStyle: "normal",
                      fontWeight: "normal",
                      fontSize: "40px",
                      lineHeight: "125%",
                      fontFamily: "sans-serif",
                      letterSpacing: "0px",
                      wordSpacing: "0px",
                      fill: "#000000",
                      fillOpacity: "1",
                      stroke: "none",
                      strokeWidth: "1px",
                      strokeLinecap: "butt",
                      strokeLinejoin: "miter",
                      strokeOpacity: "1"
                    }}
                    transform="translate(0,-719.29134)"
                  />
                  <g
                    id="flowRoot4150"
                    style={{
                      fontStyle: "normal",
                      fontWeight: "normal",
                      fontSize: "40px",
                      lineHeight: "125%",
                      fontFamily: "sans-serif",
                      letterSpacing: "0px",
                      wordSpacing: "0px",
                      fill: "#000000",
                      fillOpacity: "1",
                      stroke: "none",
                      strokeWidth: "1px",
                      strokeLinecap: "butt",
                      strokeLinejoin: "miter",
                      strokeOpacity: "1"
                    }}
                    transform="translate(0,-719.29134)"
                  />
                  <g
                    id="text4164"
                    style={{
                      fontStyle: "normal",
                      fontVariant: "normal",
                      fontWeight: "900",
                      fontStretch: "condensed",
                      fontSize: "192.14060974px",
                      lineHeight: "125%",
                      fontFamily: "Helvetica Neue",
                      textAlign: "start",
                      letterSpacing: "0px",
                      wordSpacing: "0px",
                      writingMode: "lr-tb",
                      textAnchor: "start",
                      fill: "#000000",
                      fillOpacity: "1",
                      stroke: "#000000",
                      strokeWidth: "2.92932129",
                      strokeLinecap: "butt",
                      strokeLinejoin: "round",
                      strokeMiterlimit: "4",
                      strokeDasharray: "none",
                      strokeOpacity: "1",
                      inkscapeFoneSpecification:
                        "Helvetica Neue, Heavy Condensed"
                      // -inkscape-font-specification
                    }}
                    transform="scale(1.0252299,0.97539098)"
                  >
                    <path
                      id="path4308"
                      style={{ strokeWidth: "2.92932129" }}
                      d="m 1.4286231,856.61904 0,26.89969 48.4194339,0 0,25.36256 33.432466,0 0,-25.36256 11.912718,0 0,-25.74685 -11.912718,0 0,-82.23618 -38.812403,0 -43.0394969,81.08334 z m 49.5722769,1.15284 -22.672592,0 22.288311,-45.34518 0.384281,0 0,45.34518 z"
                    />
                    <path
                      id="path4310"
                      style={{ strokeWidth: "2.92932129" }}
                      d="m 137.56625,864.68895 0,-44.96091 q 0,-14.41054 2.49783,-19.4062 2.49783,-5.18779 8.0699,-5.18779 5.57208,0 8.06991,5.18779 2.49783,4.99566 2.49783,19.4062 l 0,44.96091 q 0,14.41054 -2.49783,19.59834 -2.49783,4.99565 -8.06991,4.99565 -5.57207,0 -8.0699,-4.99565 -2.49783,-5.1878 -2.49783,-19.59834 z M 101.8281,842.2085 q 0,20.75118 2.68996,34.20102 2.88211,13.25771 8.45419,21.13547 5.76422,7.68563 14.41055,10.56773 8.83847,2.88211 20.75118,2.88211 11.91272,0 20.55905,-2.88211 8.83847,-2.8821 14.41054,-10.56773 5.76422,-7.87776 8.45419,-21.13547 2.88211,-13.44984 2.88211,-34.20102 0,-20.55905 -2.88211,-34.00889 -2.68997,-13.44985 -8.45419,-21.32761 -5.57207,-7.87777 -14.41054,-10.95202 -8.64633,-3.07425 -20.55905,-3.07425 -11.91271,0 -20.75118,3.07425 -8.64633,3.07425 -14.41055,10.95202 -5.57208,7.87776 -8.45419,21.32761 -2.68996,13.44984 -2.68996,34.00889 z"
                    />
                    <path
                      id="path4312"
                      style={{ strokeWidth: "2.92932129" }}
                      d="m 203.18827,813.96383 32.27963,0 q 0,-10.75988 2.11354,-14.79483 2.30569,-4.03495 7.49349,-4.03495 4.61137,0 6.72492,3.07425 2.30568,2.8821 2.30568,11.52843 0,5.95636 -0.9607,9.79917 -0.9607,3.65067 -2.88211,5.76422 -1.9214,2.11355 -4.80351,2.88211 -2.88211,0.76856 -6.91707,0.76856 l -5.18779,0 0,22.28831 9.03061,0 q 6.72492,0 9.79917,3.45853 3.26639,3.45854 3.26639,13.44985 0,6.34064 -0.38428,10.56773 -0.38428,4.03495 -1.53713,6.53278 -0.9607,2.30569 -2.88211,3.26639 -1.9214,0.76856 -4.99565,0.76856 -5.76422,0 -8.06991,-4.99565 -1.15284,-2.68997 -1.9214,-6.53278 -0.57643,-3.84281 -0.57643,-9.60703 l -33.43246,0 q 0,12.297 2.68997,20.75118 2.68996,8.26205 8.26204,13.25771 5.57208,4.99565 14.02627,6.91706 8.64632,1.9214 20.17476,1.9214 22.09617,0 33.24033,-9.99131 11.14415,-10.18345 11.14415,-33.24032 0,-11.14416 -4.80351,-19.21406 -4.80352,-8.26205 -16.71624,-10.56774 l 0,-0.38428 q 5.37994,-1.15284 9.03061,-4.03495 3.65067,-2.88211 5.76422,-6.53278 2.30569,-3.84282 3.26639,-8.06991 0.9607,-4.41923 0.9607,-8.45419 0,-9.0306 -2.11354,-15.94767 -1.92141,-7.1092 -6.91706,-11.91271 -4.80352,-4.80352 -13.06557,-7.30135 -8.26204,-2.49783 -20.75118,-2.49783 -20.94333,0 -31.51106,9.99132 -10.56774,9.79917 -11.14416,31.12678 z"
                    />
                  </g>
                  <g
                    id="text4168"
                    style={{
                      fontStyle: "normal",
                      fontVariant: "normal",
                      fontWeight: "900",
                      fontStretch: "condensed",
                      fontSize: "55.71302414px",
                      lineHeight: "125%",
                      fontFamily: "Helvetica Neue",
                      textAlign: "start",
                      letterSpacing: "0px",
                      wordSpacing: "0px",
                      writingMode: "lr-tb",
                      textAnchor: "start",
                      fill: "#000000",
                      fillOpacity: 1,
                      stroke: "#000000",
                      strokeWidth: "2.4554863",
                      strokeLinecap: "butt",
                      strokeLinejoin: "round",
                      strokeMiterlimit: "4",
                      strokeDasharray: "none",
                      strokeOpacity: "1",
                      // -inkscape-font-specification:'Helvetica Neue, Heavy Condensed'
                      inkscapeFoneSpecification:
                        "Helvetica Neue, Heavy Condensed"
                    }}
                    transform="scale(1.1955566,0.83643049)"
                  >
                    <path
                      id="path4315"
                      style={{ strokeWidth: "2.4554863" }}
                      d="m 10.999558,1090.4657 0,15.6554 10.362623,0 0,-15.6554 10.13977,-24.1237 -11.365457,0 -3.899911,13.8725 -0.111426,0 -3.899912,-13.8725 -11.198318,0 9.972631,24.1237 z"
                    />
                    <path
                      id="path4317"
                      style={{ strokeWidth: "2.4554863" }}
                      d="m 41.095037,1086.2315 q 0,-4.0113 0.111426,-6.6298 0.111426,-2.6742 0.445704,-4.2342 0.389991,-1.56 1.058547,-2.1728 0.72427,-0.6128 1.894243,-0.6128 1.169974,0 1.83853,0.6128 0.724269,0.6128 1.058547,2.1728 0.389992,1.56 0.501418,4.2342 0.111426,2.6185 0.111426,6.6298 0,4.0114 -0.111426,6.6856 -0.111426,2.6185 -0.501418,4.1785 -0.334278,1.5599 -1.058547,2.1728 -0.668556,0.6128 -1.83853,0.6128 -1.169973,0 -1.894243,-0.6128 -0.668556,-0.6129 -1.058547,-2.1728 -0.334278,-1.56 -0.445704,-4.1785 -0.111426,-2.6742 -0.111426,-6.6856 z m -10.696901,0 q 0,5.5713 0.724269,9.527 0.72427,3.8999 2.39566,6.407 1.671391,2.4513 4.401329,3.5099 2.729939,1.0585 6.685563,1.0585 3.955625,0 6.685563,-1.0585 2.729938,-1.0586 4.401329,-3.5099 1.671391,-2.5071 2.39566,-6.407 0.724269,-3.9557 0.724269,-9.527 0,-5.5713 -0.724269,-9.4712 -0.724269,-3.9556 -2.39566,-6.407 -1.671391,-2.5071 -4.401329,-3.6213 -2.729938,-1.17 -6.685563,-1.17 -3.955624,0 -6.685563,1.17 -2.729938,1.1142 -4.401329,3.6213 -1.67139,2.4514 -2.39566,6.407 -0.724269,3.8999 -0.724269,9.4712 z"
                    />
                    <path
                      id="path4319"
                      style={{ strokeWidth: "2.4554863" }}
                      d="m 72.497162,1066.342 -10.362622,0 0,26.0737 q 0,4.1785 0.891408,6.9641 0.891409,2.7857 2.562799,4.4571 1.727104,1.6714 4.23419,2.2842 2.562799,0.6128 5.794155,0.6128 3.287068,0 5.794154,-0.6128 2.507086,-0.6128 4.178477,-2.2842 1.727104,-1.6714 2.618512,-4.4571 0.891409,-2.7856 0.891409,-6.9641 l 0,-26.0737 -10.362623,0 0,28.6922 q 0,2.8971 -0.835695,3.8999 -0.835696,0.9471 -2.284234,0.9471 -1.448539,0 -2.284234,-0.9471 -0.835696,-1.0028 -0.835696,-3.8999 l 0,-28.6922 z"
                    />
                    <path
                      id="path4321"
                      style={{ strokeWidth: "2.4554863" }}
                      d="m 123.44411,1077.8189 9.69407,0 q 0,-6.407 -3.06422,-9.3041 -3.0085,-2.9528 -9.80549,-2.9528 -6.57414,0 -9.80549,3.1757 -3.23136,3.1756 -3.23136,9.2483 0,3.5099 1.16998,5.6827 1.22568,2.1729 3.0085,3.51 1.83853,1.3371 3.95562,2.1728 2.1171,0.8357 3.89992,1.6714 1.83853,0.7799 3.0085,1.9499 1.22569,1.1143 1.22569,3.0642 0,1.6157 -0.89141,2.73 -0.8357,1.1142 -2.45138,1.1142 -1.50425,0 -2.45137,-1.0028 -0.94712,-1.0585 -0.94712,-3.6213 l 0,-0.9472 -10.02834,0 0,1.3929 q 0,3.1199 0.8914,5.237 0.89141,2.1171 2.5628,3.4542 1.72711,1.2814 4.17848,1.7828 2.50709,0.5571 5.73844,0.5571 6.8527,0 10.47405,-2.8413 3.62135,-2.8971 3.62135,-9.2484 0,-3.6213 -1.2814,-5.8499 -1.22569,-2.2842 -3.11993,-3.677 -1.89424,-1.3928 -4.06705,-2.2285 -2.17281,-0.8914 -4.06705,-1.7271 -1.89425,-0.8357 -3.17565,-1.95 -1.22568,-1.17 -1.22568,-3.1199 0,-1.3371 0.77998,-2.3957 0.77998,-1.1142 2.45137,-1.1142 1.50425,0 2.22852,1.2814 0.72427,1.2256 0.72427,3.0085 l 0,0.9471 z"
                    />
                    <path
                      id="path4323"
                      style={{ strokeWidth: "2.4554863" }}
                      d="m 137.77106,1066.342 0,39.7791 10.36263,0 0,-16.3796 6.35128,0 0,16.3796 10.36262,0 0,-39.7791 -10.36262,0 0,14.5968 -6.35128,0 0,-14.5968 -10.36263,0 z"
                    />
                    <path
                      id="path4325"
                      style={{ strokeWidth: "2.4554863" }}
                      d="m 182.85248,1074.4761 -2.84137,16.881 5.79416,0 -2.84137,-16.881 -0.11142,0 z m 6.57414,-8.1341 9.69406,39.7791 -11.03118,0 -1.05854,-6.9641 -8.24553,0 -1.05855,6.9641 -10.86404,0 9.52693,-39.7791 13.03685,0 z"
                    />
                    <path
                      id="path4327"
                      style={{ strokeWidth: "2.4554863" }}
                      d="m 200.88347,1066.342 0,39.7791 23.12091,0 0,-8.4684 -12.75828,0 0,-31.3107 -10.36263,0 z"
                    />
                    <path
                      id="path4329"
                      style={{ strokeWidth: "2.4554863" }}
                      d="m 226.78132,1066.342 0,39.7791 23.1209,0 0,-8.4684 -12.75828,0 0,-31.3107 -10.36262,0 z"
                    />
                  </g>
                  <g
                    id="text4172"
                    style={{
                      fontStyle: "normal",
                      fontWeight: "normal",
                      fontSize: "40px",
                      lineHeight: "125%",
                      fontFamily: "sans-serif",
                      letterSpacing: "0px",
                      wordSpacing: "0px",
                      fill: "#000000",
                      fillOpacity: "1",
                      stroke: "none",
                      strokeWidth: "1px",
                      strokeLinecap: "butt",
                      strokeLinejoin: "miter",
                      strokeOpacity: "1"
                    }}
                  />
                  <g
                    id="text4176"
                    style={{
                      fontStyle: "normal",
                      fontVariant: "normal",
                      fontWeight: "900",
                      fontStretch: "condensed",
                      fontSize: "121.86096954px",
                      lineHeight: "125%",
                      fontFamily: "Helvetica Neue",
                      textAlign: "start",
                      letterSpacing: "0px",
                      wordSpacing: "0px",
                      writingMode: "lr-tb",
                      textAnchor: "start",
                      fill: "#000000",
                      fillOpacity: 1,
                      stroke: "#000000",
                      strokeWidth: "5.37088108",
                      strokeLinecap: "butt",
                      strokeLinejoin: "round",
                      strokeMiterlimit: "4",
                      strokeDasharray: "none",
                      strokeOpacity: "1"
                    }}
                    transform="scale(1.5395838,0.64952619)"
                  >
                    <path
                      id="path4333"
                      style={{ strokeWidth: "5.37088108" }}
                      d="m 1.7442682,1432.9327 0,87.0087 21.2038088,0 0,-53.7407 0.243722,0 15.11076,53.7407 24.859638,0 0,-87.0087 -21.203809,0 0,53.6188 -0.243722,0 -14.623316,-53.6188 -25.3470818,0 z"
                    />
                    <path
                      id="path4335"
                      style={{ strokeWidth: "5.37088108" }}
                      d="m 94.937444,1476.437 q 0,-8.7739 0.243722,-14.5014 0.243722,-5.8493 0.974888,-9.2614 0.853026,-3.4122 2.315358,-4.7526 1.584188,-1.3405 4.143268,-1.3405 2.55909,0 4.02142,1.3405 1.58419,1.3404 2.31536,4.7526 0.85302,3.4121 1.09674,9.2614 0.24373,5.7275 0.24373,14.5014 0,8.774 -0.24373,14.6234 -0.24372,5.7274 -1.09674,9.1395 -0.73117,3.4121 -2.31536,4.7526 -1.46233,1.3405 -4.02142,1.3405 -2.55908,0 -4.143268,-1.3405 -1.462332,-1.3405 -2.315358,-4.7526 -0.731166,-3.4121 -0.974888,-9.1395 -0.243722,-5.8494 -0.243722,-14.6234 z m -23.397306,0 q 0,12.1861 1.584192,20.8383 1.584193,8.5302 5.240022,14.014 3.655829,5.3619 9.627017,7.6772 5.971187,2.3154 14.623311,2.3154 8.65213,0 14.62332,-2.3154 5.97119,-2.3153 9.62702,-7.6772 3.65583,-5.4838 5.24002,-14.014 1.58419,-8.6522 1.58419,-20.8383 0,-12.1861 -1.58419,-20.7163 -1.58419,-8.6522 -5.24002,-14.014 -3.65583,-5.4838 -9.62702,-7.921 -5.97119,-2.5591 -14.62332,-2.5591 -8.652124,0 -14.623311,2.5591 -5.971188,2.4372 -9.627017,7.921 -3.655829,5.3618 -5.240022,14.014 -1.584192,8.5302 -1.584192,20.7163 z"
                    />
                    <path
                      id="path4337"
                      style={{ strokeWidth: "5.37088108" }}
                      d="m 153.38691,1452.1867 0,67.7547 22.66614,0 0,-67.7547 17.06054,0 0,-19.254 -56.54349,0 0,19.254 16.81681,0 z"
                    />
                  </g>
                  <g
                    id="text4180"
                    style={{
                      fontStyle: "normal",
                      fontVariant: "normal",
                      fontWeight: "900",
                      fontStretch: "condensed",
                      fontSize: "105.41305542px",
                      lineHeight: "125%",
                      fontFamily: "Helvetica Neue",
                      textAlign: "start",
                      letterSpacing: "0px",
                      wordSpacing: "0px",
                      writingMode: "lr-tb",
                      textAnchor: "start",
                      fill: "#000000",
                      fillOpacity: 1,
                      stroke: "#000000",
                      strokeWidth: "4.64595747",
                      strokeLinecap: "butt",
                      strokeLinejoin: "round",
                      strokeMiterlimit: "4",
                      strokeDasharray: "none",
                      strokeOpacity: "1",
                      // -inkscape-font-specification:'Helvetica Neue, Heavy Condensed'
                      inkscapeFoneSpecification:
                        "Helvetica Neue, Heavy Condensed"
                    }}
                    transform="scale(1.3524187,0.73941598)"
                  >
                    <path
                      id="path4340"
                      style={{ strokeWidth: "4.64595747" }}
                      d="m 21.324475,1377.0583 0,-18.3419 3.689457,0 q 7.58974,0 7.58974,9.1709 0,4.7436 -2.002848,6.9573 -1.897435,2.2137 -5.586892,2.2137 l -3.689457,0 z m -19.606828,-32.4673 0,75.265 19.606828,0 0,-28.6724 6.851849,0 q 12.122501,0 18.341872,-5.7977 6.324783,-5.9031 6.324783,-17.604 0,-4.9544 -1.264957,-9.1709 -1.264956,-4.2166 -4.005696,-7.2735 -2.635326,-3.1624 -6.746435,-4.9544 -4.11111,-1.7921 -9.698002,-1.7921 l -29.410242,0 z"
                    />
                    <path
                      id="path4342"
                      style={{ strokeWidth: "4.64595747" }}
                      d="m 79.826251,1359.9813 -5.376065,31.9402 10.962957,0 -5.376065,-31.9402 -0.210827,0 z m 12.438741,-15.3903 18.341868,75.265 -20.871781,0 -2.002848,-13.1767 -15.601133,0 -2.002848,13.1767 -20.555545,0 18.025632,-75.265 24.666655,0 z"
                    />
                    <path
                      id="path4344"
                      style={{ strokeWidth: "4.64595747" }}
                      d="m 143.34997,1366.3061 18.34187,0 q 0,-12.1225 -5.79772,-17.604 -5.6923,-5.5868 -18.5527,-5.5868 -12.43874,0 -18.55269,6.0085 -6.11396,6.0085 -6.11396,17.4986 0,6.641 2.21367,10.7521 2.31909,4.1111 5.69231,6.641 3.47863,2.5299 7.48432,4.1111 4.0057,1.5812 7.37892,3.1624 3.47863,1.4758 5.6923,3.6895 2.31909,2.1082 2.31909,5.7977 0,3.057 -1.68661,5.1652 -1.58119,2.1083 -4.63817,2.1083 -2.84616,0 -4.63818,-1.8974 -1.79202,-2.0029 -1.79202,-6.8519 l 0,-1.792 -18.97435,0 0,2.6353 q 0,5.9031 1.68661,9.9088 1.68661,4.0057 4.849,6.5357 3.2678,2.4245 7.90598,3.3732 4.74359,1.0541 10.85754,1.0541 12.96581,0 19.81766,-5.3761 6.85185,-5.4814 6.85185,-17.4985 0,-6.8519 -2.4245,-11.0684 -2.31909,-4.3219 -5.90313,-6.9573 -3.58405,-2.6353 -7.69516,-4.2165 -4.11111,-1.6866 -7.69515,-3.2678 -3.58404,-1.5812 -6.00854,-3.6894 -2.31909,-2.2137 -2.31909,-5.9032 0,-2.5299 1.47578,-4.5327 1.47578,-2.1083 4.63818,-2.1083 2.84615,0 4.21652,2.4245 1.37037,2.3191 1.37037,5.6923 l 0,1.792 z"
                    />
                    <path
                      id="path4346"
                      style={{ strokeWidth: "4.64595747" }}
                      d="m 199.76243,1366.3061 18.34187,0 q 0,-12.1225 -5.79772,-17.604 -5.6923,-5.5868 -18.5527,-5.5868 -12.43874,0 -18.55269,6.0085 -6.11396,6.0085 -6.11396,17.4986 0,6.641 2.21367,10.7521 2.31909,4.1111 5.69231,6.641 3.47863,2.5299 7.48432,4.1111 4.0057,1.5812 7.37892,3.1624 3.47863,1.4758 5.6923,3.6895 2.31909,2.1082 2.31909,5.7977 0,3.057 -1.68661,5.1652 -1.58119,2.1083 -4.63817,2.1083 -2.84616,0 -4.63818,-1.8974 -1.79202,-2.0029 -1.79202,-6.8519 l 0,-1.792 -18.97435,0 0,2.6353 q 0,5.9031 1.68661,9.9088 1.68661,4.0057 4.849,6.5357 3.26781,2.4245 7.90598,3.3732 4.74359,1.0541 10.85754,1.0541 12.96581,0 19.81766,-5.3761 6.85185,-5.4814 6.85185,-17.4985 0,-6.8519 -2.4245,-11.0684 -2.31909,-4.3219 -5.90313,-6.9573 -3.58405,-2.6353 -7.69516,-4.2165 -4.11111,-1.6866 -7.69515,-3.2678 -3.58404,-1.5812 -6.00854,-3.6894 -2.31909,-2.2137 -2.31909,-5.9032 0,-2.5299 1.47578,-4.5327 1.47578,-2.1083 4.63818,-2.1083 2.84615,0 4.21652,2.4245 1.37037,2.3191 1.37037,5.6923 l 0,1.792 z"
                    />
                  </g>
                </g>
              </g>
            </svg>
            <svg
              class="staff"
              preserveAspectRatio="xMinYMin"
              viewBox="0 0 150 1000"
            >
              <g transform="translate(-175,-52.362282)" id="layer1">
                <g id="g4382">
                  <path
                    style={{
                      fill: "#9f6c44",
                      fillOpacity: "1",
                      stroke: "none",
                      strokeWidth: "10",
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                      strokeMiterlimit: "4",
                      strokeDasharray: "none",
                      strokeOpacity: "1"
                    }}
                    d="m 175,52.36216 150,0 -16.25561,323.43052 -46.52466,247.19733 17.43274,278.0269 -13.9574,151.34529 -38.00449,0 -46.52466,-488.50898 51.00897,-228.41929 C 213.5517,240.97738 195.88522,146.34563 175,52.36216 Z"
                    id="rect4377"
                  />
                  <path
                    id="path4380"
                    d="m 175,52.36216 37.89238,10e-7 54.37219,320.067289 -51.00897,246.07626 27.52243,331.83855 21.91704,102.01794 -38.00449,0 -46.52466,-488.50898 51.00897,-228.41929 C 213.5517,240.97738 195.88522,146.34563 175,52.36216 Z"
                    style={{
                      fill: "#4b3a21",
                      fillOpacity: "1",
                      stroke: "none",
                      strokeWidth: "10",
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                      strokeMiterlimit: "4",
                      strokeDasharray: "none",
                      strokeOpacity: "1"
                    }}
                  />
                </g>
              </g>
            </svg>
            <div class="shine"> </div>
          </div>
        </>
      );
    } else
      return (
        <>
          <div style={{ margin: "auto" }}>
            <br></br>
            <br></br>
            <br></br>
            <NavBarDriver logOut={this.logOut} />
            <div class="alert alert-primary" role="alert">
              <h1 style={{ textAlign: "center", fontWeight: "bold" }}>
                Welcome {`${this.props.location.state.name}`}
              </h1>
            </div>{" "}
            {/* Style Try */}
            <div class="card" style={{ margin: "auto", border: "none" }}>
              <img
                src="http://f1.imgci.com/PICTURES/CMS/28500/28513.jpg"
                class="card-img-top"
                style={{
                  width: "200px",
                  height: "200px",
                  margin: "auto",
                  borderRadius: "50%"
                }}
                alt="..."
              />
              <figure style={{ margin: "auto" }}>
                <figcaption class="ratings">
                  <p>
                    Ratings
                    <a href="">
                      <span class="fa fa-star"></span>
                    </a>
                    <a href="">
                      <span class="fa fa-star"></span>
                    </a>
                    <a href="">
                      <span class="fa fa-star"></span>
                    </a>
                    <a href="">
                      <span class="fa fa-star"></span>
                    </a>
                    <a href="">
                      <span class="fa fa-star-o"></span>
                    </a>
                  </p>
                </figcaption>
              </figure>
            </div>
            <div
              class="right container"
              style={{
                width: "65%",
                background: "#fff",
                padding: "30px 25px",
                borderTopRightRadius: "5px",
                borderBottomRightRadius: "5px"
              }}
            >
              <div
                class="info"
                style={{
                  marginBottom: "25px"
                }}
              >
                <h2
                  style={{
                    marginBottom: "15px",
                    paddingBottom: "5px",
                    borderBottom: "1px solid #e0e0e0",
                    color: "#606468",
                    textTransform: "uppercase",
                    letterSpacing: "5px"
                  }}
                >
                  <strong>Information</strong>
                </h2>
                <div
                  class="info_data"
                  style={{
                    // display: "flex",
                    justifyContent: "space-between",
                    width: "45%"
                  }}
                >
                  <div
                    class="data"
                    style={{
                      width: "45%",
                      marginBottom: "20px"
                    }}
                  >
                    <h3 style={{ color: "#353c4e", marginBottom: "5px" }}>
                      Name
                    </h3>
                    <p
                      style={{
                        fontSize: "13px",
                        marginBottom: "10px",
                        color: "#919aa3",
                        fontSize: ""
                      }}
                    >
                      {`${this.props.location.state.name}`}
                    </p>
                  </div>
                  <div
                    class="data"
                    style={{
                      width: "45%",
                      marginBottom: "20px"
                    }}
                  >
                    <h3 style={{ color: "#353c4e", marginBottom: "5px" }}>
                      Email
                    </h3>
                    <p
                      style={{
                        fontSize: "13px",
                        marginBottom: "10px",
                        color: "#919aa3",
                        fontSize: ""
                      }}
                    >
                      {`${this.props.location.state.email}`}
                    </p>
                  </div>
                  <div
                    class="data"
                    style={{
                      width: "45%",
                      marginBottom: "20px"
                    }}
                  >
                    <h3 style={{ color: "#353c4e", marginBottom: "5px" }}>
                      Plate Number
                    </h3>
                    <p
                      style={{
                        fontSize: "13px",
                        marginBottom: "10px",
                        color: "#919aa3",
                        fontSize: ""
                      }}
                    >
                      {`${this.props.location.state.plateNumber}`}
                    </p>
                  </div>
                  <div
                    class="data"
                    style={{
                      width: "45%"
                    }}
                  >
                    <h3 style={{ color: "#353c4e", marginBottom: "5px" }}>
                      Work
                    </h3>
                    <p
                      style={{
                        fontSize: "13px",
                        marginBottom: "10px",
                        color: "#919aa3"
                      }}
                    >
                      {`${this.props.location.state.work}`}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* Style Try */}
            <div class="card" style={{ margin: "auto", border: "none" }}>
              <div
                class="list-group list-group-flush"
                style={{ width: "65%", padding: "30px 25px" }}
              >
                <div
                  style={{
                    marginBottom: "90px"
                  }}
                >
                  <h2
                    style={{
                      // borderBottom: "1px solid #e0e0e0",
                      marginBottom: "15px",
                      paddingBottom: "5px",
                      borderBottom: "1px solid #e0e0e0",
                      color: "#606468",
                      textTransform: "uppercase",
                      letterSpacing: "5px"
                    }}
                  >
                    <strong>Your Wallet</strong>
                  </h2>
                  <h2>
                    <strong
                      style={{
                        border: "2px solid gray",
                        display: "block",
                        padding: "auto"
                      }}
                    >
                      $ 158.5{" "}
                    </strong>
                  </h2>
                </div>
                <h2
                  style={{
                    marginBottom: "15px",
                    paddingBottom: "5px",
                    borderBottom: "1px solid #e0e0e0",
                    color: "#606468",
                    textTransform: "uppercase",
                    letterSpacing: "5px"
                  }}
                >
                  <strong>Your Products</strong>
                </h2>
                <div
                  id="product"
                  style={{
                    display: "grid",
                    gridTemplateColumns: "auto auto auto"
                  }}
                >
                  <li
                    class="list-group-item"
                    style={{
                      border: "none",
                      borderBottom: "1px solid #e0e0e0"
                    }}
                  >
                    {" "}
                    <img
                      src="https://i5.walmartimages.com/asr/bbd7504a-a39c-479d-a2de-5288d49d7c4d_1.09d5f701091987e3ec287bba19f38ef4.jpeg?odnHeight=450&odnWidth=450&odnBg=FFFFFF"
                      style={{ width: "150px", height: "150px" }}
                      class="card-img-top"
                      alt="..."
                    />
                    <div class="card-body">
                      <p
                        class="card-text"
                        style={{ gridColumnStart: 1, gridColumnEnd: 2 }}
                      >
                        {" "}
                        Pepsi{" "}
                      </p>
                    </div>
                  </li>
                  <li
                    class="list-group-item"
                    style={{
                      border: "none",
                      borderBottom: "1px solid #e0e0e0"
                    }}
                  >
                    {" "}
                    <img
                      src="https://images-na.ssl-images-amazon.com/images/I/71dVrBe4qdL._SL1500_.jpg"
                      style={{ width: "150px", height: "150px" }}
                      class="card-img-top"
                      alt="..."
                    />
                    <div class="card-body">
                      <p
                        class="card-text"
                        style={{ gridColumnStart: 1, gridColumnEnd: 2 }}
                      >
                        {" "}
                        Reese's Chocolate{" "}
                      </p>
                    </div>
                  </li>
                  <li
                    class="list-group-item"
                    style={{
                      border: "none",
                      borderBottom: "1px solid #e0e0e0"
                    }}
                  >
                    {" "}
                    <img
                      src="https://images-na.ssl-images-amazon.com/images/I/51alnVJ4aFL._SX569_.jpg"
                      style={{ width: "150px", height: "150px" }}
                      class="card-img-top"
                      alt="..."
                    />
                    <div class="card-body">
                      <p
                        class="card-text"
                        style={{ gridColumnStart: 1, gridColumnEnd: 2 }}
                      >
                        {" "}
                        Car Charger for iPhone XS{" "}
                      </p>
                    </div>
                  </li>
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </>
      );
  }
}
