import React, { Component } from "react";

export default class Booktable extends Component {

  render() {
  
    return (
      <div className="booking_table">
           {/* <!-- start mapping area --> */}
           <div className="map_area" id="#contact">
                <div className="map">
                  <div className="container">
                    <div className="row">
                      <div className="col-lg-4 col-md-6 col-sm-8 col-12">
                        <div className="single_mapping">
                          <h2>Our Store</h2>
                          <p>123 Suspendis matti, Visaosang Building VST District, NY Accums, North American
                            </p>
                          <div className="bottom_phone">
                            <ul>	
                              <li>0123-456-78910</li>
                              <li>support@domain.com</li>
                            </ul>
                          </div>
                          <div className="direction_btn">
                            <a href="@">Get Directions</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            {/* <!-- end mapping area --> */}
      </div>
    );
  }
}