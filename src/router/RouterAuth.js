import React, { Component } from 'react';
import {Router, Route, Link,Switch } from "react-router-dom";
import Login from '../components/Login';
import Register from '../components/Register';

class RouterAuth extends Component {
    render() {
        return (
           
                <div>
                <Route exact  path="/login" component={Login}/>
                <Route path="/register" component={Register}/>
                </div>
         
        );
    }
}

export default RouterAuth;