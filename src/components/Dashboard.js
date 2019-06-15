import React, { Component } from 'react';
import MenuSidebar from './MenuSidebar';
import Header from './Header';
import { withRouter, Route } from "react-router-dom";
import { actFetchFiles } from "../actions/index";
import { connect } from "react-redux";
class Dashboard extends Component {

    componentWillMount() {
        if(!localStorage.getItem('token')){
            this.props.history.push('/login')
        }
        this.props.actFetchFiles(this.props.history)
    }

    componentWillReceiveProps(props){
        if(props.status == false){
            this.props.history.push('/login')
        }
        
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
                        userInfor={this.props.userInfor}
                    />
                )}
            />
        );
    }


    render() {
        console.log(this.props.userInfor);
        
        return (
            <div id="wrapper">

                <MenuSidebar uploadStatus = {this.props.status} user = {this.props.userInfor}/>
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

const mapStateToProps = state => {
    return {
        status : state.listFile.status,
        auth: state.authLogin,
        userInfor: state.listFile.userInfor
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
export default connect(mapStateToProps, { actFetchFiles })(withRouter(Dashboard));