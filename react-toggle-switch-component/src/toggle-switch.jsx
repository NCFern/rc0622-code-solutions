import React from 'react';

export default class ToggleSwitch extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isClicked: false };
    this.handleToggle = this.handleToggle.bind(this);
  }

  handleToggle() {
    this.setState({ isClicked: !this.state.isClicked });
  }

  render() {
    // console.log(this.state);
    if (this.state.isClicked === false) {
      return <div onClick={this.handleToggle} className='border off'>
        <div className='switch-off'></div>
      </div>;
    } else if (this.state.isClicked === true) {
      return <div onClick={this.handleToggle} className='border on'>
        <div className='switch-on'></div>
      </div>;
    }
  }
}
