import React, { Component } from "react";

export default class Discover extends Component {
 
  render() {
    
    return (
      <div className="discover_story">
         <div className="discover_area">
                <div className="discover">
                  <div className="discover_side">
                    <img src={require("./../img/discover.png")} alt=""/>
                  </div>
                  <div className="container">
                    <div className="row">
                      <div className="col-lg-6 col-md-6 col-sm-12">
                        <div className="discover_left text-center">
                          <h2>Discover</h2>
                          <h3>OUR STORY</h3>
                          <p>Rosa is a restaurant, bar and coffee roastery located on a busy corner site in Farringdon’s Exmouth Market. With glazed frontage on two sides of the building, overlooking the market and a bustling London inteon.</p>
                          <div className="discover_btn">
                            <a href="@">Our Story <i className="fa fa-angle-right cursore" aria-hidden="true"></i></a>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-12 ">
                        <div className="discover_right">
                          <div className="row">
                            <div className="col-lg-6 col-md-6 col-sm-6">
                              <div className="discover_left_single">
                                <img src={require("./../img/discover2.jpg")} alt=""/>
                              </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-6">
                              <div className="discover_left_single">
                                <img src={require("./../img/discover3.jpg")} alt=""/>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
        </div>
    );
  }
}