import React, { Component } from "react";
import axios from "axios";
import Drivers from "./Drivers";
export default class Mapdrivers extends Component {
  state = {
    driverList: []
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
  updateDriver = (isAvaliable, id) => {
    //today
    let test = "";
    if (isAvaliable === true) isAvaliable = false;
    console.log(isAvaliable);
    console.log(id);
    for (var i = 0; i < 2; i++)
      axios
        .put("http://localhost:9000/signUpDrivers/signUpDrivers", {
          isAvaliable
        })
        .then(response => {
          this.setState({ driverList: response.data });
          console.log("response", response.data);
        })
        .catch(error => {
          console.log("Error", error);
        });
  };
  render() {
    const { driverList } = this.state;
    return (
      <>
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
      </>
    );
  }
}
