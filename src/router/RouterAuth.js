import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link,Switch } from "react-router-dom";
import UserManager from '../components/UserManager';
import Content from '../components/Content';

class RouterAuth extends Component {
    render() {
        return (
                <div>
                    <Route  path="/" component={() => <Content listFiles = {this.props.listFiles}  onDeleteFile = {this.props.onDeleteFile} />}/>
                    <Route  path="/user" component={UserManager}/>
                </div>
        );
    }
}

export default RouterAuth;