import React, { Component } from 'react';
import './scss/application.scss';
import SignUp from './screens/SignUp/SignUp';
import Login from './screens/Login/Login';
import { BrowserRouter as Router, Route } from 'react-router-dom';

class App extends Component {

  render () {
    return (
      <Router>
        <Route exact path="/" component={Login} />
        <Route path="/signup" component={SignUp} />
      </Router>
    );
  }
}

export default App;
