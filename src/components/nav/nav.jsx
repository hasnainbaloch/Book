import React , { Component } from 'react';
import "./nav.scss";

import Button from '../../UI/Button/Button';

import profilePhoto from "../../assets/photos/user-dp.png";

class Nav extends Component {

    componentWillMount(){
        
        let prevScrollpos = window.pageYOffset;
        window.onscroll = () => {
            let currentScrollPos = window.pageYOffset;
    
            if (prevScrollpos > currentScrollPos) {
                document.getElementById("nav-wrapper").style.top = "0";
            } else {
                document.getElementById("nav-wrapper").style.top = "-50px";
            }
            prevScrollpos = currentScrollPos;
        }
    }


    render(){
        return(
            <div id="nav-wrapper">
                <div className="side-menu">
                    <div className="side-menu-icon">
                        {/* <img src={menuicon} alt="icon"/> */}
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <ul id="nav-menu-left">
                        <li>Collections</li>
                        <li>Top selling</li>
                        <li>
                            <i className="fas fa-search"></i>
                        </li>
                    </ul>
                </div>
                <div className="logo">
                    <h3>BOOK</h3>
                </div>
                <div className="right-menu">
                    <ul id="nav-menu-right">
                        <li>
                            <div className="user">
                                <img src={profilePhoto} alt="u"/>
                            </div>
                        </li>
                        <li>
                            <div className="user-detail">
                                <Button btnClass="create-account-btn">Create Account</Button>
                            </div>
                        </li>
                        <li>
                            <div className="cart-icon">
                                <i className="fas fa-shoping"></i>
                                <span className="alerts"></span>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Nav;