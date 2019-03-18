import React, { Component } from 'react';
import './App.css';
import Register from './components/Register';
import Login from './components/Login'; 
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Dashboard from './components/Dashboard';
class App extends Component {
  render() {
    return (
      <BrowserRouter>
            <div className="App">
              <Switch>
                <Route exact path="/" component={Dashboard} />
                <Route path="/login" component={Login} />
                <Route path="/register" component={Register} />
              
              </Switch>
              </div>
          </BrowserRouter>
    );
  }
}

export default App;
