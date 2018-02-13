import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
} from 'react-router-dom';
import Main from './pages/Main';
import Home from './pages/Home';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Home}/>
          <Route path="/app" component={Main}/>
        </div>
      </Router>
    );
  }
}

export default App;
