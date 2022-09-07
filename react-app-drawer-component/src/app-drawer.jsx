import React from 'react';

export default class HotButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isClicked: false
    };
    this.handleDrawer = this.handleDrawer.bind(this);
  }

  handleDrawer() {
    this.setState({ isClicked: !this.state.isClicked });
  }

  render() {
    const showDrawer = (this.state.isClicked) ? '' : 'closed';

    return (
      <div className="drawer-content">
        <div className="row">
          <div className="column-full">
            <i className="fa-solid fa-bars" onClick={this.handleDrawer}></i>
          </div>
        </div>
        <div className={`${showDrawer}`}>
          <h1>SOS Brigade</h1>
          <h2>Aliens</h2>
          <h2>Time Travellers</h2>
          <h2>Espers</h2>
        </div>

    </div>
    );

  }

}
