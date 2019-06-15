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
        console.log(this.props.arrfile);
        
     if(this.props.arrfile.arrFiles.length > 0){
         console.log('falsae');
         
        this.setState({
            loading : false
        });
     }     
    }
    componentDidUpdate(props){
        console.log(props);
        
    }
    render() {
        let {arrfile} = this.props;
        console.log(arrfile.arrFiles);
        
        return (
            <Spin size="large" spinning={this.state.loading}>
                <div className="container-fluid">

                <ContentHead countItem = {arrfile.arrFiles} userInfor = {this.props.userInfor} />
        
                <div className="row" style ={{height : '480px', overflow : 'auto'}}>
                    {arrfile.arrFiles.map((file,index) =>
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
        arrfile : state.listFile
    }
}
export default connect(mapStateToProps, null)(Content);