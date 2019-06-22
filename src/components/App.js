import React, { Component } from 'react';

import { BrowserRouter } from "react-router-dom";
import Slider from './totallRouts/slider';
import Discoverstory from './totallRouts/discover-story';
import Client from './totallRouts/client';
import BestOffer from './totallRouts/order';
import Booking from './totallRouts/book-table'
import Contact from './totallRouts/contact'
import Menud from './totallRouts/discover-menue'
import Team from './totallRouts/team'
import Food from './totallRouts/food'
class App extends Component {

  render() {
   
    return(
      <BrowserRouter>
        <div className="App">   
            {/* <!-- start header area --> */}
            <header className="header_area">
              <nav className="navbar navbar-expand-lg py-0" id="navbar-example">
                <div className="container">
                  <div className="logo">
                    <a href="@"><img src={require("./img/logo.png")} alt=""/></a>
                  </div>
                  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#mynav" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon icon_bar"><i className="fa fa-bars"></i></span>
                  </button>
                  <div className="collapse navbar-collapse" id="mynav">
                    <ul className="navbar-nav nav nav-pills ml-auto">
                      <li className="nav-item">
                        <a className="nav-link" href="#home">HOME<span className="sr-only">(current)</span></a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#booking"> RESERVATIONS</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#menu">MENU</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#blog">BLOG</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#follow">FEATURES</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#follow">SHOP</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#contact">CONTACT</a>
                      </li>
                    </ul>
                    <div className="shopping_card">
                      <a href="@"><img src={require("./img/card.png")} alt=""/></a>
                    </div>
                  </div>
                </div>
              </nav>
            </header>
            {/* <!-- end header area --> */}
   
            {/* <!-- start slider area --> */}
              <Slider/>
            {/* <!-- start slider area --> */}

            {/* <!-- start discover area --> */}
              <Discoverstory/>
            {/* <!-- end discover area --> */}

            {/* <!-- start best offer area --> */}
               <BestOffer/>
            {/* <!-- end best offer area --> */}

            {/* <!-- start our menu area --> */}
              <Menud/>
            {/* <!-- end our menu area --> */}

            {/* <!-- start booking area --> */}
              <Booking/>
            {/* <!-- end booking area --> */}

            {/* <!-- start special food --> */}
              <Food/>
            {/* <!-- end special food --> */}

            {/* <!-- start special team area --> */}
              <Team/>
            {/* <!-- end special team area --> */}

            {/* <!-- start client area --> */}
            <Client/>
            {/* <!-- start client area --> */}

            {/* <!-- start mapping area --> */}
              <Contact/>
            {/* <!-- end mapping area --> */}

            {/* <!-- start footer area --> */}
              <footer className="footer_area">
                <div className="container">
                  <div className="row justify-content-center">
                    <div className="col-lg-4 col-md-12 col-sm-12 col-12">
                      <div className="single_menu">
                        <ul>
                          <li><a href="@">HOME</a></li>
                          <li><a href="@">RESERVATIONS</a></li>
                          <li><a href="@">MENU</a></li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-12 col-sm-12 col-12">
                        <div className="single_menu_logo">
                        <img src={require("./img/logo.png")} alt=""/>        
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-12 col-sm-12 col-12">
                      <div className="single_menu">
                          <ul>
                            <li><a href="@">BLOG</a></li>
                            <li><a href="@">FEATURES</a></li>
                            <li><a href="@">SHOP</a></li>
                            <li><a href="@">CONTACT</a></li>
                          </ul>
                        </div>
                    </div>
                  </div>
                  </div>
              </footer>
          {/* end footer area  */}
          </div>
 </BrowserRouter>
     
    )
}
  
}

export default App;
