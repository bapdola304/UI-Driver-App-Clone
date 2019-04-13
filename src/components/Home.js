import React, { Component } from 'react';
import Dashboard from './Dashboard';
import Login from './Login'; 
class Home extends Component {
   
    render() {
        if(localStorage.getItem('token')){
            var token = `Token ${localStorage.getItem('token')}`;
        }
        return (
            <div>
                {token ? <Dashboard /> : <Login />}
            </div>
        );
    }
}

export default Home;