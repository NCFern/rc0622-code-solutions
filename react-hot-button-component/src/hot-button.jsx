import React from 'react';

export default class HotButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isClicked: 0 };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ isClicked: this.state.isClicked + 1 });
  }

  render() {
    // console.log(this.state);
    let buttonChange = '';
    if (this.state.isClicked < 3) {
      buttonChange = 'button-1';
    } else if (this.state.isClicked < 6) {
      buttonChange = 'button-2';
    } else if (this.state.isClicked < 9) {
      buttonChange = 'button-3';
    } else if (this.state.isClicked < 12) {
      buttonChange = 'button-4';
    } else if (this.state.isClicked < 16) {
      buttonChange = 'button-5';
    } else if (this.state.isClicked < 18) {
      buttonChange = 'button-6';
    } else {
      buttonChange = 'button-7';
    }
    return <button onClick={this.handleClick} className={buttonChange}> Hot Button </button>;

  }
}
