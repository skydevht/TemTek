import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
} from 'react-router-dom';
import Main from './pages/Main';
import Home from './pages/Home';
import Glossary from './pages/Glossary';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Home}/>
          <Route path="/app" component={Main}/>
          <Route path="/glossary" component={Glossary}/>
        </div>
      </Router>
    );
  }
}

export default App;
