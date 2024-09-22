import React, { Component } from 'react';

class Task6 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clicks: 0
    };
  }

  handleButtonClick = () => {
    this.setState({
      clicks: this.state.clicks + 1
    });
  };

  render() {
    return (
      <div>
        <button onClick={this.handleButtonClick}>Click me!</button>
        <p>Clicks: {this.state.clicks}</p>
      </div>
    );
  }
}

export default Task6;