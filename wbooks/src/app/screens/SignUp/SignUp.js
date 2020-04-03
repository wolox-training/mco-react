import React, { Component } from 'react';
import logoWolox from './assets/LogoWolox.png';
import InputForm from './components/InputForm';

class SignUp extends Component {

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
    console.log(register)
    event.preventDefault();
  }

  render () {
    return (
      <div class='sign-up-container'>
        <img class='wolox-logo' src={logoWolox} alt=''/>
        <form onSubmit={this.handleSubmit} class='sign-up-form' method="post">
          <InputForm label_name='Nombre' name='firstname' type='input'/>
          <InputForm label_name='Apellido' name='lastname' type='input' />
          <InputForm label_name='Email' name='email' type='email' />
          <InputForm label_name='Password' name='password' type='password' />
          <InputForm label_name='Confirmación de Password' name='password_confirm' type='password' />
          <button class='sign-up-button' type='submit'>Sign Up</button>
        </form>
        <button class='login'>Login</button>
      </div>
    );
  }
}

export default SignUp;
