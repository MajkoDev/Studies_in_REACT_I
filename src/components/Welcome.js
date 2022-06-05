// Class Component with props

import { Component } from "react";

class Welcome extends Component {
  render() {
    // destructuring
    const { info } = this.props;

    return (
      <div>
        <h1>Welcome!</h1>
        <p>This is {this.props.title} component.</p>
        <a href='/'>{info}</a>
      </div>
    );
  }
}

export default Welcome;
