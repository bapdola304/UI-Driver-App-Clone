import React, { Component } from 'react';

// import TextField from '@material-ui/core/TextField';
// import Button from '@material-ui/core/Button';
import axios from 'axios';
import { Link, withRouter } from "react-router-dom";
import { message } from "antd";
import { Form, Icon, Input, Button, Checkbox } from "antd";
import { loginUser } from "../actions/authLogin";
import { connect } from "react-redux";
class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            un: '',
            pw: '',
            name: '',
            showForm: false,
            loading: false
        }

    }

    handleSubmit = e => {
        e.preventDefault();
        let userData = {
            username : this.state.un,
            password : this.state.pw
        }
        this.setState({
            loading: true
        });
        this.props.loginUser(userData)
    };
    componentWillReceiveProps(nextProps) {
        console.log(nextProps);

        if (nextProps.auth.isAuthenticated) {
            this.setState({
                loading: false
            });
            this.props.history.push('/db')
        } else {
            message.error('Username or Password Wrong!');
            this.setState({
                loading: false
            })
        }
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })

    }
    handleSubmit2 = (event) => {
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
                this.props.history.push('/db')
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



    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <Form onSubmit={this.handleSubmit} className="login-form">
                <Form.Item>

                    <Input
                        name="un"
                        onChange={this.handleChange}
                        prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
                        placeholder="Username"
                    />

                </Form.Item>
                <Form.Item>

                    <Input
                        name="pw"
                        onChange={this.handleChange}
                        prefix={<Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />}
                        type="password"
                        placeholder="Password"
                    />

                </Form.Item>
                <Form.Item>
                    {getFieldDecorator("remember", {
                        valuePropName: "checked",
                        initialValue: true
                    })(<Checkbox>Remember me</Checkbox>)}
                    <a className="login-form-forgot" href="">
                        Forgot password
          </a>
                    <Button
                        type="primary"
                        htmlType="submit"
                        className="login-form-button"
                        loading={this.state.loading}
                    >
                        {!this.state.loading ? <Icon type="login" /> : ""}
                        Log in
          </Button>
                    Or <Link to="/register">register now!</Link>
                </Form.Item>
            </Form>
        );
    }
    // return (
    //     <div className="wrap-form">
    //         <form onSubmit = {this.handleSubmit}>
    //             <h1>Login</h1>
    //             <div className="input-form" >
    //                 <TextField
    //                     id="filled-name-input"
    //                     label="Username"
    //                     className=""
    //                     type="text"
    //                     name="un"
    //                     autoComplete="text"
    //                     margin="normal"
    //                     variant="filled"
    //                     onChange = {this.handleChange}
    //                     value = {this.state.un}
    //                 />
    //             </div>
    //             <div className="input-form" >
    //                 <TextField
    //                     id="filled-password-input"
    //                     label="Password"
    //                     className=""
    //                     name="pw"
    //                     type="password"
    //                     autoComplete="current-password"
    //                     margin="normal"
    //                     variant="filled"
    //                     onChange = {this.handleChange}
    //                     value = {this.state.pw}
    //                 />
    //             </div>
    //             <Button variant="contained" color="primary" className="button-register" type="submit">
    //                 Submit
    //             </Button>
    //             <Link to="register">
    //                 <p>Register</p>
    //             </Link>
    //         </form>
    //     </div>
    // );
}
const WrappedNormalLoginForm = Form.create({ name: "normal_login" })(
    Login
);
const mapStateToProps = state => {
    return {
        auth: state.authLogin
    }
}
export default connect(mapStateToProps, { loginUser })(withRouter(WrappedNormalLoginForm));