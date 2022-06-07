import React, { Component } from "react";

// if you want to see order of execusion in lifecycle

export default class LifecycleA extends Component {
  // 1. method
  constructor(props) {
    super(props);
    this.state = { name: "MajkoDev" };

    console.log("LifecycleA constructor");
  }

  // 2. method
  static getDerivedStateFromProps(props, state) {
    console.log("LifecycleA getDerivedStateFromProps");
    return null;
  }

  // 3. method
  componentDid() {
    console.log("LifecycleA componentDidMount");
  }

  render() {
    // 4. method
    console.log("LifecycleA render");
    return <div>LifecycleA</div>;
  }
}
