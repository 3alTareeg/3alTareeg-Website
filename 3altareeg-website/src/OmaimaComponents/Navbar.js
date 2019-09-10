import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Navbar extends Component{
    render(){
        return(
          
            <nav class="navbar navbar-light bg-light">
            <form class="form-inline">
            <Link to ='/login'>
              <button class="btn btn-outline-success" type="button">log out</button>
              </Link>
            </form>
          </nav>
        )
    }
}