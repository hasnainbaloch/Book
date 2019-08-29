import React from 'react';
import './Button.scss';

const Button = (props) => <button className={props.btnClass} onClick={props.btnClicked}>{props.children}</button>

export default Button;