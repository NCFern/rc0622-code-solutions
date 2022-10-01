import React from 'react';

export default class Stopwatch extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isRunning: false, countDown: 0 };
    this.timer = this.timer.bind(this);
    this.handleClick = this.handleClick.bind(this);

    this.handleReset = this.handleReset.bind(this);
  }

  timer() {
    this.intervalID = setInterval(() => {
      this.setState({ countDown: this.state.countDown + 1 });
    }, 1000);
  }

  handleClick() {
    this.setState({ isRunning: !this.state.isRunning });
    if (this.state.isRunning) {
      clearInterval(this.intervalID);
    } else {
      this.timer();
    }
  }

  handleReset() {
    if (!this.state.isRunning) {
      this.setState({ countDown: 0 });
    }
  }

  render() {
    let buttonClick;
    if (this.state.isRunning) {
      buttonClick = 'fa-solid fa-pause';
    } else {
      buttonClick = 'fa-solid fa-play';
    }
    return (
      <div className='row'>
        <div onClick={this.handleReset} className='row watch'>{this.state.countDown}</div>
        <i onClick={this.handleClick} className={buttonClick}></i>
      </div>
    );
  }
}
