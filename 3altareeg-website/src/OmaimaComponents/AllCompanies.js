import React, { Component } from "react";
import Company from "./Company";
import axios from "axios";
import AdminNavBar from "./AdminNavBar";

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

  render() {
    const { companyList } = this.state;
    return (
      <>
        <AdminNavBar />
        <div
          className="container"
          style={{ border: "1px solid rgba(0,0,0,.125)", marginTop: "100px" }}
        >
          <h1 style={{ textAlign: "center" }}> Our Companies</h1>
          {companyList.map((company, idx) => {
            return <Company key={idx} company={company} />;
          })}
        </div>
      </>
    );
  }
}
