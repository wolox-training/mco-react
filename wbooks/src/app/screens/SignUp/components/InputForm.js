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
        <label class='sign-up-label'>{this.props.label_name}</label>
        <input class='input-form' type={this.props.type} name={this.props.name} value={this.state.value} onChange={this.handleChange} ></input>
    </div>
    )
  }
}

InputForm.propTypes = {
  label_name: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.string,
}

export default InputForm;