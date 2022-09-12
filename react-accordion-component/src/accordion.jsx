import React from 'react';
import { SatisfactionArray } from './topics';

export default class Accordion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: null,
      topics: SatisfactionArray
    };
    this.handleDropdown = this.handleDropdown.bind(this);
    this.createTopic = this.createTopic.bind(this);
  }

  handleDropdown(event) {
    if (this.state.clicked === event.target.textContent) {
      this.setState({ clicked: null });
    } else {
      this.setState({ clicked: event.target.textContent });
    }
  }

  createTopic(topic) {
    const { topics, clicked } = this.state;
    return topics.map(topic => {
      return (
        <div key={topic.name}>
          <div onClick={this.handleDropdown} className='dropdown'>
            <h1>{topic.name}</h1>
          </div>
          <div className={topic.name === clicked ? 'text-box' : 'hidden'}>
            <p>{topic.text}</p>
          </div>
        </div>
      );
    });
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
