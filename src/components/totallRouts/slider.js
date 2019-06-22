import React, { Component } from "react";
import Slider from "react-slick";
import BgSlider from './../img/slider.jpg';
export default class PreviousNextMethods extends Component {
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
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      arrows:false,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay:true
    };
    return (
      <div className="slider_slider">
           {/* <!-- start slider area --> */}
           <section className='slider_area' id='home'>
              <Slider ref={c => (this.slider = c)} {...settings}>
                    <div className="slider">
                    <div className="slider_area" style={{ backgroundImage: `url(${BgSlider})`, backgroundRepeat:'noRepeat',backgroundSize:'cover',backgroundPosition:'center',width:'100%'}}>
                      <div className="container">
                        <div className="row">
                          <div className="col-lg-12">
                            <div className="slider_text text-center">
                              <h2>Welcome To Hungry</h2>
                              <h3>Enjoy Our Foods</h3>
                              <div className="slider_btn">
                                <a href="@">Explore</a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                    <div className="slider">
                    <div className="slider_area" style={{ backgroundImage: `url(${BgSlider})`, backgroundRepeat:'noRepeat',backgroundSize:'cover',backgroundPosition:'center',width:'100%'}}>
                      <div className="container">
                        <div className="row">
                          <div className="col-lg-12">
                            <div className="slider_text text-center">
                              <h2 >Welcome To Hungry</h2>
                              <h3 >Enjoy Our Foods</h3>
                              <div className="slider_btn">
                                <a href="@">Explore</a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Slider>
              <div className="l_slider">
                <span className="buttons" onClick={this.previous}>
                  <i className="fa fa-angle-left"></i>
                </span>
              </div>
               <div className="r_slider">
               <span className="buttons" onClick={this.next}>
                <i className="fa fa-angle-right"></i>
                </span>
               </div>
              </section>
            {/* <!-- start slider area --> */}
      </div>
    );
  }
}