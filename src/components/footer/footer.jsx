import React, { Component } from 'react';
import './footer.scss';

class Footer extends Component{

    render(){
        return(

            <div id="footer-wrapper">
                <div className="footer-top">
                    <h3>Subscribe to newsletter</h3>
                    <div id="news-form">
                        <form>
                            <div className="letter">
                                <input type="email" name="email" id="email"/>
                                <button>Subscribe</button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="footer-bottom">
                    <div className="item">
                        <h4>Book</h4>
                        <button>English</button>
                        <button>$ -USD - US Dollar </button>
                    </div>
                    <div className="item">
                        <ul className="lists">
                            <li className="title">
                                Home
                            </li>
                            <li>
                                <a href="http://google.com" >Book</a>
                            </li>
                            <li>
                                <a href="http://google.px" >Book</a>
                            </li>
                            <li>
                                <a href="http://google.px" >Book</a>
                            </li>
                            <li>
                                <a href="http://google.px" >Book</a>
                            </li>
                        </ul>
                    </div>
                    <div className="item">
                        <ul className="lists">
                            <li className="title">
                                Shop by
                            </li>
                            <li>
                                <a href="http://google.px" >Book</a>
                            </li>
                            <li>
                                <a href="http://google.px" >Book</a>
                            </li>
                            <li>
                                <a href="http://google.px" >Book</a>
                            </li>
                            <li>
                                <a href="http://google.px" >Book</a>
                            </li>
                        </ul>
                    </div>
                    <div className="item">
                        <ul className="lists">
                            <li className="title">
                                Products
                            </li>
                            <li>
                                <a href="http://google.px" >Book</a>
                            </li>
                            <li>
                                <a href="http://google.px" >Book</a>
                            </li>
                            <li>
                                <a href="http://google.px" >Book</a>
                            </li>
                            <li>
                                <a href="http://google.px" >Book</a>
                            </li>
                        </ul>
                    </div>
                    <div className="item">
                        <ul className="lists">
                            <li className="title">
                                Support
                            </li>
                            <li>
                                <a href="http://google.px" >Book</a>
                            </li>
                            <li>
                                <a href="http://google.px" >Book</a>
                            </li>
                            <li>
                                <a href="http://google.px" >Book</a>
                            </li>
                            <li>
                                <a href="http://google.px" >Book</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }

}

export default Footer;