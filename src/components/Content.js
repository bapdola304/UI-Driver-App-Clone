import React, { Component } from 'react';
import ContentHead from './ContentHead';
import ContentItem from './ContentItem';

class Content extends Component {


 
    render() {
        let {listFiles} = this.props;
        return (
       
            <div className="container-fluid">

            <ContentHead countItem = {listFiles.length} userInfor = {this.props.userInfor} />
    
            <div className="row" style ={{height : '500px', overflow : 'auto'}}>
                {listFiles.map((file,index) =>
                     <ContentItem 
                        key = {index}
                        file = {file}
                        filetype = {file.type}
                        onDeleteFile = {this.props.onDeleteFile}
                        idFile = {file._id}
                        onDownloadFile = {this.props.onDownloadFile}
                     />  
                  
                )}  
             </div>
          </div>
        );
    }
}

export default Content;