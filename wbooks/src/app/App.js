import React, { Component } from 'react';
import logoWolox from './assets/LogoWolox.png';
import './application.css';

class App extends Component {
  state = {
    name: 'Nombre',
    lastname: 'Apellido',
    email: 'example@domain.com',
    password: 'password',
    password_confirm: 'password'
  };

  render () {
    return (
      <React.Fragment>
        <div class='sign-up-container'>
          <img class='wolox-logo' src={logoWolox} alt=''/>
          <form onSubmit={this.handleSubmit} class='sign-up-form' method="post">
            <label class='sign-up-label'>Nombre</label>
            <input class='input-form' type='input' name='name' value={this.state.name} onChange={this.handleChange} ></input>
            <label class='sign-up-label'>Apellido</label>
            <input class='input-form' type='input' name='lastname' value={this.state.lastname} onChange={this.handleChange} ></input>
            <label class='sign-up-label'>Email</label>
            <input class='input-form' type='email' name='email' value={this.state.email} onChange={this.handleChange} ></input>
            <label class='sign-up-label'>Password</label>
            <input class='input-form' type='password' name='password' value={this.state.password} onChange={this.handleChange} ></input>
            <label class='sign-up-label'>Confirmación de Password</label>
            <input class='input-form' type='password' name='password_confirm' value={this.state.password_confirm} onChange={this.handleChange} ></input>
            <button class='sign-up-button' type='submit'>Sign Up</button>
          </form>
          <button class='login'>Login</button>
        </div>
      </React.Fragment>
    );
  }

  handleSubmit = event => { 
    let register =
    `{
      "user": {
        "email": ${this.state.email},
        "password": ${this.state.password},
        "password_confirmation": ${this.state.password_confirmation},
        "first_name": ${this.state.name},
        "last_name": ${this.state.lastname},
        "locale": "en"
      }
    }`
    console.log(register)
    event.preventDefault();
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }
}



export default App;
