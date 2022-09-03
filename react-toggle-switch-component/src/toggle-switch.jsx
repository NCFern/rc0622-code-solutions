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
    return (
      <div className='toggle-container'>
        <div className='toggle-background'>
          <div className='toggle-circle'></div>
        </div>
      </div>

    );

  }
}
