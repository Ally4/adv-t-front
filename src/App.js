import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login  from "../src/components/login";
import Landing from '../src/components/landing';
// import  AdminDashboard from '../components/dashboard/Dashboard'
import Dashboard from '../src/components/dashboard'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
    <Router>
      <Switch>
      <Route path="/" exact component={Landing} />
      <Route path="/login" exact component={Login} />      
      {/* <Route path="/admin" exact component={AdminDashboard} /> */}
      <Route path="/dashboard" exact component={Dashboard} />
      </Switch>
    </Router>
    </div>
  );
}

export default App;
