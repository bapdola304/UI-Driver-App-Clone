import React, { Component } from 'react';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import axios from 'axios';
import { Link,withRouter } from "react-router-dom";
class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            un : '',
            pw : ''
        }
        
    }

    handleChange = (event) =>{
        this.setState({
            [event.target.name] : event.target.value
        });
    }
    handleSubmit = (event) =>{
        let { un, pw } = this.state;
        event.preventDefault();
        console.log(this.state)
        axios({
            method:'post',
            url:'/user/login',
            data : {un, pw}
          })
            .then( res => {
                console.log(res)
                if(res.data.status){
                    localStorage.setItem('token', res.data.Infor.token)
                    this.props.history.push('/')
                }              
        }).catch(err =>{
            this.props.history.push('/login')
        });
    }
    
    render() {
        return (
            <div className="wrap-form">
                <form onSubmit = {this.handleSubmit}>
                    <h1>Login</h1>
                    <div className="input-form" >
                        <TextField
                            id="filled-name-input"
                            label="Username"
                            className=""
                            type="text"
                            name="un"
                            autoComplete="text"
                            margin="normal"
                            variant="filled"
                            onChange = {this.handleChange}
                            value = {this.state.un}
                        />
                    </div>
                    <div className="input-form" >
                        <TextField
                            id="filled-password-input"
                            label="Password"
                            className=""
                            name="pw"
                            type="password"
                            autoComplete="current-password"
                            margin="normal"
                            variant="filled"
                            onChange = {this.handleChange}
                            value = {this.state.pw}
                        />
                    </div>
                    <Button variant="contained" color="primary" className="button-register" type="submit">
                        Submit
                    </Button>
                    <Link to="register">
                        <p>Register</p>
                    </Link>
                </form>
            </div>
        );
    }
}

export default withRouter(Login);