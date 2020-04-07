import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import logoWolox from './assets/LogoWolox.png';
import InputForm from './components/InputForm';
import { newSession } from '../../../services/user';

class Login extends Component {
  state = {
    hasError: false,
    error: null,
  }

  handleSubmit = event => { 
    let inputs = event.target
    newSession(inputs.email.value, inputs.pwd.value)
    .then(res => res.ok === false? this.setState(
      { hasError: true, error: `${res.problem}\nStatus ${res.status}` }
      ): console.log(res) )
    event.preventDefault();
  }

  render () {
    if (this.state.hasError) {
      return <h1> Something went wrong, sorry. Error: {this.state.error} </h1>
    }
    return (
      <div className='login-container'>
        <img className='wolox-logo'  src={logoWolox} alt=''/>
        <form className='login-form' onSubmit={this.handleSubmit} method="post">
          <InputForm label_name='Email' name='email' type='input'/>
          <InputForm label_name='Password' name='pwd' type='password' />
          <input className='login-button' type='submit' value='Login'></input>
        </form>
        <Link to='/signup'>
          <button className='sign-up'>Sign Up </button>
        </Link>
      </div>
    );
  }
}

export default Login;
