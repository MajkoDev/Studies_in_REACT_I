// Class component with state
// State is object privately maintained inside component
// State can by changed within component
// State can influence what is rendered in UI

import { Component } from "react";

class Message extends Component {
  // define state
  constructor() {
    super();
    this.state = {
      message: "Welcome visitor",
    };
  }

  // function to change state
  changeMessage() {
    this.setState({
      message: "Thank you for subscribing",
    });
  }

  // render state
  render() {
    return (
      <>
        <h1>{this.state.message}</h1>
        <button onClick={() => this.changeMessage()}>Subscribe</button>
      </>
    );
  }
}

export default Message;
