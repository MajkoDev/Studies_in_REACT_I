import React, { Component } from "react";

// https://reactjs.org/docs/state-and-lifecycle.html#gatsby-focus-wrapper

export default class Clock extends Component {
  // this.state is initialized with an object including the current time
  // then render is called and clock is shown in UI
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  // component Clock asks browser to st up timer to call tick() method once a second
  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date(),
    });
  }

  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}
