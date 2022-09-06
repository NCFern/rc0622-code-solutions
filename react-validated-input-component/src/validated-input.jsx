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
    const iconHidden = (this.state.errorMessage === '') ? 'hide-mark' : '';
    const iconStatus = (this.state.errorMessage) ? 'fa-solid fa-xmark pass-error' : 'fa-solid fa-check pass-success';
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
      <i className={`${iconStatus} ${iconHidden}`}></i>

      <div className='error-message'>
        <span className='pass-error'>{this.state.errorMessage}</span>
      </div>
        <button className='submit-button'>Submit</button>

    </form>
    );

  }
}
