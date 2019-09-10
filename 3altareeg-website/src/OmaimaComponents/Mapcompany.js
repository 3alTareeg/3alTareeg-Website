import React, { Component } from 'react'
 import Companies from './Companies'
 import axios from 'axios';

export default class Mapcompany extends Component {
    state={
        companyList:[]
    }
    // componentWillMount
    componentDidMount=()=>{
        console.log('data')
        axios.get("http://localhost:9000/signUpCompanies/signUpCompanies")
      .then(res => {
          this.setState({companyList: res.data});
          console.log('data',this.state.companyList)
      })
      .catch(err => {
        console.log(err);
      });}

  
    updateCompany=(request,id)=>{
      //today
      let test=""
      if(request===false)
          request=true
      console.log(request)
      console.log(id)
        axios.put(`http://localhost:9000/signUpCompanies/updateData`, {request, id})
        .then(response => {
            this.setState({ companyList: response.data })
            // console.log('response', response.data);
          })
          .catch(error => {
            console.log("Error", error)
          })

    }
    
    render() {
        const {companyList}= this.state
         const {updateCompany}=this
        return (
            <div >
                {console.log('', companyList)}
                {companyList.map((company,idx)=>{
                  return <Companies  key={idx}  company= {company} updateRequest={updateCompany}/>
               })} 
           
            </div>
            
            
        )
    }
}