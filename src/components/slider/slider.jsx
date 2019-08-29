import React , { Component } from 'react';
import Button from '../../UI/Button/Button';

// style
import "./slider.scss";

// images
import book from "../../assets/photos/slider-book.jpg";
import stars from "../../assets/photos/stars.png";

class Slider extends Component {

    // constructor(){}

    render(){
        return(
            <div id="slider-wrap">
                <div className="book">
                    <div className="img-wrap">
                        <img src={book} alt=""/>
                    </div>
                </div>
                <div className="book-detail">
                    <div className="book-title">
                    <h5>The Queen of</h5>
                    <h2>Hearts</h2>
                    </div>
                    <div className="book-details">
                        <ul id="detail-list">
                            <li>
                                <span>Author</span>
                                <h6>Kimmery Martin</h6>
                            </li>
                            <li>
                                <span>Type</span>
                                <h6>Love and Passion</h6>
                            </li>
                            <li>
                                <span>Layout</span>
                                <h6>Printed & Pdf</h6>
                            </li>
                        </ul>
                        <div className="reviews">
                            <div className="stars">
                                <img src={stars} alt="stars"/>
                            </div>
                            <div className="rating">
                                <span className="star-rating">5.0 &nbsp;/&nbsp;</span>
                                <span className="star-rating">685 Reviews</span>
                            </div>
                        </div>
                        <div className="add-cart">
                            <span className="price">$ 75.6</span>
                            <Button btnClass="cart-btn"> <i className="fas fa-shopping-bag"></i> Add to cart</Button>

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Slider;