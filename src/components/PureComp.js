import React, { PureComponent } from "react";

export default class PureComp extends PureComponent {
  render() {
    return <div>Pure Component</div>;
  }
}

//   The difference between them is that React.Component doesn’t implement shouldComponentUpdate(),
//   but React.PureComponent implements it with a shallow prop and state comparison.
