import React, { Component } from "react";

export default class Booktable extends Component {

  render() {
  
    return (
      <div className="team_all">
        <div className="special_team_area">
                <div className="special_team">
                  <div className="container">
                      <div className="row">
                          <div className="col-lg-12">
                            <div className="team_top_text">
                              <h2>Special Team</h2>
                            </div>
                          </div>
                        </div>
                        <div className="row text-center justify-content-center">
                          <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className="single_team">
                              <img src={require("./../img/team1.png")} alt=""/>
                              <div className="special_team_text">
                                <h2>JEFFREY SPENDER</h2>
                                <h5>Head Barman</h5>
                                <p>Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Aenean commodo ligula.</p>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className="single_team">
                              <img src={require("./../img/team2.png")} alt=""/>
                              <div className="special_team_text">
                                <h2>TUHIN SPENDER</h2>
                                <h5>Head Barman</h5>
                                <p>Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Aenean commodo ligula.</p>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className="single_team">
                              <img src={require("./../img/team3.png")} alt=""/>
                              <div className="special_team_text">
                                <h2>ARAFAT SPENDER</h2>
                                <h5>Head Barman</h5>
                                <p>Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Aenean commodo ligula.</p>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-12">
                            <div className="special_team_btn">
                              <a href="@">View More</a>
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