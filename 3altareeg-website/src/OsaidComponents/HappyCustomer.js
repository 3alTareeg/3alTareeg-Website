import React, { Component } from 'react'

export default class HappyCustomer extends Component {
    render() {
        return (
          <>
           <br/>
           <br/>
                <div class="card bg-light mb-3" style={{width:'80%',margin:'auto',borderRadius:'20px'}}>
  <div class="card-header">
 <center><h5>Happy Client</h5> </center>  
  </div>
  <div class="card-body" >
  <div class='row'>
    <div class='col-md-offset-2 col-md-8' style={{margin:'auto'}}>
      <div class="carousel slide" data-ride="carousel" id="quote-carousel">
        <ol class="carousel-indicators">
          <li data-target="#quote-carousel" data-slide-to="0" class="active"></li>
          <li data-target="#quote-carousel" data-slide-to="1"></li>
          <li data-target="#quote-carousel" data-slide-to="2"></li>
        </ol>

        <div class="carousel-inner" style={{margin:'auto'}} >

          <div class="carousel-item active">
            <blockquote class="blockquote mb-0">
              <div class="row">
                <div class="col-sm-3 text-center">
                 <img class="img-circle" src="https://s3.amazonaws.com/uifaces/faces/twitter/kolage/128.jpg" style={{width: "100px",height:"100px"}}/>
                </div>
                <div class="col-sm-9">
                  <p>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit!</p>
                  <small>Someone famous</small>
                </div>
              </div>
            </blockquote>
          </div>
          <div class="carousel-item">
            <blockquote class="blockquote mb-0">
              <div class="row">
                <div class="col-sm-3 text-center">
                  <img class="img-circle" src="https://s3.amazonaws.com/uifaces/faces/twitter/mijustin/128.jpg" style={{width: "100px",height:"100px"}}/>
                </div>
                <div class="col-sm-9">
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam auctor nec lacus ut tempor. Mauris.</p>
                  <small>Someone famous</small>
                </div>
              </div>
            </blockquote>
          </div>
          <div class="carousel-item">
            <blockquote class="blockquote mb-0">
              <div class="row">
                <div class="col-sm-3 text-center">
                  <img class="img-circle" src="https://s3.amazonaws.com/uifaces/faces/twitter/keizgoesboom/128.jpg" style={{width: "100px",height:"100px"}}/>
                </div>
                <div class="col-sm-9">
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut rutrum elit in arcu blandit, eget pretium nisl accumsan. Sed ultricies commodo tortor, eu pretium mauris.</p>
                  <small>Someone famous</small>
                </div>

              </div>

            </blockquote>

          </div>

        </div>



        <a data-slide="prev" style={{color:'black'}} href="#quote-carousel" class="carousel-control-prev"><i class="fa fa-chevron-left"></i></a>
        <a data-slide="next" style={{color:'black'}} href="#quote-carousel" class="carousel-control-next"><i class="fa fa-chevron-right"></i></a>




      </div>                          
    </div>
  </div>
</div>
            </div>
            <br/>
            </>
        )
    }
}
