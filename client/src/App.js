import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Admin from './components/backend/Admin/admin';
import {BrowserRouter as Router}from 'react-router-dom'; 
import routes from '../src/components/backend/Students/StudentRoutes'
class App extends Component {
  render() {
    return (
      <Router>
      {/* <div className="App">
      <Admin />
      </div> */}
      {routes}
      </Router>
    );
  }
}

export default App;
