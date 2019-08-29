import React, { Component } from 'react';
import './registration.scss';
import Loader from '../../UI/Loader';
import logo from '../../assets/photos/logo.png';
// React Router packages
import { withRouter } from 'react-router-dom';
// Axios for HTTP request
import axios from 'axios'; 

class Login extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            isLoginForm: true,
            isSignupForm: false,
            passType: 'password',
            userId: '',
            userPassword: '',
            userEmail:'',
            userName:'',
            loading: false
        };
    }

    componentWillUnmount() {
        localStorage.loginStatus = false;
    }
    
    togggle = () => {
        this.setState({
            isLoginForm: !this.state.isLoginForm,
            isSignupForm: !this.state.isSignupForm,
        });
    }
    
    showPassword = () => {
        this.setState({
            passType: 'text'
        });
    }
    
    hidePassword = () => {
        this.setState({
            passType: 'password'
        });
    }

    userId = (event) => {

        const userID = event.target.value;  
        this.setState({
            userId: userID
        })
    }

    userPass = (event) => {

        const userPassword = event.target.value;  
        this.setState({
            userPassword: userPassword
        })
    }
    
    userEmail = (event) => {

        const userEmail = event.target.value;  
        this.setState({
            userEmail: userEmail
        })
    }

    userName = (event) => {

        const userName = event.target.value;  
        this.setState({
            userName: userName
        })
    }
    
    loginUser = () => {
        this.setState({
            loading: true
        });
        const data = {
            userId : this.state.userId,
            userPassword : this.state.userPassword,

        }
        axios.post('http://localhost:4000/login', data)
        .then(response => {
            console.log(response.data);
            if(response.data.status === true){
                this.setState({
                    loading: false
                });
                localStorage.loginStatus = true;
                this.props.history.push('/landing');
            } else {
                this.setState({
                    loading: false
                });
            }
        })
        .catch(error => {
            console.log(error);
        });
    }

    signupUser = () => {
        alert('HI');
        this.setState({
            loading: true
        });
        const data = {
            userId : this.state.userId,
            userPassword : this.state.userPassword,
            userName : this.state.userName,
            userEmail : this.state.userEmail,

        }
        axios.post('http://localhost:4000/signup', data)
        .then(response => {
            console.log(response.data);
            if(response.data.status === true){
                this.setState({
                    loading: false
                });
                // this.props.history.push('/landing');
            } else {
                this.setState({
                    loading: false
                });
            }
        })
        .catch(error => {
            console.log(error);
        });
    }

    // componentDidMount() {
        
    // }
    
    render() {
        return(
            <div id='login-wrapper'>
                {(this.state.loading) ? <Loader/> : null}
                <div className="user-form" >
                    <nav>
                        <div id="logo">
                            <img src={logo} alt="LOGO" />
                        </div>
                    </nav>

                    {/* Login Form */}
                    <form action="#" hidden={this.state.isSignupForm}>
                        <div className="form-group">
                            <label htmlFor="">User ID</label>
                            <input type="text" name="" id="" value={this.state.userId} className="form-control" onChange={this.userId}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="">Password</label>
                            <input type={this.state.passType} value={this.state.userPassword} name="" id="" className="form-control" onChange={this.userPass}/>
                            <span className="showPass">
                            <i className="far fa-eye"  onClick={() => this.showPassword()} hidden={this.state.passType === 'text'}></i>
                            <i className="far fa-eye-slash"  onClick={() => this.hidePassword()} hidden={this.state.passType === 'password'}></i>
                            </span>
                        </div>
                        <div id="user-btn">
                            <button className="form-btn btn btn-dark btn-block" onClick={this.loginUser}>LOGIN</button>
                            <span>Forgot Password ?</span>
                        </div>
                    </form>

                    {/* Signup Form  */}
                    <form action="#"  hidden={this.state.isLoginForm}>
                        <div className="form-group">
                            <label htmlFor="">User Name</label>
                            <input type="text" name="" id="" className="form-control" value={this.state.userName} onChange={this.userName}  />
                        </div>
                        <div className="form-group">
                            <label htmlFor="">User Email</label>
                            <input type="email" name="" id="" className="form-control" value={this.state.userEmail} onChange={this.userEmail}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="">UserID</label>
                            <input type="text" name="" id="" className="form-control" value={this.state.userId} onChange={this.userId}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="">Password</label>
                            <input type={this.state.passType} name="" id="" className="form-control" value={this.state.userPassword} onChange={this.userPass}/>
                            <span className="showPass">
                            <i className="far fa-eye"  onClick={() => this.showPassword()} hidden={this.state.passType === 'text'}></i>
                            <i className="far fa-eye-slash"  onClick={() => this.hidePassword()} hidden={this.state.passType === 'password'}></i>
                            </span>
                        </div>
                        <div id="user-btn">
                            <button className="form-btn btn btn-dark btn-block" onClick={() => this.signupUser()}>REGISTER</button>
                            <span onClick={() => this.togggle()}>Already have an account ?</span>
                        </div>
                    </form>
                </div>
                <div className="login-wrapper">
                    <h1>Books</h1>
                    <hr/>
                    <p>Tenderness and kindness are not signs of weakness and despair, but manifestations of strength and resolution.
                        <br/> <strong> " Kahlil Gibran " </strong>
                    </p>
                </div>

                <div id="form-transition"  onClick={() => this.togggle()} hidden={this.state.isSignupForm}>
                    <i className="fas fa-angle-right"></i>
                </div>
            </div>
        );
    }
}

export default withRouter(Login);