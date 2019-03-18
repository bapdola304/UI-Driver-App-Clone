import React, { Component } from 'react';
import ContentHead from './ContentHead';
import ContentItem from './ContentItem';

class Content extends Component {
    render() {
        return (
            <div className="container-fluid">

            <ContentHead />
    
            <div className="row">
                <ContentItem />
                <ContentItem />
                <ContentItem />
                <ContentItem />
                <ContentItem />
                <ContentItem />
                
        
             </div>
          </div>
        );
    }
}

export default Content;