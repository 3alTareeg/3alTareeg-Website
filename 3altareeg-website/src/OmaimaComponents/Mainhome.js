import React, { Component } from 'react';
 import axios from 'axios';


import LoginAdmin from './LoginAdmin';
import Home from './Home';
import Mapcompany from './Mapcompany';
import Mapdrivers from './Mapdrivers';
import Navbar from './Navbar';


import { BrowserRouter as Router, Swich, Route } from 'react-router-dom'


export default class Mainhome extends Component {

//   state={
    // companyList:[
    //     {
    //         nameOFcompany:'x',
    //         nameOfpckage:'xx',
    //         request:false
            
    //     },{
    //         nameOFcompany:'c',
    //         nameOfpckage:'cc',
    //         request:true
            
    //     },{
    //         nameOFcompany:'b',
    //         nameOfpckage:'bb',
    //         request:false

            
    //     }
    // ]
    // ,
    // driverList:[
    //     {
    //         nameOFdrivers:'x',
    //         numberOfcar:0,
    //         isAvaliable:false
            
    //     },{
    //         nameOFdrivers:'c',
    //         numberOfcar:0,
    //         isAvaliable:false
            
    //     },{
    //         nameOFdrivers:'b',
    //         numberOfcar:0,
    //         isAvaliable:false
            
    //     }
    // ]
    // }
    // getCompany=()=>{
    //     console.log('data')
    //     axios.get("http://localhost:9000/signUpCompanies")
    //   .then(res => {
    //       this.setState({companyList: res.data});
    //       console.log('data',this.state.companyList)
    //   })
    //   .catch(err => {
    //     console.log(err);
    //   });

    // } 



  render() {
    
    return (
      
        <>
      <Router>
       
        <Route exact path = '/login' component={LoginAdmin} />
        <Navbar/>
        <Route path= '/map' component={Mapcompany} />
        <Route path= '/map2' component={Mapdrivers}/>
        <Route path= '/home' component={Home}/>
        {/* <Route path = '/map' component={props =>(<Mapcompany {...props}  company={this.state.companyList} request={this.state.companyList.request}/>)} ></Route>
        <Route path= '/map2' component={props =>(<Mapdrivers {...props}  driver={this.state.driverList}/>)}></Route>
        <Route path= '/home' component={props =>(<Home {...props}  getCompany={this.getCompany}/>)}></Route>  */}
        {/* <Router path='/mapcompany' component={Mapcompany}/> */}
        
        </Router>
        </>
        
    );
  }
}
