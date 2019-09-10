import React, { Component } from 'react'
import axios from 'axios';
import Drivers from './Drivers'
export default class Mapdrivers extends Component {
    state={
        driverList:[]
    }
    
        componentDidMount=()=>{
            console.log('data')
            axios.get("http://localhost:9000/signUpCompanies/signUpDrivers")
          .then(res => {
              this.setState({driverList: res.data});
              console.log('data',this.state.driverList)
          })
          .catch(err => {
            console.log(err);
          });}

    
    render() {
        const {driverList}= this.state
        return (
            <>
                {console.log('driver', driverList)}
               {driverList.map((driver,idx)=>{
                  return <Drivers key={idx} driver= {driver}/>
               })} 
          </>
        )
    }
}