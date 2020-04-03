import React, { Component } from 'react';

class InputForm extends Component {
  state = {
      value: ''
  }

  handleChange = event => {
    this.setState({
      value: event.target.value
    });
  }

  render(){
    return(
    <div>
        <label class='sign-up-label'>{this.props.label_name}</label>
        <input class='input-form' type={this.props.type} name={this.props.name} value={this.state.value} onChange={this.handleChange} ></input>
    </div>
    )
  }
}

export default InputForm;