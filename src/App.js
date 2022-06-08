import React from "react";

// Styling
import "./App.css";

// Components
import ComponentA from "./components/ComponentA";
import ComponentC from "./components/ComponentC";

import CounterOne from "./components/CounterOne";
import CounterTwo from "./components/CounterTwo";
import CounterThree from "./components/CounterThree";

// creating Context
export const UserContext = React.createContext();
export const ChannelContext = React.createContext();

function App() {
  return (
    <div className='App'>
      {/* providing Context */}
      {/* <UserContext.Provider value={"MajkoDev"}>
        <ChannelContext.Provider value={"Slovakia"}>
          <ComponentA />
          <ComponentC />
        </ChannelContext.Provider>
      </UserContext.Provider> */}

      {/* <CounterOne /> */}
      {/* <CounterTwo /> */}
      <CounterThree />

    </div>
  );
}

export default App;
