import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import logoWolox from './assets/LogoWolox.png';
import InputForm from './components/InputForm';
import { createUser } from '../../../services/user';

class SignUp extends Component {
  state = {
    hasError: false,
    error: null,
  }

  handleSubmit = event => { 
    let inputs = event.target
    let register =
    `{
      "user": {
        "email": ${inputs.email.value},
        "password": ${inputs.password.value},
        "password_confirmation": ${inputs.password_confirm.value},
        "first_name": ${inputs.firstname.value},
        "last_name": ${inputs.lastname.value},
        "locale": "en"
      }
    }`
    createUser(register)
    .then(res => res.ok === false? this.setState(
      { hasError: true, error: `${res.problem}\nStatus ${res.status}` }
      ): null )
    event.preventDefault();
  }

  render () {
    if (this.state.hasError) {
      return <h1> Something went wrong, sorry. Error: {this.state.error} </h1>
    }
    return (
      <div className='sign-up-container'>
        <img className='wolox-logo' src={logoWolox} alt=''/>
        <form onSubmit={this.handleSubmit} className='sign-up-form' method="post">
          <InputForm label_name='Nombre' name='firstname' type='input'/>
          <InputForm label_name='Apellido' name='lastname' type='input' />
          <InputForm label_name='Email' name='email' type='email' />
          <InputForm label_name='Password' name='password' type='password' />
          <InputForm label_name='Confirmación de Password' name='password_confirm' type='password' />
          <button className='sign-up-button' type='submit'>Sign Up</button>
        </form>
        <Link to='/'>
          <button className='login'>Login</button>
        </Link>
      </div>
    );
  }
}

export default SignUp;
