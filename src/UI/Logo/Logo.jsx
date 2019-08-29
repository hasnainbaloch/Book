import React from 'react';
import './Logo.scss';

import logo from '../../assets/photos/logo.png';

const Logo = (props) => (

    <div className="logo-wrapper">
        <img src={logo} alt="logo" className={props.logoClass}/>
    </div>
);


export default Logo;