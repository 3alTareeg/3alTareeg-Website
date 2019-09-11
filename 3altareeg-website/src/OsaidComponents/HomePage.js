import React, { Component } from 'react'
import NavBar from './NavBar'
import Header from './Header'
import PageContent from './PageContent'
import Footer from './Footer'
import Contact from './Contact'
import HappyCustomer from './HappyCustomer'




export default class HomePage extends Component {
    render() {


        return (
            <div>
<NavBar />
<br/>
<br/>
<Header />



<PageContent />

<br/>
{/* <Contact /> */}
<HappyCustomer/>
<Footer />


            </div>
        )
    }
}