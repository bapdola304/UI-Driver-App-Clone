import React, { Component } from 'react';
import './register.css';

import axios from 'axios';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Link } from "react-router-dom";

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            un : '',
            pw : '',
            pw2 : '',
            unError: "",
            pwError: "",
            pw2Error: ""
        }
        
    }

    validate = () => {
        let isError = false;
        const errors = {
          unError: "",
          pwError: "",
          pw2Error: ""
        };
        if (this.state.un === '') {
            isError = true;
            errors.unError = "Username not null";
          }
          if (this.state.pw === '') {
            isError = true;
            errors.pwError = "Password not null";
          }
        //   if (this.state.pw2 === '') {
        //     isError = true;
        //     errors.pw2Error = "Password not null";
        //   }
        // if (this.state.un.length < 5) {
        //   isError = true;
        //   errors.usernameError = "Username > 5 characters";
        // }
    
        // if (this.state.pw.length < 5) {
        //     isError = true;
        //     errors.pwError = "Password > 5 characters";
        // }

        if (this.state.pw !== this.state.pw2) {
            isError = true;
            errors.pw2Error = "Confirm Password Fail";
        }
      
    
        this.setState({
          ...this.state,
          ...errors
        });
    
        return isError;
      };

    handleChange= (e) =>{
        this.setState({
            [e.target.name] : e.target.value
        });
    }
    handleSubmit = (e) =>{
        let { un, pw } = this.state;
        e.preventDefault();
        const err = this.validate();
        if (!err) {
        //   clear form
          this.setState({
            un : '',
            pw : '',
            pw2 : '',
            unError: "",
            pwError: "",
            pw2Error: ""
          });
          axios({
            method:'post',
            url:'/user',
            data : {un, pw}
          })
            .then( res => {
                console.log(res)
        });
    }

 

}


    render() {
        return (
            <div className="wrap-form">
                <form onSubmit = {this.handleSubmit} autoComplete="on" >
                    <h1>Register</h1>
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
                            helperText={this.state.unError}
                        />
                    </div>
                    <div className="input-form" >
                        <TextField
                            
                            id="filled-password-input"
                            label="Password"
                            className=""
                            type="password"
                            name="pw"
                            autoComplete="current-password"
                            margin="normal"
                            variant="filled"
                            onChange = {this.handleChange}
                            value = {this.state.pw}
                            helperText={this.state.pwError}
                        />
                    </div>
                    <div className="input-form" >
                        <TextField
                            id="filled-password-input"
                            label="Confirm Password"
                            className=""
                            type="password"
                            name="pw2"
                            autoComplete="new-password"
                            margin="normal"
                            variant="filled"
                            onChange = {this.handleChange}
                            value = {this.state.pw2}
                            helperText={this.state.pw2Error}
                        />
                    </div>
                    <Button variant="contained" color="primary" className="button-register" type="submit">
                        Primary
                    </Button>
                    <Link to="login">
                        <p>Login</p>
                    </Link>
                </form>
            </div>
        );
    }
}

export default Register;