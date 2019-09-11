import React, { Component } from 'react'
import soso from './soso.css'
export default class Service extends Component {
    render() {
        return (
            <div style={{marginTop:'-10%'}}>
                    <section class="services-area pt-100 pb-70" id="services">
		<div class="container">
			<div class="row">
				<div class="col-xl-8 mx-auto text-center">
					<div class="section-title">
						<h4>what i do</h4>
						<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
					</div>
				</div>
			</div>
			<div class="row">
				<div class="col-lg-4 col-md-6">
					<div class="single-service">
						<i class="fa fa-rocket"></i>
						<h4>database</h4>
						<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui quaerat fugit quas veniam perferendis repudiandae sequi. </p>
					</div>
				</div>
				<div class="col-lg-4 col-md-6">
					<div class="single-service">
						<i class="fa fa-camera"></i>
						<h4>app</h4>
						<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui quaerat fugit quas veniam perferendis repudiandae sequi. </p>
					</div>
				</div>
				<div class="col-lg-4 col-md-6">
					<div class="single-service">
						<i class="fa fa-clock-o"></i>
						<h4>support</h4>
						<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui quaerat fugit quas veniam perferendis repudiandae sequi. </p>
					</div>
				</div>
			</div>
		</div>
	  </section>

            </div>
        )
    }
}
