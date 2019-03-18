import React, { Component } from 'react';
import { FilePond, registerPlugin } from "react-filepond";

import "filepond/dist/filepond.min.css";
import Button from '@material-ui/core/Button';
class MenuSidebar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            files : []
        }
    }
    onGetFile = (files) =>{
        // Set currently active file objects to this.state
        this.setState({
            files: files.map(file => file.file)
        }, () => console.log(this.state));
    }
    render() {
        return (

            <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar" >


                <a className="sidebar-brand d-flex align-items-center justify-content-center">
                    <div className="sidebar-brand-icon rotate-n-15">
                        <i className="fas fa-laugh-wink"></i>
                    </div>
                    <div className="sidebar-brand-text mx-3">SB Admin <sup>2</sup></div>
                </a>


                <hr className="sidebar-divider my-0" />


                <li className="nav-item active">
                    <a className="nav-link">
                        <i className="fas fa-fw fa-tachometer-alt"></i>
                        <span>Dashboard</span></a>
                </li>


                <hr className="sidebar-divider" />
                <div className="sidebar-heading" style = {{'color' : 'white', 'font-size' : '15px',
                    'margin-bottom' : '10px'}}>
                    Upload File
                </div>
                <FilePond
                    ref={ref => (this.pond = ref)}
                    files={this.state.files}
                    allowMultiple={true}
                    maxFiles={5}
                    onupdatefiles={(fileItems) => this.onGetFile(fileItems)}
                />
                 <Button variant="contained" color="default" className="button-upload">
                        Upload
                </Button>
                <hr className="sidebar-divider" />
                <div className="sidebar-heading">
                    Interface
                        </div>


                <li className="nav-item">
                    <a className="nav-link collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="true"
                        aria-controls="collapseTwo">
                        <i className="fas fa-fw fa-cog"></i>
                        <span>Components</span>
                    </a>
                </li>


                <li className="nav-item">
                    <a className="nav-link collapsed" data-toggle="collapse" data-target="#collapseUtilities"
                        aria-expanded="true" aria-controls="collapseUtilities">
                        <i className="fas fa-fw fa-wrench"></i>
                        <span>Utilities</span>
                    </a>
                </li>


                <hr className="sidebar-divider" />





                <hr className="sidebar-divider d-none d-md-block" />


                <div className="text-center d-none d-md-inline">
                    <button className="rounded-circle border-0" id="sidebarToggle"></button>
                </div>

            </ul>
        );
    }
}

export default MenuSidebar;