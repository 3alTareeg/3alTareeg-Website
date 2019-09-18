import React, { Component } from "react";

class RevenueCalculator extends Component {
  state = {
    nop: 0,
    spp: 0,
    rp: 0,
    result: 0,
    negative: false
  };
  handleChange = async e => {
    await this.setState({ [e.target.name]: e.target.value });
  };
  render() {
    return (
      //   <div class="input-group">
      //     <div class="input-group-prepend">
      //       <span class="input-group-text">Number OF Products</span>
      //     </div>
      //     <input class="form-control" aria-label="Number OF Products" />
      //     <div class="input-group-prepend">
      //       <span class="input-group-text">Single Prodcut Cost</span>
      //     </div>
      //     <input class="form-control" aria-label="Single Prodcut Cost" />
      //     <div class="input-group-prepend">
      //       <span class="input-group-text">Your Profit Ratio</span>
      //     </div>
      //     <input class="form-control" aria-label="Your Profit Ratio" />
      //   </div>
      <div
        class="input-group container"
        style={{
          border: "1px solid rgb(224, 224, 224)",
          padding: "30px",
          marginBottom: "30px",
          paddingBottom: "5px"
        }}
      >
        <div class="input-group mb-3">
          <div class="input-group-prepend">
            <span class="input-group-text" id="inputGroup-sizing-default">
              Number Of Products You Sold
            </span>
          </div>
          <input
            type="number"
            class="form-control"
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-default"
            onChange={this.handleChange}
            name="nop"
            placeholder="Number Of Products"
            min="0"
          />
        </div>
        <div class="input-group mb-3">
          <div class="input-group-prepend">
            <span class="input-group-text" id="inputGroup-sizing-default">
              Single Prodcut Price
            </span>
          </div>
          <input
            type="number"
            class="form-control"
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-default"
            onChange={this.handleChange}
            name="spp"
            placeholder="Price in JD"
            min="0"
          />
        </div>
        <div class="input-group mb-3">
          <div class="input-group-prepend">
            <span class="input-group-text" id="inputGroup-sizing-default">
              Your Profit Percent %
            </span>
          </div>
          <input
            type="number"
            class="form-control"
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-default"
            onChange={this.handleChange}
            name="rp"
            placeholder="Number in Percent"
            min="0"
          />
        </div>
        <div
          class="input-group-prepend"
          style={{ width: "100%", color: "red" }}
        >
          {this.state.negative ? "Please enter positive values!" : null}
        </div>
        <div class="input-group-prepend">
          <button
            className="form-control"
            onClick={() => {
              if (
                this.state.nop < 0 ||
                this.state.spp < 0 ||
                this.state.rp < 0
              ) {
                this.setState({ negative: true });
                return;
              }
              this.setState({
                result: (this.state.nop * this.state.spp * this.state.rp) / 100
              });
            }}
          >
            Calculate
          </button>
        </div>

        <div class="input-group mb-3" style={{ marginTop: "15px" }}>
          <span style={{ fontSize: "20px" }}>Your Revenue is: </span>
          <div
            style={{
              border: "1px solid rgb(224, 224, 224)",
              minWidth: "60px",
              fontSize: "20px"
            }}
          >
            {this.state.result} JD
          </div>
        </div>
      </div>
    );
  }
}

export default RevenueCalculator;
