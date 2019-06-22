import React, { Component } from "react";

export default class Discover extends Component {

  render() {
  
    return (
      <div className="discover_menu">
          {/* <!-- start our menu area --> */}
          <div className="our_menu_area" id="menu">
                <div className="our_menu">
                  <div className="menu_side_back">
                    <img src={require("./../img/menu_back.png")} alt=""/>
                  </div>
                  <div className="container">
                    <div className="row">
                      <div className="col-lg-6 col-md-6 col-sm-12">
                        <div className="our_menu_left">
                            <div className="row justify-content-right">
                                <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                                  <div className="sinle_left_menu">
                                    <img src={require("./../img/menu1.jpg")} alt=""/>
                                  </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                                  <div className="single_right_menu">
                                    <img src={require("./../img/menu2.jpg")} alt=""/>
                                    <img src={require("./../img/menu3.jpg")} alt=""/>
                                  </div>
                                </div>
                              </div>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-12">
                        <div className="menu_right text-center">
                            <h2>Discover</h2>
                            <h3>OUR MENU</h3>
                            <p>Rosa is a restaurant, bar and coffee roastery located on a busy corner site in Farringdon’s Exmouth Market. With glazed frontage on two sides of the building, overlooking the market and a bustling London inteon.</p>
                            <div className="menu_btn">
                              <a href="@">Full Menu View <i className="fa fa-angle-right cursore" aria-hidden="true"></i></a>
                            </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            {/* <!-- end our menu area --> */}
      </div>
    );
  }
}