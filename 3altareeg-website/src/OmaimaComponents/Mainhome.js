import React, { Component } from 'react';
// import axios from 'axios';


import LoginAdmin from './LoginAdmin';
import Home from './Home';
import Mapcompany from './Mapcompany';
import Mapdrivers from './Mapdrivers';
import Navbar from './Navbar';


import { BrowserRouter as Router, Swich, Route } from 'react-router-dom'


export default class Mainhome extends Component {

  state={
    companyList:[
        {
            nameOFcompany:'x',
            nameOfpckage:'xx',
            yesOrno:false
            
        },{
            nameOFcompany:'c',
            nameOfpckage:'cc',
            yesOrno:false
            
        },{
            nameOFcompany:'b',
            nameOfpckage:'bb',
            yesOrno:false

            
        }
    ]
    ,
    driverList:[
        {
            nameOFdrivers:'x',
            numberOfcar:0,
            isAvaliable:false
            
        },{
            nameOFdrivers:'c',
            numberOfcar:0,
            isAvaliable:false
            
        },{
            nameOFdrivers:'b',
            numberOfcar:0,
            isAvaliable:false
            
        }
    ]
    }



  render() {
    
    return (
      
        <>
      <Router>
       
        <Route exact path = '/login' component={LoginAdmin} />
        <Navbar/>
      
        <Route path = '/map' component={props =>(<Mapcompany {...props}  company={this.state.companyList}/>)} ></Route>
        <Route path= '/map2' component={props =>(<Mapdrivers {...props}  driver={this.state.driverList}/>)}></Route>
        <Route path= '/home' component={Home} />
        {/* <Router path='/mapcompany' component={Mapcompany}/> */}
        
        </Router>
        </>
        
    );
  }
}
