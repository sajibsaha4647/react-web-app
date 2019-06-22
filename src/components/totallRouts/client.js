import React, { Component } from "react";
import Slider from "react-slick";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    // this.nextHandeller = this.nextHandeller.bind(this);
    // this.previousHandeller = this.previousHandeller.bind(this);
  }

  next() {
    this.slider.slickNext();
  }
  previous() {
    this.slider.slickPrev();
  }
  render() {
    const csettings = {
      dots: false,
      infinite: true,
      speed: 500,
      arrows:false,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay:true,
      
    };
    return (
        <div className="client">
               {/* <!-- start client area --> */}
               <div className="client_area">
                <div className="client">
                  <div className="client_side_image">
                    <img src={require("./../img/client-back.png")} alt=""/>
                  </div>
                  <div className="container">
                    <div className="row">
                      <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                        <div className="row">
                          <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                            <div className="single_client">
                              <img src={require("./../img/client1.png")} alt=""/>
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                              <div className="single_client text-right">
                                  <img src={require("./../img/client4.png")} alt=""/>
                                </div>
                          </div>
                          <div className="col-lg-12 text-center">
                              <div className="single_client ">
                                  <img src={require("./../img/client3.png")} alt=""/>
                                </div>
                          </div>
                          <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                              <div className="single_client">
                                  <img src={require("./../img/client2.png")} alt=""/>
                                </div>
                          </div>
                          <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                              <div className="single_client text-right">
                                  <img src={require("./../img/client5.png")} alt=""/>
                              </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="client_right_text">
                          <h3>Check What Our Client</h3>
                          <h4>Say About Us</h4>
                          <div className="client_for_arrow">
                              <div className="all_scroll_client all_special">
                                    <Slider ref={c => (this.slider = c)} {...csettings}>
                                    <div className="single_scroll_client">
                                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even sligh..</p>
                                    <div className="client_img">
                                      <img src={require("./../img/client3.png")} alt=""/>
                                    </div>
                                    <div className="scroll_client_name">
                                      <h5>John Cheary</h5>
                                      <h6>Cheif Director</h6>
                                    </div>
                                  </div>
                                  <div className="single_scroll_client">
                                    <p> variations of passages There are many  of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even sligh..</p>
                                    <div className="client_img">
                                      <img src={require("./../img/client4.png")} alt=""/>
                                    </div>
                                    <div className="scroll_client_name">
                                      <h5> Cheary John </h5>
                                      <h6>Cheif Director</h6>
                                    </div>
                                  </div>
                                  <div className="single_scroll_client">
                                    <p> variations of passages There are many  of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even sligh..</p>
                                    <div className="client_img">
                                      <img src={require("./../img/client4.png")} alt=""/>
                                    </div>
                                    <div className="scroll_client_name">
                                      <h5> Cheary John </h5>
                                      <h6>Cheif Director</h6>
                                    </div>
                                  </div>
                                    </Slider> 
                                    <div className="prebtns">
                                      <span className="buttons" onClick={this.previous}>
                                        <i className="fa fa-angle-left"></i>
                                      </span>
                                    </div>
                                    <div className="nextbtns">
                                      <span className="buttons" onClick={this.next}>
                                      <i className="fa fa-angle-right"></i>
                                      </span>
                                    </div>
                                  </div>
                                </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
             {/* <!-- end client area -->  */}
        </div>
    );
  }
}