import React, { Component } from 'react';
import MenuSidebar from './MenuSidebar';
import Content from './Content';
import Header from './Header';

class Dashboard extends Component {
    render() {
        return (
            <div id="wrapper">

                <MenuSidebar />
                <div id="content-wrapper" className="d-flex flex-column">
                    <div id="content">
                        <Header />
                        <Content />
                    </div>
                </div>


            </div>
        );
    }
}

export default Dashboard;