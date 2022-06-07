import React, { Component } from "react";
import FRInput from "./FRInput";

export default class RFParentInput extends Component {

    // 1. we create ref
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
  }

  // 5. access element using this.ref variable.current
  clickHandler = () => {
    this.inputRef.current.focus();
  };

  render() {
    return (
      <div>
          {/* 2. attach ref to child component */}
        <FRInput ref={this.inputRef} />
        <button onClick={this.clickHandler}>Focus Input</button>
      </div>
    );
  }
}