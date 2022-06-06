// Binding Event Handlers
// On click of button we change message which is part of component state

import React, { Component } from "react";

export class EventBind extends Component {
  // define state
  constructor(props) {
    super(props);

    this.state = {
      message: "Dont click that button",
    };

    // binding in class constructor --- 3. option
    this.clickHandler = this.clickHandler.bind(this);
  }

  // function to change state
  clickHandler() {
    this.setState({
      message: "You have clicked the button",
    });
  }

  // using arrow functions --- 4. option
  clickButton = () => {
    this.setState({
      message: "You have tried arrow method.",
    });
  };

  // render UI
  render() {
    return (
      <>
        <h3>{this.state.message}</h3>

        {/* First two methods */}
        <p>
          Buttons that do job, but can create performance issues.
          <br />
          Binding in render method.
        </p>
        <button onClick={this.clickHandler.bind(this)}>Click</button>
        <button onClick={() => this.clickHandler()}>Click</button>

        <p>
          Better way.
          <br /> Binding in class constructor.
        </p>
        {/* Third method */}
        <button onClick={this.clickHandler}>Click</button>
        <button onClick={this.clickButton}>Click</button>
      </>
    );
  }
}

export default EventBind;
