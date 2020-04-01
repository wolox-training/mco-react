import React, { Component } from 'react';
import { string } from 'prop-types'

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
        <label className='sign-up-label'>{this.props.label_name}</label>
        <input className='input-form' type={this.props.type} name={this.props.name} value={this.state.value} onChange={this.handleChange} ></input>
    </div>
    )
  }
}

InputForm.propTypes = {
  label_name: string,
  name: string,
  type: string,
}

export default InputForm;