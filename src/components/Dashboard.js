import React, { Component } from 'react';
import MenuSidebar from './MenuSidebar';
import Content from './Content';
import Header from './Header';
import axios from 'axios';
import {withRouter } from "react-router-dom";

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            files : [],
            userinfor : ''
        }
    }
    
    getToken(){
        if(localStorage.getItem('token')){
            var token = `Token ${localStorage.getItem('token')}`;
            console.log(token)
        }
        axios.defaults.headers.common['Authorization'] = token;
    }
    componentWillMount(){
        this.getToken();
        
        axios.get('/file')
        .then(res => {
            console.log(res.data)
            if(!res.data.status){
                this.props.history.push('/')
            }
            this.setState({
                files : res.data.data,
                userinfor : res.data.userinfor.infor
            }, () => console.log(this.state.userinfor));
        })
        .catch(err => console.log(err));
    }
    refresPage = () => {
        console.log('res')
        this.componentWillMount();
    }
    onLogout = () =>{
        localStorage.removeItem('token');
        this.componentWillMount();
    }
    onDeleteFile = (id) =>{
        axios.delete('/file/deleteFile/' + id)
            .then(rs =>{
                console.log(rs)
                this.componentWillMount();
            })
            .catch(err => console.log(err))
    }
    onDownloadFile = (id) =>{
        console.log(id)
        axios.get('/file/downloadFile/' + id)
        .then(rs =>{
            console.log(rs)
            // this.componentWillMount();
            // fileDownload(rs.data,'nai.jpg');
        })
        // .catch(err => console.log(err))
        // FileSaver.saveAs("https://httpbin.org/image", "image.jpg");
        // download('http://unicorn.com/foo.jpg')
    }

    render() {
        return (
            <div id="wrapper">

                <MenuSidebar refresPage = {this.refresPage} onLogout = {this.onLogout} userInfor = {this.state.userinfor}/>
                <div id="content-wrapper" className="d-flex flex-column">
                    <div id="content">
                        <Header />
                        <Content 
                            userInfor = {this.state.userinfor}
                            listFiles = {this.state.files}
                            onDeleteFile = {this.onDeleteFile}
                            onDownloadFile = {this.onDownloadFile}
                         />
                        
                        {/* <RouterAuth
                            listFiles = {this.state.files}
                            onDeleteFile = {this.onDeleteFile}
                            onDownloadFile = {this.onDownloadFile}
                         /> */}
                        
                    </div>
                </div>


            </div>
        );
    }
}

export default withRouter(Dashboard);