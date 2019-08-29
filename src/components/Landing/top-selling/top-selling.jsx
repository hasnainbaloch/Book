import React , { Component } from 'react';
import "./top-selling.scss";

import topBook1 from "../../../assets/photos/annastrobel.jpg";
import topBook2 from "../../../assets/photos/art_bookcover.png"
import topBook3 from "../../../assets/photos/slider-book.jpg"
import topBook4 from "../../../assets/photos/the-arsonist.jpg"
// import bookBg from "../../../assets/photos/main-bg.png"

class TopSelling extends Component {

    render(){
        return(
            <div id="wrapper">
            <div className="title">
                <h3>Top Selling Book</h3>
                <span className="viewAll">view all <i className="fas fa-chevron-right"></i></span>
            </div>
            <div id="top-selling">
                <div className="items book">
                    <div className="book-wrap">
                        <img src={topBook1} alt=""/>
                    </div>
                    <div className="book-detail">
                        <h4>Book title</h4>
                        <span  className="author">by <span>Ameer Hamza</span></span>
                        <div className="price">
                            <span className="current-price">$ 16.79</span>
                            <span className="ex-price">$ 23.24</span>
                        </div>
                    </div>
                </div>
                <div className="items book">
                    <div className="book-wrap">
                        <img src={topBook2} alt=""/>
                    </div>
                    <div className="book-detail">
                        <h4>Book title</h4>
                        <span  className="author">by <i>Ameer Hamza</i></span>
                        <div className="price">
                            <span className="current-price">$ 16.79</span>
                            <span className="ex-price">$ 23.24</span>
                        </div>
                    </div>
                </div>
                <div className="items book">
                    <div className="book-wrap">
                        <img src={topBook3} alt=""/>
                    </div>
                    <div className="book-detail">
                        <h4>Book title</h4>
                        <span className="author">by <i>Ameer Hamza</i></span>
                        <div className="price">
                            <span className="current-price">$ 16.79</span>
                            <span className="ex-price">$ 23.24</span>
                        </div>
                    </div>
                </div>
                <div className="items book">
                    <div className="book-wrap">
                        <img src={topBook4} alt=""/>
                    </div>
                    <div className="book-detail">
                        <h4>Book title</h4>
                        <span  className="author">by <i>Ameer Hamza</i></span>
                        <div className="price">
                            <span className="current-price">$ 16.79</span>
                            <span className="ex-price">$ 23.24</span>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        )
    }

}

export default TopSelling;