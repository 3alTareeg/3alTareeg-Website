
import React, { Component } from 'react'
//  import Navbar from './Navbar';
// import Compaines from './Companies';
// import Mapcompany from './Mapcompany';
// import Mapdrivers from './Mapdrivers';
import { Link } from 'react-router-dom'




export default class Home extends Component{
    
render(){
    return(
        <>
    {/* <Navbar/> */}

<div class="container">
  <div class="row">
    <div class="col-sm">
    <Link to ='/map'>
<div class="card" style={{'width':'20rem','height':'20rem','marginTop':100}} >
<img src="..." class="card-img-top" alt="..."/>
<div class="card-body" >
<p class="card-text">Compaines Requests</p>
</div>

</div>
</Link>
    </div>
    <div class="col-sm">
     
<Link to ='/map2'>
<div class="card" style={{'width':'20rem','height':'20rem','marginTop':100}} >
<img src="..." class="card-img-top" alt="..."/>
<div class="card-body">
<p class="card-text">Avaliable Drivers</p>
</div>
</div>
</Link>
    </div>
    
  </div>
</div>

        </>
    )
}
}

{/* <Compaines/> 
<Mapcompany company={this.state.companyList}/>
<Mapdrivers driver={this.state.driverList}/>  */}







