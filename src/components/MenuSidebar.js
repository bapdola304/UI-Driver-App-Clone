import React, { Component } from 'react';
import { FilePond } from "react-filepond";

import axios from 'axios'
import "filepond/dist/filepond.min.css";
import Button from '@material-ui/core/Button';
import SweetAlert from 'react-bootstrap-sweetalert';
import { Link } from 'react-router-dom'
import { connect } from "react-redux";
import { addFile } from "../actions/index";

class MenuSidebar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            files: [],
            showSuccess: false,
            user: null
        }
    }
    componentWillReceiveProps(props) {
        this.setState({
            user: props.userInfor.username
        })
    }
    onGetFile = (files) => {
        this.setState({
            files: files.map(file => file.file)
        });
    }

    onUpload = () => {
        let { files } = this.state;
        const dataFile = new FormData();
        for (const file of files) {
            dataFile.append('files', file, file.name);
        }
        console.log(dataFile);

        this.props.addFile(dataFile);
        this.setState({
            files: [],
            showSuccess: true
        });
    }
    onLogout = () => {
        console.log('logout');
        this.props.onLogout();

    }
    onConfirm = () => {
        this.setState({
            showSuccess: false
        });
    }
    render() {
        return (
            <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar" >
                <a className="sidebar-brand d-flex align-items-center justify-content-center" href="#">
                    <div className="sidebar-brand-icon rotate-n-15">
                        <i className="fas fa-box-open"></i>
                    </div>
                    <div className="sidebar-brand-text mx-3">Box Box <sup>2</sup></div>
                </a>
                <hr className="sidebar-divider my-0" />


                <li className="nav-item active">
                    <a className="nav-link">
                        <i className="fas fa-user-secret fa-2x text-gray-300"></i>
                        <span>Hello!  {this.state.user}</span></a>
                </li>


                <hr className="sidebar-divider" />
                <div className="sidebar-heading" style={{
                    'color': 'white', 'fontSize': '15px',
                    'marginBottom': '10px'
                }}>
                    Upload File
                </div>
                <FilePond
                    ref={ref => (this.pond = ref)}
                    files={this.state.files}
                    allowMultiple={true}
                    maxFiles={5}
                    onupdatefiles={(fileItems) => this.onGetFile(fileItems)}
                />
                <Button variant="contained" color="default" className="button-upload" onClick={this.onUpload}>
                    Upload
                </Button>
                <hr className="sidebar-divider" />
                <div className="sidebar-heading">
                    Interface
                        </div>


                <li className="nav-item">
                    <Link to='/db' className="nav-link collapsed">

                        <i className="fas fa-fw fa-cog"></i>
                        <span>Dashboard</span>

                    </Link>
                </li>


                <li className="nav-item">
                    <Link to='/db/user' className="nav-link collapsed">

                        <i className="fas fa-fw fa-wrench"></i>
                        <span>User Manager</span>

                    </Link>
                </li>
                <li className="nav-item" onClick={this.onLogout}>
                    <Link className="nav-link collapsed" to=''>

                        <i className="fas fa-sign-out-alt"></i>
                        <span>Logout</span>
                    </Link>

                </li>

                <hr className="sidebar-divider" />
                <hr className="sidebar-divider d-none d-md-block" />
                <div className="text-center d-none d-md-inline">
                    <button className="rounded-circle border-0" id="sidebarToggle"></button>
                </div>
                <SweetAlert
                    success
                    title="Upload Succsess!"
                    onConfirm={this.onConfirm}
                    show={this.state.showSuccess}
                />
            </ul>
        );
    }
}
const mapStateToProps = state => {
    return {
        userInfor: state.listFile.userInfor
    }
}
export default connect(mapStateToProps, { addFile })(MenuSidebar);