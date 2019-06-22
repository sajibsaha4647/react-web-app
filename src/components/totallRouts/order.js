import React, { Component } from "react";
import Slider from "react-slick";

export default class PreviousNextMethods extends Component {
changeHandeller = () =>{

}
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }
  next() {
    this.slider.slickNext();
  }
  previous() {
    this.slider.slickPrev();
  }
  render() {
     const dsettings = {
      dots: false,
      infinite: true,
      speed: 500,
      arrows:false,
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay:true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            initialSlide: 2
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <div className="order">
           <div className="best_offer_area">
                <div className="best_offer">
                  <div className="container">
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="offer_top_text">
                          <h2>Best Offers</h2>
                        </div>
                      </div>
                    </div>
                      <div className="allsingle_slide">
                          <Slider ref={c => (this.slider = c)} className="row" {...dsettings}>
                          <div className="col-lg-12">
                          <div className="single_bestoffer">
                              <div className="best_one">
                                  <div className="offer">
                                    <p>50% off</p>
                                  </div>
                                  <div className="offer_image text-center">
                                    <img src={require("./../img/offer1.png")} alt=""/>
                                  </div>
                                  <div className="offer_text text-center">
                                    <h2>Chicken Fry</h2>
                                    <p>Breakfast, Dessert</p>
                                    <h3>$4.50</h3>
                                  </div>
                                  <div className="offer_card">
                                    <div className="row text-center">
                                      <div className="col-lg-6 col-md-6 col-sm-6 col-6 pr-0 justify-content-center">
                                        <div className="increment">
                                          <span><button className="btn_btn" type="button">-</button></span><span><input onChange={ this.changeHandeller }  type="text" className="width" value="1"/></span><span><button className="btn_btn" type="button">+</button></span>
                                        </div>
                                      </div>
                                      <div className="col-lg-6 col-md-6 col-sm-6 col-6 pl-0 ">
                                        <div className="shop_card">
                                          <a href="@"><img src={require("./../img/card.png")} alt=""/></a>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                          </div> 
                        </div>
                        <div className="col-lg-12">
                          <div className="single_bestoffer">
                              <div className="best_one">
                                  <div className="offer">
                                    <p>50% off</p>
                                  </div>
                                  <div className="offer_image text-center">
                                    <img src={require("./../img/offer2.png")} alt=""/>
                                  </div>
                                  <div className="offer_text text-center">
                                    <h2>Fried Rice Fry</h2>
                                    <p>Breakfast, Dessert</p>
                                    <h3>$5.50</h3>
                                  </div>
                                  <div className="offer_card">
                                    <div className="row text-center">
                                      <div className="col-lg-6 col-md-6 col-sm-6 col-6 pr-0 justify-content-center">
                                        <div className="increment">
                                          <span><button className="btn_btn" type="button">-</button></span><span><input onChange={ this.changeHandeller }  type="text" className="width" value="1"/></span><span><button className="btn_btn" type="button">+</button></span>
                                        </div>
                                      </div>
                                      <div className="col-lg-6 col-md-6 col-sm-6 col-6 pl-0 ">
                                        <div className="shop_card">
                                          <a href="@"><img src={require("./../img/card.png")} alt=""/></a>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                            </div>
                          </div>
                        <div className="col-lg-12">
                          <div className="single_bestoffer">
                              <div className="best_one">
                                  <div className="offer">
                                    <p>50% off</p>
                                  </div>
                                  <div className="offer_image text-center">
                                    <img src={require("./../img/offer3.png")} alt=""/>
                                  </div>
                                  <div className="offer_text text-center">
                                    <h2>Egg Pot Fry</h2>
                                    <p>Breakfast, Dessert</p>
                                    <h3>$6.50</h3>
                                  </div>
                                  <div className="offer_card">
                                    <div className="row text-center">
                                      <div className="col-lg-6 col-md-6 col-sm-6 col-6 pr-0 justify-content-center">
                                        <div className="increment">
                                          <span><button className="btn_btn" type="button">-</button></span><span><input onChange={ this.changeHandeller }  type="text" className="width" value="1"/></span><span><button className="btn_btn" type="button">+</button></span>
                                        </div>
                                      </div>
                                      <div className="col-lg-6 col-md-6 col-sm-6 col-6 pl-0 ">
                                        <div className="shop_card">
                                          <a href="@"><img src={require("./../img/card.png")} alt=""/></a>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                          </div>
                        </div>
                        <div className="col-lg-12">
                          <div className="single_bestoffer">
                              <div className="best_one">
                                  <div className="offer">
                                    <p>50% off</p>
                                  </div>
                                  <div className="offer_image text-center">
                                    <img src={require("./../img/offer3.png")} alt=""/>
                                  </div>
                                  <div className="offer_text text-center">
                                    <h2>Egg Pot Fry</h2>
                                    <p>Breakfast, Dessert</p>
                                    <h3>$6.50</h3>
                                  </div>
                                  <div className="offer_card">
                                    <div className="row text-center">
                                      <div className="col-lg-6 col-md-6 col-sm-6 col-6 pr-0 justify-content-center">
                                        <div className="increment">
                                          <span><button className="btn_btn" type="button">-</button></span><span><input onChange={ this.changeHandeller } type="text" className="width" value="1"/></span><span><button className="btn_btn" type="button">+</button></span>
                                        </div>
                                      </div>
                                      <div className="col-lg-6 col-md-6 col-sm-6 col-6 pl-0 ">
                                        <div className="shop_card">
                                          <a href="@"><img src={require("./../img/card.png")} alt=""/></a>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                          </div>
                        </div>
                        <div className="col-lg-12">
                          <div className="single_bestoffer">
                              <div className="best_one">
                                  <div className="offer">
                                    <p>50% off</p>
                                  </div>
                                  <div className="offer_image text-center">
                                    <img src={require("./../img/offer-4.png")} alt=""/>
                                  </div>
                                  <div className="offer_text text-center">
                                    <h2>Beep Carry</h2>
                                    <p>Breakfast, Dessert</p>
                                    <h3>$4.90</h3>
                                  </div>
                                  <div className="offer_card">
                                    <div className="row text-center">
                                      <div className="col-lg-6 col-md-6 col-sm-6 col-6 pr-0 justify-content-center">
                                        <div className="increment">
                                          <span><button className="btn_btn" type="button">-</button></span><span><input onChange={ this.changeHandeller }  type="text" className="width" value="1"/></span><span><button className="btn_btn" type="button">+</button></span>
                                        </div>
                                      </div>
                                      <div className="col-lg-6 col-md-6 col-sm-6 col-6 pl-0 ">
                                        <div className="shop_card">
                                          <a href="@"><img src={require("./../img/card.png")} alt=""/></a>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                          </div>
                        </div>
                        </Slider>
                        <div className="btn1">
                          <span className="prebtn12" onClick={this.previous}>
                            <div className="prebtn"></div>
                          </span>
                        </div>
                        <div className="btn2">
                            <span className="nextbtn12" onClick={this.next}>
                              <div className="nextbtn"></div>
                            </span>
                        </div> 
                  </div>
                </div>
              </div>
            </div>
      </div>
    );
  }
}