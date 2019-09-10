import React, { Component } from 'react'


onclick=()=>{
  // const request=this.props.company.request
  // const order=this.props.company.order
  // if( request===false)
  // return !request ,!order
}

export default class Companies extends Component{
      
  
     
    render(){
        const { updateRequest } = this.props;
        const { name ,request,order, _id}=this.props.company
        const style =!order ? {display :'none'}:{};
        return(
          <div class="container " style={style}>
          <div class="row">
    <div class="col-md-4">
    <div class="card text-white bg-secondary mb-3" style={{'max-width': '13rem'}}>
    <span aria-hidden="true"  >&times;</span>
  <div class="card-header">company:{name}</div>
  <div class="card-body">
    <h5 class="card-title">package:{name}</h5>
    {/* <p class="card-text" >{company.request} */}
    <input  type="checkbox" name="check" onChange={updateRequest.bind(this,request, _id)}
     onClick={this.onClick }
    
     />
    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          
        </button>
        {/* </p> */}
  </div>
  </div>
  </div>
</div>
</div>
             
            
        )
    }
}
 