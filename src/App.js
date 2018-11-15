import React, { Component } from 'react';

class App extends Component {
  state = { title: 'React App' };

  render() {
    const { title } = this.state;
    return <div>{title}</div>;
  }
}

export default App;
