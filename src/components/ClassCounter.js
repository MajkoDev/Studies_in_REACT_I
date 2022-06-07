import React, { Component } from "react";

export default class ClassCounter extends Component {
  // state
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  // method
  incrementCount = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div className='container'>
        <h3>Class Counter</h3>
        <h1>{this.state.count}</h1>
        <button onClick={() => this.incrementCount()}>+</button>
      </div>
    );
  }
}