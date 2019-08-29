import React , { Component } from 'react';
import "./ex-price.scss";
import Button from '../../../UI/Button/Button';

import exBook1 from "../../../assets/photos/ex-book1.jpg";
import exBook2 from "../../../assets/photos/ex-book2.jpg";

class ExpriceSection extends Component {

    render(){
        return(
            <div id="ex-price-wrapper">
                <div className="item book1">
                    <div className="book">
                        <div className="img-wrap">
                            <img src={exBook1} alt=""/>
                        </div>
                    </div>
                    <div className="book-detail">
                        <div className="book-title">
                            <h5>Design</h5>
                            <h2>Ecology Politics</h2>
                        </div>
                        <div className="book-details">
                            <ul id="detail-list">
                                <li>
                                    <span>by &nbsp;</span>
                                    <b>Ruther Martin</b>
                                </li>
                            </ul>
                            <div className="add-cart">
                                <span className="price">$ 65.6</span>
                                <span className="ex-price">$ 75.6</span>
                                <br/>
                                <Button btnClass="cart-btn">Add to cart</Button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="item book2">
                    <div className="book">
                        <div className="img-wrap">
                            <img src={exBook2} alt=""/>
                        </div>
                    </div>
                    <div className="book-detail">
                        <div className="book-title">
                            <h5>Eleven</h5>
                            <h2>Minutes</h2>
                        </div>
                        <div className="book-details">
                            <ul id="detail-list">
                                <li>
                                    <span>by &nbsp;</span>
                                    <b>Paulo coelho</b>
                                </li>
                            </ul>
                            <div className="add-cart">
                                <span className="price">$ 55.6</span>
                                <span className="ex-price">$ 75.6</span>
                                <br/>
                                <Button btnClass="cart-btn">Add to cart</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

export default ExpriceSection;