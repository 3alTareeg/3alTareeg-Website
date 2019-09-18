import React, { Component } from "react";
export default class Companies extends Component {
  state = { Show: false };
  render() {
    const { updateRequest } = this.props;
    const {
      name,
      request,
      order,
      _id,
      Package,
      address,
      nameProduct,
      numberOfProducts,
      productWeight,
      price,
      file,
      Date,
      Status
    } = this.props.company;
    console.log("order", order);
    console.log("name", name);
    console.log("request", request);
    const style = !order ? { display: "none" } : {};
    return (
      //   <div class="BODY">
      //     <div class="container " style={style}>
      //       <div class="row">
      //         <div class="col-sm-6">
      //           <div
      //             class="card text-white bg-secondary mb-3"
      //             style={{ maxWidth: "18rem", marginTop: "5%" }}
      //           >
      //             <div class="card-body">
      //               <button
      //                 type="button"
      //                 class="close"
      //                 data-dismiss="modal"
      //                 aria-label="Close"
      //               >
      //                 <span aria-hidden="true">&times;</span>
      //               </button>
      //               <div class="card-header">company:{name}</div>
      //               <div class="card-body">
      //                 <h5 class="card-title">package:{name}</h5>
      //                 <input
      //                   type="checkbox"
      //                   name="check"
      //                   onChange={updateRequest.bind(
      //                     this,
      //                     request,
      //                     order,
      //                     _id,
      //                     Package
      //                   )}
      //                 />
      //               </div>
      //             </div>
      //           </div>
      //         </div>
      //       </div>
      //     </div>
      //   </div>
      <div className="card card-body mb-3" style={style}>
        <h4 style={{ marginTop: "0" }}>
          {name} Company{" "}
          <span style={{ color: "rgb(145, 154, 163)" }}>
            {" "}
            {"("} Submittion Date: {Date} {")"}{" "}
          </span>
          {` `}
          <i
            class="fas fa-sort-down"
            style={{ cursor: "pointer" }}
            onClick={() => {
              this.setState({ Show: !this.state.Show });
            }}
          />
          <i
            className="fas fa-times"
            style={{ cursor: "pointer", float: "right", color: "red" }}
            onClick={updateRequest.bind(
              this,
              false,
              order,
              _id,
              Package,
              nameProduct,
              productWeight,
              file,
              "Rejected"
            )}
          />
          <i
            class="fas fa-check"
            style={{
              cursor: "pointer",
              float: "right",
              color: "green",
              marginRight: "10px"
            }}
            onClick={updateRequest.bind(
              this,
              true,
              order,
              _id,
              Package,
              nameProduct,
              productWeight,
              file,
              "Approved"
            )}
          ></i>
        </h4>
        <ul
          className="list-group"
          style={this.state.Show ? { display: "block" } : { display: "none" }}
        >
          <li className="list-group-item">
            <span style={{ fontWeight: "bold" }}>Package</span>: {Package} Cars
          </li>
          <li className="list-group-item">
            <span style={{ fontWeight: "bold" }}> Address: </span> {address}
          </li>
          <li className="list-group-item">
            <span style={{ fontWeight: "bold" }}> Name of Product: </span>
            {nameProduct}
          </li>
          <li className="list-group-item">
            <span style={{ fontWeight: "bold" }}> Number of Products: </span>
            {numberOfProducts}
          </li>
          <li className="list-group-item">
            <span style={{ fontWeight: "bold" }}> Price: </span> {price} JD
          </li>
          <li className="list-group-item">
            <span style={{ fontWeight: "bold" }}> Product Weight: </span>
            {productWeight}
          </li>
          <li className="list-group-item">
            <span style={{ fontWeight: "bold" }}> Id: </span> {_id}
          </li>
        </ul>
      </div>
    );
  }
}
