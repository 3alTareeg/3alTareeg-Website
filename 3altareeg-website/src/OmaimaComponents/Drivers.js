import React, { Component } from 'react'

export default class Drivers extends Component{
    state={
        company:{
            nameOFdrivers:'',
            numberOfcar:0,
            isAvaliable:false
            
        }
    }
    render(){
        const {driver } = this.props;
        return(
            <>
<div class="card text-white bg-info mb-3" style={{'max-width': '18rem'}}>
  <div class="card-header">driver name:{driver.nameOFdrivers}</div>
  <div class="card-body">
    <h5 class="card-title">number of car:{driver.numberOfcar}</h5>
    <p class="card-text">isAvaliable:{driver.isAvaliable} </p>
  </div>
</div>


{/* <div style={{border: "2px solid black"}}>
       
      
        <p>driver name:{driver.nameOFdrivers}</p>
          
        <p> number of car:{driver.numberOfcar}  </p>
        <p> isAvaliable:{driver.isAvaliable}  </p>

      </div> */}
            </>
            
        )
    }
}