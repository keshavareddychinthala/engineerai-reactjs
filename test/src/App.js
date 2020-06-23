import React from 'react';
import {BrowserRouter as Router,Route,
  Redirect,Switch} from 'react-router-dom';
import './App.css';
import User from './components/User'
import Dashboard from './components/Dashboard';
import Weather from './components/Weather';
function App() {
  return (
  
    <Router>
      <div>
        <switch>
          <Route path="/"  exact component={User}/>
          <Route path="/dashboard" component={Dashboard}/>
          <Route path="/weather" component={Weather}/>
        </switch>
      </div>
    </Router>
  );
}

export default App;
