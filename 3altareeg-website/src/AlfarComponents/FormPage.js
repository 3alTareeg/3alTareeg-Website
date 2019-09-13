import React, { Component } from "react";
import axios from "axios";
import "./Style/FormPage.css";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

export default class Checkout extends Component {
  state = {
    price: 0,
    productWeight: "",
    typeOfService: "",
    nameCompany: "",
    nameProduct: "",
    file: null,
    numberOfProducts: "",
    package: ""
  };
  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
    console.log(e.target.value);
  };
  handleChangeFile = event => {
    this.setState({
      file: URL.createObjectURL(event.target.files[0])
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    const user = {
      name: this.props.location.state.companyName,
      package: this.props.location.state.package,
      typeOfService: this.state.typeOfService,
      nameCompany: this.state.nameCompany,
      nameProduct: this.state.nameProduct,
      productWeight: this.state.productWeight,
      price: this.state.price,
      numberOfProducts: this.state.numberOfProducts,
      file: this.state.file
    };
    console.log(user);
    axios
      .post(`http://localhost:9000/signUpCompanies/AlfarComponents`, user)
      .then(res => {
        console.log(res.data);
      })
      .catch(error => {
        console.log("error", error);
      });
  };
  render() {
    console.log(this.props.location.state);
    return (
      <div class="Far">
        <div class="container contact">
          <div class="row">
            <div class="col-md-3">
              <div class="contact-info">
                <img
                  src={require(`../OsaidComponents/pic/${this.props.location.state.package}.png`)}
                  alt="image"
                  // style={{ border: " solid 1px" }}
                  className="rounded-circle rounded-lg"
                />
                <h2>{this.props.location.state.package} Car Package!</h2>
                <h4>We would love to work with you &#x2764;</h4>
              </div>
            </div>
            <div class="col-md-9">
              <div class="contact-form">
                <div class="form-group">
                  <label class="control-label col-sm-2" htmlFor="nameCompany">
                    Company Name
                  </label>
                  <div class="col-sm-10">
                    <input
                      type="text"
                      //   disabled
                      id="nameCompany"
                      disabled
                      onChange={this.handleChange}
                      name="Name"
                      class="form-control"
                      //   placeholder={this.props.location.state.companyName}
                      value={this.props.location.state.companyName}
                    />
                  </div>
                </div>
                <div class="form-group">
                  <label class="control-label col-sm-2" htmlFor="nameProduct">
                    Product Name
                  </label>
                  <div class="col-sm-10">
                    <input
                      type="text"
                      id="nameProduct"
                      onChange={this.handleChange}
                      class="form-control"
                      placeholder="Product Name"
                    />
                  </div>
                </div>
                <div class="form-group">
                  <label class="control-label col-sm-2" htmlFor="typeOfService">
                    Type of Service
                  </label>
                  <div class="col-sm-10">
                    <select
                      id="typeOfService"
                      class="custom-select custom-select-md mb-3"
                      onChange={this.handleChange}
                    >
                      <option selected>Type of service</option>
                      <option value="1">For Free </option>
                      <option value="2">Paid </option>
                    </select>
                  </div>
                </div>
                <div class="form-group">
                  <label class="control-label col-sm-2" htmlFor="productWeight">
                    Product Weight
                  </label>
                  <div class="col-sm-10">
                    <select
                      class="form-control"
                      id="productWeight"
                      onChange={this.handleChange}
                    >
                      <option value="0.1kg">0.1g</option>
                      <option value="0.5kg">0.5g</option>
                      <option value="1kg">1g</option>
                      <option value="1.5kg">1.5g</option>
                      <option value="2kg">2g</option>
                      <option value="2.5kg">2.5g</option>
                    </select>
                  </div>
                </div>
                <div class="form-group">
                  <label class="control-label col-sm-2" htmlFor="price">
                    Product Price
                  </label>
                  <div class="col-sm-10">
                    <input
                      type="Number"
                      id="price"
                      onChange={this.handleChange}
                      class="form-control"
                      placeholder="Price (JD)"
                    />
                  </div>
                </div>
                <div class="form-group">
                  <label
                    class="control-label col-sm-2"
                    htmlFor="numberOfProducts"
                  >
                    Product Number:
                  </label>
                  <div class="col-sm-10">
                    <input
                      type="Number"
                      id="numberOfProducts"
                      onChange={this.handleChange}
                      class="form-control"
                      placeholder="Product Number"
                    />
                  </div>
                </div>
                <div class="form-group">
                  <label class="control-label col-sm-2" htmlFor="file">
                    Product Image:
                  </label>
                  <div class="col-sm-10">
                    <input
                      type="file"
                      id="file"
                      onChange={this.handleChangeFile}
                    />
                  </div>
                </div>
                <div class="form-group">
                  <div class="col-sm-offset-2 col-sm-10">
                    <button
                      style={{ marginRight: "20px" }}
                      className="btn pink lighten-1 z-depth-0"
                      data-toggle="modal"
                      data-target="#myModal"
                      onClick={this.handleSubmit}
                    >
                      Submit
                    </button>
                    <Link
                      to={{
                        pathname: "/HomeCompanies",
                        state: {
                          name: this.props.location.state.companyName,
                          address: this.props.location.state.companyAddress,
                          email: this.props.location.state.companyEmail,
                          password: this.props.location.state.companyPassword
                        }
                      }}
                    >
                      <button className="btn pink lighten-1 z-depth-0">
                        Back to Home
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="modal fade" id="myModal" role="dialog">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal">
                  &times;
                </button>
                <h2 class="modal-title">Submission Status</h2>
              </div>
              <div class="modal-body">
                <h4>Completed.</h4>
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-default"
                  data-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
