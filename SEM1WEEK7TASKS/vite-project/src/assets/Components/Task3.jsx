import React, { Component } from 'react';

class Task3 extends Component {
  constructor(props) {
    super(props);
    console.log('Constructor called');
  }

  componentDidMount() {
    console.log('Component did mount');
  }

  componentWillUnmount() {
    console.log('Component will unmount');
  }

  render() {
    console.log('Render method called');
    return (
      <div>Lifecycle Component</div>
    );
  }
}

export default Task3;