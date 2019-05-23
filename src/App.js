import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import 'antd/dist/antd.css';
import routes from './configrouter/config'

import { createStore, applyMiddleware } from "redux";
import myReducer from "./reducers/index";
import { Provider } from "react-redux";
import thunk from 'redux-thunk';
const store = createStore(myReducer, applyMiddleware(thunk));



class App extends Component {
  render() {
    console.log(routes);
    
    return (
      <Provider store = {store}>

      <Router>
            <div className="App">

            
                {/* <Route exact path="/" component={Dashboard}/>
                <Route path="/login" component={Login}/> 
                <Route path="/register" component={Register}/>          */}
               {routes.map((route, i) => (
                  <RouteWithSubRoutes key={i} {...route} />
             ))}
             
             
              </div>
       </Router>
       </Provider>
    );
  }
}
function RouteWithSubRoutes(route) {
  return (
    <Route
      exact = {route.exact}
      path={route.path}
      render={props => (
        // pass the sub-routes down to keep nesting
        <route.component {...props} routes={route.routes} />
      )}
    />
  );
}

export default App;
