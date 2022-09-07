import React from 'react';

export default class HotButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isClicked: false
    };
    this.openDrawer = this.openDrawer.bind(this);
    this.closeDrawer = this.closeDrawer.bind(this);
  }

  openDrawer(event) {
    this.setState({ isClicked: true });
  }

  closeDrawer(event) {
    this.setState({ isClicked: false });
  }

  render() {
    return (
      <div>
        <i onClick={this.openDrawer}
           className="fa-solid fa-bars" >
        </i>
        <div onClick={this.closeDrawer}
             className={this.state.isClicked ? 'shade' : 'container'}>
        </div>
        <div className={this.state.isClicked ? 'menu' : 'hidden'}>
          <h1>SOS Brigade</h1>
          <h3 onClick={this.closeDrawer}>Aliens</h3>
          <h3 onClick={this.closeDrawer}>Time Travellers</h3>
          <h3 onClick={this.closeDrawer}>Espers</h3>
        </div>
      </div>
    );
  }
}
