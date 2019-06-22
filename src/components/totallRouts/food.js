import React, { Component } from "react";

export default class Food extends Component {
  
 
  render() {

    return (
      <div className="food">
          {/* <!-- start special food --> */}
          <div className="special_food_area">
                <div className="special_food">
                  <div className="special_top_back">
                    <img src={require("./../img/food_back.png")} alt=""/>
                  </div>
                  <div className="special_side_back">
                    <img src={require("./../img/food_back2.png")} alt=""/>
                  </div>
                  <div className="container">
                    <div className="row">
                      <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                        <div className="single_special_left">
                          <h2>Special </h2>
                          <h3>Food</h3>
                          <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The </p>
                        </div>
                      </div>
                      <div className="col-lg-8 col-md-6 col-sm-12 col-12">
                        <div className="row">
                          <div className="col-lg-8 col-sm-12 col-12">
                            <div className="special_right_text">
                              <h5>Chicken Burger</h5>
                              <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum </p>
                              <h6>Price</h6>
                              <h2>$45.60</h2>
                              <div className="special_right_btn">
                                <a href="@"><img src={require("./../img/card.png")} alt=""/> Add To Cart</a>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-4 col-sm-4 col-4">
                            <div className="special_right_imgage">
                              <img src={require("./../img/special-food.jpg")} alt=""/>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            {/* <!-- end special food --> */}
      </div>
    );
  }
}