import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Admin from './components/backend/Admin/admin';
import {BrowserRouter as Router}from 'react-router-dom'; 
import StudentRoutes from '../src/components/backend/Students/StudentRoutes'
import AdminRoute from './components/backend/Admin/AdminRoute';
class App extends Component {
  render() {
    return (
   <Router>
      {/* <div className="App">
      <Admin />
      </div> */} 
      <div>
      {AdminRoute}
      </div>
      </Router>
      
    );
  }
}

export default App;
