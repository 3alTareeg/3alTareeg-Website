import React, { Component } from 'react'
 
import Drivers from './Drivers'
export default class Mapdrivers extends Component {
    render() {
        const {driver}= this.props
        return (
            <>
                {console.log('driver', driver)}
               {driver.map((driver,idx)=>{
                  return <Drivers key={idx} driver= {driver}/>
               })} 
          </>
        )
    }
}