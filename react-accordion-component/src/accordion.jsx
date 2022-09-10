import React from 'react';
import { SatisfactionArray } from './Satisfaction';

export default class Accordion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: null,
      topics: SatisfactionArray
    };
    this.handleDropdown.bind(this);
  }

  handleDropdown(event) {
    if (this.state.clicked === event.target.textContent) {
      this.setState({ clicked: null });
    } else {
      this.setState({ clicked: event.target.textContent });
    }
  }

  createTopic(topic) {

  }

  render() {
    return (
      <div>
        {
          this.createTopic()
        }
      </div>
    );
  }
}
