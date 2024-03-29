import React from 'react';
import ReactDOM from 'react-dom/client';

class RegistrationForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleUsernameChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handlePasswordChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(this.state);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor='username'>Username</label>
        <input type="text" id='username' name='username' value={this.state.username} onChange={this.handleUsernameChange}></input>
        <label htmlFor='password'>Password</label>
        <input type="password" id='password' name='password' value={this.state.password} onChange={this.handlePasswordChange}></input>
        <button>Sign Up</button>
      </form>
    );
  }

}

const $root = document.querySelector('#root');
const root = ReactDOM.createRoot($root);
root.render(<RegistrationForm />);
