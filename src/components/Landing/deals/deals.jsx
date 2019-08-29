import React , { Component } from 'react';
import "./deals.scss";

import awardbook from "../../../assets/photos/slider-book.jpg";
import topbook from "../../../assets/photos/the-arsonist.jpg";
import bestbook from "../../../assets/photos/annastrobel.jpg";

class Deals extends Component {

    render(){
        return(
            <div id="deals-wrapper">
                <div className="item award">
                    <span className="book-type color1">Award Winners</span>
                    <div className="book-detail">
                        <div className="img-wrap">
                            <img src={awardbook} alt=""/>
                        </div>
                        <div className="detail">
                            <h3>Book Title</h3>
                            <span>Author</span>
                            <br/>
                            <h4>
                                <span className="price">$16</span>
                                <span className="ex-price">$25</span>
                            </h4>
                        </div>
                    </div>
                </div>
                <div className="item top">
                    <span className="book-type color2">Top Rated</span>
                    <div className="book-detail">
                        <div className="img-wrap">
                            <img src={topbook} alt=""/>
                        </div>
                        <div className="detail">
                            <h3>Book Title</h3>
                            <span>Author</span>
                            <br/>
                            <h4>
                                <span className="price">$16</span>
                                <span className="ex-price">$25</span>
                            </h4>
                        </div>
                    </div>
                </div>
                <div className="item best">
                    <span className="book-type color3">Best Selling</span>
                    <div className="book-detail">
                        <div className="img-wrap">
                            <img src={bestbook} alt=""/>
                        </div>
                        <div className="detail">
                            <h3>Book Title</h3>
                            <span>Author</span>
                            <br/>
                            <h4>
                                <span className="price">$16</span>
                                <span className="ex-price">$25</span>
                            </h4>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default Deals;