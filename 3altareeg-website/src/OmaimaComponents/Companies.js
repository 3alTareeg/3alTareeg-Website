import React, { Component } from "react";
export default class Companies extends Component {
  render() {
    const { updateRequest } = this.props;
    const { name, request, order, _id, Package } = this.props.company;
    console.log("order", order);
    console.log("name", name);
    console.log("request", request);
    const style = !order ? { display: "none" } : {};
    return (
      <div class="BODY">
        <div class="container " style={style}>
          <div class="row">
            <div class="col-sm-6">
              <div
                class="card text-white bg-secondary mb-3"
                style={{ maxWidth: "18rem", marginTop: "5%" }}
              >
                <div class="card-body">
                  <button
                    type="button"
                    class="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                  <div class="card-header">company:{name}</div>
                  <div class="card-body">
                    <h5 class="card-title">package:{name}</h5>
                    <input
                      type="checkbox"
                      name="check"
                      onChange={updateRequest.bind(
                        this,
                        request,
                        order,
                        _id,
                        Package
                      )}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
