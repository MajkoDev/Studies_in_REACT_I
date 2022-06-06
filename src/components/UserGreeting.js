// Conditional Rendering

import React, { Component } from "react";

export class UserGreeting extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: false,
    };
  }

  render() {
    //! DEFAULTS
    // if (this.state.isLoggedIn) {
    //   return <h3>Welcome User</h3>;
    // } else {
    //   return <h3>Welcome Guest</h3>;}

    //! ELEMENT VARIABLES
    // let message
    // if(this.state.isLoggedIn){
    //     message = <div>Welcome User</div>
    // }else{
    //     message = <div>Welcome Guest</div>}
    // return <>{message}</>

    //! CONDITIONAL TERNARY OPERATOR
    return this.state.isLoggedIn ? <>Welcome User</> : <>Welcome Guest</>;

    //! SHORT-CIRCUIT OPERATOR
    // return this.state.isLoggedIn && <>Welcome User</>;
  }
}

export default UserGreeting;
