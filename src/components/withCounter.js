import React from "react";

// Function that accepts original component and returns new component
// it also adds props

const withCounter = (WrappedComponent, incrementNumber) => {
  class WithCounter extends React.Component {
    //! SHARED STATE
    constructor(props) {
      super(props);

      this.state = {
        count: 0,
      };
    }
    //! SHARED LOGIC = METHOD
    incrementCount = () => {
      this.setState((prevState) => {
        return { count: prevState.count + incrementNumber };
      });
    };

    render() {
      return (
        <WrappedComponent
          count={this.state.count}
          incrementCount={this.incrementCount}
          {...this.props}
        />
      );
    }
  }
  return WithCounter;
};

export default withCounter;