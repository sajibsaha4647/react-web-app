import React, { Component } from "react";

export default class Booktable extends Component {
changeHandeller = () =>{

}
  render() {
  
    return (
      <div className="booking_table">
          {/* <!-- start booking area --> */}
          <div className="booking_area" id="booking">
                <div className="booking">
                  <div className="container">
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="booking_top_text">
                          <h3>Let’s</h3>
                          <h2>Book a Table</h2>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-6 col-md-8 col-sm-12 col-12">
                        <div className="booking_table">
                          <div className="row justify-content-center">
                            <div className="col-lg-4 col-md-4 col-sm-4 col-6">
                              <div className="single_option">
                                  <div className="form-group">
                                    <label htmlFor="#">Date</label>
                                    <select className="form-control controls" id="#">
                                      <option>01-01-2019</option>
                                    </select>
                                  </div>
                              </div>
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-4 col-6">
                              <div className="single_option">
                                  <div className="form-group">
                                      <label htmlFor="#">Time</label>
                                      <select className="form-control controls" id="#">
                                        <option>12 pm</option>
                                      </select>
                                  </div>
                              </div>
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-4 col-6">
                              <div className="single_option">
                                  <div className="form-group">
                                      <label htmlFor="#">Person</label>
                                      <select className="form-control controls" id="#">
                                        <option>01</option>
                                      </select>
                                  </div>
                              </div>
                            </div>
                          </div>
                          <div className="form-group input_input">
                              <input onChange={ this.changeHandeller } type="email" className="form-control controls" id="#" placeholder="Enter your email"/>
                          </div>
                          <div className="booking_btn">
                            <a href="@">Check Available <i className="fa fa-angle-right cursore" aria-hidden="true"></i></a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            {/* <!-- end booking area --> */}
      </div>
    );
  }
}