import React, { Component } from 'react';
import MenuSidebar from './MenuSidebar';
import Header from './Header';
import axios from 'axios';
import { withRouter, Route } from "react-router-dom";
import { actFetchFiles } from "../actions/index";
import { connect } from "react-redux";

class Dashboard extends Component {

    getToken() {
        if (localStorage.getItem('token')) {
            var token = `Token ${localStorage.getItem('token')}`;
            console.log(token)
        }
        axios.defaults.headers.common['Authorization'] = token;
    }
    componentWillMount() {
        this.getToken();
        this.props.actFetchFiles()   
    }
    onLogout = () => {
        localStorage.removeItem('token');
        this.componentWillMount();
    }

    RouteWithSubRoutes = (route) => {
        return (
            <Route
                exact={route.exact}
                path={route.path}
                component={(props) => (
                    // pass the sub-routes down to keep nesting
                    <route.component {...props} 
                        routes={route.routes} 
                        userInfor={this.props.userInfor.userInfor}
                     />
                )}
            />
        );
    }


    render() {
        return (
            <div id="wrapper">

                <MenuSidebar  onLogout={this.onLogout}/>
                <div id="content-wrapper" className="d-flex flex-column">
                    <div id="content">
                        <Header />

                        {this.props.routes.map((route, i) => (
                            <this.RouteWithSubRoutes key={i} {...route} />
                        ))}

                    </div>
                </div>


            </div>
        );
    }
}

const mapStateToProps = state =>{
    return {
        userInfor : state.listFile
    }
}
// const mapDispatchToProps = (dispatch, props) => {
//     return {
//         actFetchFiles : () =>{
//             dispatch(actFetchFiles())
//         },
//         deleteFile : (id) =>{
//             dispatch(deleteFile(id))
//         }
//     };
//   };
export default connect(mapStateToProps, {actFetchFiles})(withRouter(Dashboard));