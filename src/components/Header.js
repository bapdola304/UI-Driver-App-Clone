import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">


                <button id="sidebarToggleTop" className="btn btn-link d-md-none rounded-circle mr-3">
                    <i className="fa fa-bars"></i>
                </button>


                <form className="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
                    <div className="input-group">
                        <input type="text" className="form-control bg-light border-0 small" placeholder="Search for..."
                            aria-label="Search" aria-describedby="basic-addon2" />
                        {/* <div className="input-group-append">
                            <button className="btn btn-primary" type="button">
                                <i className="fas fa-search fa-sm"></i>
                            </button>
                        </div> */}
                    </div>
                </form>


                <ul className="navbar-nav ml-auto">


                    <li className="nav-item dropdown no-arrow d-sm-none" />
                    <p className="nav-link dropdown-toggle" id="searchDropdown" role="button" data-toggle="dropdown"
                        aria-haspopup="true" aria-expanded="false">
                        <i className="fas fa-search fa-fw"></i>
                    </p>


                    <li className="nav-item dropdown no-arrow mx-1" />
                    <p className="nav-link dropdown-toggle" id="alertsDropdown" role="button" data-toggle="dropdown"
                        aria-haspopup="true" aria-expanded="false">
                        <i className="fas fa-bell fa-fw"></i>

                        <span className="badge badge-danger badge-counter">3+</span>
                    </p>


                    <li className="nav-item dropdown no-arrow mx-1" />
                    <p className="nav-link dropdown-toggle" id="messagesDropdown" role="button" data-toggle="dropdown"
                        aria-haspopup="true" aria-expanded="false">
                        <i className="fas fa-envelope fa-fw"></i>

                        <span className="badge badge-danger badge-counter">7</span>
                    </p>


                    <div className="topbar-divider d-none d-sm-block"></div>




                </ul>

            </nav>
        );
    }
}

export default Header;