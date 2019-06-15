import React, { Component } from 'react';
import './register.css';
import { Form, Icon, Input, Button, message } from "antd";
import axios from 'axios';
// import TextField from '@material-ui/core/TextField';
// import Button from '@material-ui/core/Button';
import { Link } from "react-router-dom";

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            un: '',
            pw: '',
            pw2: '',
            unError: "",
            pwError: "",
            pw2Error: ""
        }

    }


    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }
    handleSubmit = (e) => {
        let { un, pw, pw2 } = this.state;
        e.preventDefault();

        if(pw === '' || un === '' || pw2 === ''){
            return message.error('Please fillout form!');
        }
        if(pw2 !== pw){
            return message.error('Confirm password fail!');
        }
            //   clear form
            axios({
                method: 'post',
                url: '/user',
                data: { un, pw }
            })
                .then(res => {
                    if(res.data.status){
                        this.setState({
                            un: '',
                            pw: '',
                            pw2: '',
                        });
                        return message.success(res.data.message, 4);
                    }
                    return message.error(res.data.message);
                });
        



    }


    render() {
        return (
            <Form onSubmit={this.handleSubmit} className="register-form">
                <Form.Item>

                    <Input
                        name="un"
                        value = {this.state.un}
                        onChange={this.handleChange}
                        prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
                        placeholder="Username"
                    />

                </Form.Item>
                <Form.Item>

                    <Input
                        name="pw"
                        value = {this.state.pw}
                        onChange={this.handleChange}
                        prefix={<Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />}
                        type="password"
                        placeholder="Password"
                    />

                </Form.Item>
                <Form.Item>

                    <Input
                        name="pw2"
                        value = {this.state.pw2}
                        onChange={this.handleChange}
                        prefix={<Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />}
                        type="password"
                        placeholder="Confirm Password"
                    />

                </Form.Item>
                <Form.Item>
                    <Button
                        type="primary"
                        htmlType="submit"
                        className="login-form-button"
                        loading={this.state.loading}
                    >
                        {!this.state.loading ? <Icon type="login" /> : ""}
                        Submit
          </Button>
                    Or <Link to="/login">Login now!</Link>
                </Form.Item>
            </Form>
        );
    }
}

export default Register;