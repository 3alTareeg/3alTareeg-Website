import React, { Component } from "react";
import Companies from "./Companies";
import axios from "axios";

export default class Mapcompany extends Component {
  state = {
    companyList: []
  };
  componentDidMount = () => {
    console.log("data");
    axios
      .get("http://localhost:9000/signUpCompanies/signUpCompanies")
      .then(res => {
        this.setState({ companyList: res.data });
        console.log("data", this.state.companyList);
      })
      .catch(err => {
        console.log(err);
      });
  };
  updateCompany = (request, order, id, Package) => {
    console.log("Executed");
    console.log("requestREACT", request);
    console.log("orderREACT", order);
    console.log("Package", Package);
    if (request === false && order === true) {
      request = true;
      order = false;
    }
    console.log("requestREACT", request);
    console.log("orderREACT", order);
    console.log(id);
    axios
      .put("http://localhost:9000/signUpCompanies/updateData", {
        request,
        order,
        id,
        Package
      })
      .then(response => {
        this.setState({ companyList: response.data });
        console.log("response", response.data);
      })
      .catch(error => {
        console.log("Error", error);
      });
    for (var i = 0; i < Package; i++)
      axios
        .put(`http://localhost:9000/signUpDrivers/signUpDrivers`)
        .then(response => {
          this.setState({ driverList: response.data });
          console.log("response", response.data);
        })
        .catch(error => {
          console.log("Error", error);
        });
  };
  render() {
    const { companyList } = this.state;
    const { updateCompany } = this;
    return (
      <div>
        {console.log("", companyList)}
        {companyList.map((company, idx) => {
          return (
            <Companies
              key={idx}
              company={company}
              updateRequest={updateCompany}
            />
          );
        })}
      </div>
    );
  }
}
