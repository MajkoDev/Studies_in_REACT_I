//?   React counter class component
//?   that updates the document title right after React makes changes to the DOM

import React, { Component } from "react";

export default class EffectClassOne extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  //! SIDE EFFECT

  //* when code is first mounted in DOM
  componentDidMount() {
    document.title = `Clicked ${this.state.count} times`;
  }

  //* when state is changes/updated
  componentDidUpdate() {
    document.title = `Clicked ${this.state.count} times`;
  }

  render() {
    return (
      <div>
        <p>You clicked {this.state.count} times</p>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Click me
        </button>
      </div>
    );
  }
}