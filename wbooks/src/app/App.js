import React, { Component } from 'react';
import './application.css';
import SignUp from './screens/SignUp/SignUp';
import { BrowserRouter as Router, Route } from 'react-router-dom';

class App extends Component {

  render () {
    return (
      <Router>
        <Route exact path="/" render={ ()=> <h1>In the next card!</h1> } />
        <Route path="/signup" component={SignUp} />
      </Router>
    );
  }
}

export default App;
