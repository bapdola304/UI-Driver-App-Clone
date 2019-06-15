import React, { Component } from 'react';
import {withRouter } from "react-router-dom";
class Redirect extends Component {
    componentWillMount(){
        this.props.history.push('/db')
    }
    render() {
      return (
          <h1>hello</h1>
      )
    }
}

export default (withRouter(Redirect));