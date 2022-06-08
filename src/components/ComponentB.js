import React from "react";
import { UserContext, ChannelContext } from "../App";

const ComponentB = () => {
  return (
    <UserContext.Consumer>
      {(user) => {
        return (
          <ChannelContext.Consumer>
            {(channel) => {
              return (
                <div>
                  My name is {user} from {channel}
                </div>
              );
            }}
          </ChannelContext.Consumer>
        );
      }}
    </UserContext.Consumer>
  );
};

export default ComponentB;
