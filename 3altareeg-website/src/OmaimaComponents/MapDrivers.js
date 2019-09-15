import React, { Component } from "react";
import axios from "axios";
import Drivers from "./Drivers";
import AdminNavBar from "./AdminNavBar";
import FooterAdmin from "./FooterAdmin";
export default class Mapdrivers extends Component {
  state = {
    driverList: [],
    SearchMode: false,
    SearchTerm: "",
    SearchComp: []
  };
  componentDidMount = () => {
    console.log("data");
    axios
      .get("http://localhost:9000/signUpCompanies/signUpDrivers")
      .then(res => {
        this.setState({ driverList: res.data });
        console.log("data", this.state.driverList);
      })
      .catch(err => {
        console.log(err);
      });
  };
  // updateDriver = (isAvaliable, id) => {
  //   //today
  //   let test = "";
  //   if (isAvaliable === true) isAvaliable = false;
  //   console.log(isAvaliable);
  //   console.log(id);
  //   for (var i = 0; i < 2; i++)
  //     axios
  //       .put("http://localhost:9000/signUpDrivers/signUpDrivers", {
  //         isAvaliable
  //       })
  //       .then(response => {
  //         this.setState({ driverList: response.data });
  //         console.log("response", response.data);
  //       })
  //       .catch(error => {
  //         console.log("Error", error);
  //       });
  // };
  render() {
    const { driverList } = this.state;
    let Searched = driverList.filter(elem => elem.name === "asmaa");
    console.log(Searched);
    if (this.state.SearchMode === false)
      return (
        <>
          <AdminNavBar />
          <div style={{ marginTop: "70px", marginLeft: "15px", width: "30%" }}>
            <div class="input-group mb-3">
              <input
                type="text"
                class="form-control"
                placeholder="Search"
                aria-label="Recipient's username"
                aria-describedby="button-addon2"
                value={this.state.SearchTerm}
                onChange={e => this.setState({ SearchTerm: e.target.value })}
              />
              <div class="input-group-append">
                <button
                  class="btn btn-outline-secondary"
                  type="button"
                  id="button-addon2"
                  onClick={() =>
                    this.setState({
                      SearchMode: true,
                      SearchComp: driverList.filter(
                        elem =>
                          elem.name.toLowerCase() ===
                          this.state.SearchTerm.toLowerCase()
                      )
                    })
                  }
                >
                  <i class="fas fa-search"></i>
                </button>
                <button
                  class="btn btn-outline-secondary"
                  type="button"
                  onClick={() =>
                    this.setState({ SearchMode: false, SearchTerm: "" })
                  }
                >
                  <i class="fas fa-times"></i>
                </button>
              </div>
            </div>
          </div>
          <div
            className="container"
            style={{
              border: "1px solid rgba(0,0,0,.125)",
              marginTop: "20px"
              // background: "#33c6ff"
            }}
            // style={{ backgroundColor: "#352d52" }}
          >
            <h1 style={{ textAlign: "center" }}>Our Drivers</h1>
            {console.log("driver", driverList)}
            {driverList.map((driver, idx) => {
              return (
                <Drivers
                  key={idx}
                  driver={driver}
                  updatAvaliable={this.updateDriver}
                />
              );
            })}
          </div>
        </>
      );
    else
      return (
        <>
          <AdminNavBar />
          <div style={{ marginTop: "70px", marginLeft: "15px", width: "30%" }}>
            <div class="input-group mb-3">
              <input
                type="text"
                class="form-control"
                placeholder="Search"
                aria-label="Recipient's username"
                aria-describedby="button-addon2"
                value={this.state.SearchTerm}
                onChange={e => this.setState({ SearchTerm: e.target.value })}
              />
              <div class="input-group-append">
                <button
                  class="btn btn-outline-secondary"
                  type="button"
                  id="button-addon2"
                  onClick={() =>
                    this.setState({
                      SearchMode: true,
                      SearchComp: driverList.filter(
                        elem =>
                          elem.name.toLowerCase() ===
                          this.state.SearchTerm.toLowerCase()
                      )
                    })
                  }
                >
                  <i class="fas fa-search"></i>
                </button>
                <button
                  class="btn btn-outline-secondary"
                  type="button"
                  onClick={() =>
                    this.setState({ SearchMode: false, SearchTerm: "" })
                  }
                >
                  <i class="fas fa-times"></i>
                </button>
              </div>
            </div>
          </div>
          <div
            className="container"
            style={{
              border: "1px solid rgba(0,0,0,.125)",
              marginTop: "20px"
              // background: "#33c6ff"
            }}
            // style={{ backgroundColor: "#352d52" }}
          >
            <h1 style={{ textAlign: "center" }}>Our Drivers</h1>

            {this.state.SearchComp.map((driver, idx) => {
              return (
                <Drivers
                  key={idx}
                  driver={driver}
                  updatAvaliable={this.updateDriver}
                />
              );
            })}
          </div>
        </>
      );
  }
}
