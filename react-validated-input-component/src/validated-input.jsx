import React from 'react';

export default class ValidatedInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      errorMessage: ''
    };
    this.handlePassword = this.handlePassword.bind(this);
  }

  handlePassword(event) {
    this.setState({ value: event.target.value });
    // if no password, show red x //
    // message- a password is required //
    if (event.target.value === '') {
      this.setState({
        errorMessage: 'a password is required'
      });
    // if password is less than 8 charas, show red x //
    // message- password is too short //
    } else if (event.target.value.length < 8) {
      this.setState({
        errorMessage: 'password is too short'
      });
    } else {
      this.setState({
        errorMessage: null
      });
    }
  }

  render() {

    return (
        <form>
      <div>
        <label htmlFor='input-password'>Password</label>
      </div>
      <input
      type="password"
      id='input-password'
      value={this.state.value}
      onChange={this.handlePassword}>
      </input>
      <div className='error-message'>
        <span className='error-text'>{this.state.errorMessage}</span>
      </div>

    </form>
    );

  }
}
