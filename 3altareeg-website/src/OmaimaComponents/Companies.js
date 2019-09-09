import React, { Component } from 'react'

export default class Companies extends Component{
    
    render(){
        const { company } = this.props;
        return(
          <div class="container ">
          <div class="row">
    <div class="col-md-4">
    <div class="card text-white bg-secondary mb-3" style={{'max-width': '13rem'}}>
  <div class="card-header">company:{company.nameOFcompany}</div>
  <div class="card-body">
    <h5 class="card-title">phone:{company.nameOfpckage}</h5>
    <p class="card-text">Some quick example text</p>
  </div>
  </div>
  </div>
</div>
</div>
    
             
            
        )
    }
}