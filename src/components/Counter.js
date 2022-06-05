import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  // update state
  increment() {
    this.setState({ count: this.state.count + 1 }, () => {
      console.log("Callback value", this.state.count);
    });
  }

  // update state on previous state
  incrementTwo() {
    this.setState(
      (prevState) => ({ count: prevState.count + 2 })
      // () => {console.log("Callback value", this.state.count)}
    );
  }

  render() {
    return (
      <>
        <h1>Counter - {this.state.count}</h1>
        <button onClick={() => this.increment()}>Increment</button>
        <button onClick={() => this.incrementTwo()}>Increment Two</button>
      </>
    );
  }
}

export default Counter;
