import React, { Component } from 'react';
import './App.css';

// React Router packages
import { BrowserRouter, Route } from "react-router-dom";

// import components
import Login from './components/app_registration/registration';
import Landing from './components/Landing/landing';


class App extends Component {

  constructor(){
    super();
    this.state = {}
  }

  
  render(){

    return ( 
      <BrowserRouter>
            <Route path="/" exact component={Login} />
            <Route path="/landing" exact component={Landing} />
      </BrowserRouter>   
    );

  }

}

export default App;
