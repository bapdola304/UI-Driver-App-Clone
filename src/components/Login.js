import React, { Component } from 'react';

import TextField from '@material-ui/core/TextField';
// import Button from '@material-ui/core/Button';
import axios from 'axios';
import { Link, withRouter } from "react-router-dom";
import 'antd/dist/antd.css';
import { Spin, message } from "antd";

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            un: '',
            pw: '',
            name : '',
            showForm: false,
            loading: false
        }

    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }
    handleSubmit = (event) => {
        let { un, pw } = this.state;
        event.preventDefault();
        console.log(this.state)
        this.setState({
            loading: true
        });
        axios({
            method: 'post',
            url: '/user/login',
            data: { un, pw }
        }).then(res => {
            console.log(res)
            if (res.data.status === true) {
                localStorage.setItem('token', res.data.Infor.token)
                this.props.history.push('/')
            } else {
                this.setState({
                    loading: false
                });
                message.error('UserName or Password Wrong!');
            }
        }).catch(err => {
            console.log('sai');

            this.setState({
                loading: false
            });
            // this.props.history.push('/login')
        });
    }
    showFormSignUp = () => {
        console.log('aaa');

        this.setState({
            showForm: !this.state.showForm
        }, () => console.log(this.state.showForm)
        );
    }
    handleSubmitSignUp = (e) =>{
        let {un, pw} = this.state;
        e.preventDefault();
        axios({
            method: 'post',
            url: '/user',
            data: { un, pw }
        }).then(res => {
            console.log(res)
            if(res.data.status){
                this.setState({
                    un : '',
                    pw : '',
                    name : ''
                });
                setTimeout(() =>{
                   this.setState({
                    showForm : !this.state.showForm
                   });
                },2000)
               return  message.success('Sign Up Success!');
            }
            message.error(res.data.message);
            
        }).catch(err => {
            console.log('sai');

            this.setState({
                loading: false
            });
            // this.props.history.push('/login')
        });
        
    }
    handleChangeSignUp = (e) =>{
        this.setState({
            [e.target.name] : e.target.value
        });
    }

    render() {
        return (
            // <div classNameName="wrap-form">
            //     <form onSubmit = {this.handleSubmit}>
            //         <h1>Login</h1>
            //         <div classNameName="input-form" >
            //             <TextField
            //                 id="filled-name-input"
            //                 label="Username"
            //                 classNameName=""
            //                 type="text"
            //                 name="un"
            //                 autoComplete="text"
            //                 margin="normal"
            //                 variant="filled"
            //                 onChange = {this.handleChange}
            //                 value = {this.state.un}
            //             />
            //         </div>
            //         <div classNameName="input-form" >
            //             <TextField
            //                 id="filled-password-input"
            //                 label="Password"
            //                 classNameName=""
            //                 name="pw"
            //                 type="password"
            //                 autoComplete="current-password"
            //                 margin="normal"
            //                 variant="filled"
            //                 onChange = {this.handleChange}
            //                 value = {this.state.pw}
            //             />
            //         </div>
            //         <Button variant="contained" color="primary" classNameName="button-register" type="submit">
            //             Submit
            //         </Button>
            //         <Link to="register">
            //             <p>Register</p>
            //         </Link>
            //     </form>
            // </div>
            <div className={this.state.showForm ? 'container right-panel-active' : 'container'} id="container" style={{ marginTop: '60px' }}>
                <div className="form-container sign-up-container">
                    <form onSubmit={this.handleSubmitSignUp}>
                        <h1>Create Account</h1>
                        <div className="social-container">
                            <a href="#" className="social"><i className="fab fa-facebook-f"></i></a>
                            <a href="#" className="social"><i className="fab fa-google-plus-g"></i></a>
                            <a href="#" className="social"><i className="fab fa-linkedin-in"></i></a>
                        </div>
                        <span>or use your email for registration</span>
                        <input type="text" placeholder="Name" name="name" onChange={this.handleChangeSignUp} value={this.state.name}/>
                        <input type="text" placeholder="UserName" name="un" onChange={this.handleChangeSignUp} value={this.state.un}/>
                        <input type="password" placeholder="Password" name="pw" onChange={this.handleChangeSignUp} value={this.state.pw} />
                        <button>Sign Up {this.state.loading ? <Spin /> : ""}</button>
                    </form>
                </div>
                <div className="form-container sign-in-container">
                    <form onSubmit={this.handleSubmit}>
                        <h1>Sign in</h1>
                        <div className="social-container">
                            <a href="#" className="social"><i className="fab fa-facebook-f"></i></a>
                            <a href="#" className="social"><i className="fab fa-google-plus-g"></i></a>
                            <a href="#" className="social"><i className="fab fa-linkedin-in"></i></a>
                        </div>
                        <span>or use your account</span>
                        <input type="text" placeholder="UserName" name="un" onChange={this.handleChange} />
                        <input type="password" placeholder="Password" name="pw" onChange={this.handleChange} />
                        <a href="#">Forgot your password?</a>
                        <button>Sign In {this.state.loading ? <Spin /> : ""}</button>

                    </form>
                </div>
                <div className="overlay-container">
                    <div className="overlay">
                        <div className="overlay-panel overlay-left">
                            <h1>Welcome Back!</h1>
                            <p>To keep connected with us please login with your personal info</p>
                            <button className="ghost" onClick={this.showFormSignUp}>Sign In</button>
                        </div>
                        <div className="overlay-panel overlay-right">
                            <h1>Hello, Friend!</h1>
                            <p>Enter your personal details and start journey with us</p>
                            <button className="ghost" onClick={this.showFormSignUp}>Sign Up</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(Login);