import React, { Component } from 'react'

export default class Footer extends Component {

mapRes ={

    height:'100%',
    width:'100%',
    position:'absolute'

}

    render() {
        return (
            <div>


<div class="container-fluid">
    <div class="map-responsive">
   <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5692.355941017853!2d35.910447007995614!3d31.96916758133607!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x6387403e98ca320e!2sOrange%20Shop!5e0!3m2!1sen!2sus!4v1568110258454!5m2!1sen!2sus" width="100%" height="300" frameborder="0" style={{border:'0'}} allowfullscreen></iframe>
</div>
</div>

                <footer class="py-4 bg-dark">
    <div class="container">
      <p class="m-0 text-center text-white">Copyright &copy; OnTheRoad 2019</p>
    </div>
  </footer> 
            </div>
        )
    }
}
