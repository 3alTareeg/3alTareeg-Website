import React, { Component } from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";
import "./DriverHome.css";
import axios from "axios";
import logo from "./pic/Orange.png";
import NoAccessCompanies from "./NoAccessCompanies";

var x = 0;
export default class CompanyProfile extends Component {
  //   state = {
  //     shouldpass: ""
  //   };
  state = {
    CompanyData: {}
  };

  logOut = async () => {
    console.log("LOGOUT");
    await this.setState({
      //   shouldpass: "false"
    });
    // this.props.location.state = await undefined;
    window.localStorage.setItem("logedIn", "false");
    this.props.history.push("./SignInCompanies");
  };

  componentDidMount() {
    let Com = {
      name: this.props.location.state.companyName
    };
    axios
      .post("http://localhost:9000/signUpCompanies/getCompanyProfile", Com)
      .then(res => {
        console.log(res.data);
        this.setState({ CompanyData: res.data[0] });
      });
    x = 1;
  }
  //   logOut = async () => {
  //     console.log("LOGOUT");
  //     await this.setState({
  //       shouldpass: "false"
  //     });
  //     this.props.location.state = await undefined;
  //     window.localStorage.setItem("logedInDriver", "false");
  //     this.props.history.push("./SignInDrivers");
  //   };
  //   static getDerivedStateFromProps(props, state) {
  //     console.log(props);
  //     let newState;
  //     if (props.location.state === undefined)
  //       newState = {
  //         shouldpass: "false"
  //       };
  //     else
  //       newState = {
  //         shouldpass: "true"
  //       };
  //     return newState;
  //   }
  render() {
    console.log(this.props.location.state);
    if (localStorage.logedIn === "false") return <NoAccessCompanies />;
    else if (x === 0) return <h1>Loading..</h1>;
    else
      return (
        <>
          <div style={{ margin: "auto" }}>
            <br></br>
            <br></br>
            <br></br>
            <NavBar info={this.state.CompanyData} logOut={this.logOut} />
            <div class="alert alert-primary" role="alert">
              <h1 style={{ textAlign: "center", fontWeight: "bold" }}>
                Welcome {`${this.props.location.state.companyName}`}
              </h1>
            </div>{" "}
            {/* Style Try */}
            <div class="card" style={{ margin: "auto", border: "none" }}>
              <img
                src={logo}
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
                      {`${this.props.location.state.companyName}`}
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
                      {`${this.state.CompanyData.email}`}
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
                      Address
                    </h3>
                    <p
                      style={{
                        fontSize: "13px",
                        marginBottom: "10px",
                        color: "#919aa3",
                        fontSize: ""
                      }}
                    >
                      {`${this.state.CompanyData.address}`}
                    </p>
                  </div>
                  <div
                    class="data"
                    style={{
                      width: "45%"
                    }}
                  ></div>
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
                    <strong>Your Application Status</strong>
                  </h2>
                  <h2>
                    <strong
                      style={{
                        // border: "2px solid gray",
                        display: "block",
                        padding: "auto",
                        color:
                          this.state.CompanyData.Status === "Approved"
                            ? "green"
                            : this.state.CompanyData.Status === "Rejected"
                            ? "red"
                            : "black"
                      }}
                    >
                      {this.state.CompanyData.Status}
                    </strong>
                  </h2>
                </div>
                {/* <h2
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
                </h2> */}
                <div
                  id="product"
                  style={{
                    display: "grid",
                    gridTemplateColumns: "auto auto auto"
                  }}
                >
                  {/* <li
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
                  </li> */}
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </>
      );
  }
}
