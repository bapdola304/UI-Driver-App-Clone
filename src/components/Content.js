import React, { Component } from 'react';
import ContentHead from './ContentHead';
import ContentItem from './ContentItem';
import { Spin } from 'antd';
import { connect } from "react-redux";

class Content extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            loading : true
        }
    }

    componentDidMount(){
       setTimeout(() =>{
        this.setState({
            loading : false
        });
       },1000)
    }
 
    render() {
        let {arrfile} = this.props;
        console.log(arrfile);
        
        return (
            <Spin size="large" spinning={this.state.loading}>
                <div className="container-fluid">

                <ContentHead countItem = {arrfile.length} userInfor = {this.props.userInfor} />
        
                <div className="row" style ={{height : '480px', overflow : 'auto'}}>
                    {arrfile.map((file,index) =>
                        <ContentItem 
                            key = {index}
                            file = {file}
                            filetype = {file.type}
                            idFile = {file._id}
                        />  
                    
                    )}  
                </div>
            </div>
          </Spin>
        );
    }
}
const mapStateToProps = state =>{
    return {
        arrfile : state.listFile.arrFiles
    }
}
export default connect(mapStateToProps, null)(Content);