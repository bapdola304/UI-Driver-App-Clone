import React, { Component } from 'react';
import './App.css';
import Register from './components/Register';
import Login from './components/Login'; 
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './components/Home';
class App extends Component {
  render() {
    return (
      <Router>
            <div className="App">

            
                <Route exact path="/" component={Home}/>           
               
             
             
              </div>
       </Router>
    );
  }
}

export default App;
