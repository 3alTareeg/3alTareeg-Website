import React, { Component } from 'react'
 import Companies from './Companies'
export default class Mapcompany extends Component {
    render() {
        const {company}= this.props
        return (
            <div>
                {console.log('company', company)}
               {company.map((company,idx)=>{
                  return <Companies  key={idx} company= {company}/>
               })} 
           
            </div>
            
        )
    }
}