import React, { useReducer } from "react";

// Styling
import "./App.css";

// creating Context
// export const UserContext = React.createContext();
// export const ChannelContext = React.createContext();

// useContext
// import ComponentA from "./components/ComponentA";
// import ComponentC from "./components/ComponentC";

// useReducer
// import CounterOne from "./components/CounterOne";
// import CounterTwo from "./components/CounterTwo";
// import CounterThree from "./components/CounterThree";

// useContext with useReducer
import ComponentA from "./useReducer with useContext/ComponentA";
import ComponentB from "./useReducer with useContext/ComponentB";
import ComponentC from "./useReducer with useContext/ComponentC";

export const CountContext = React.createContext();

const initialState = 0;

const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return initialState;
    default:
      return state;
  }
};

function App() {
  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <div className='App'>
      {/* USECONTEXT = providing Context */}
      {/* <UserContext.Provider value={"MajkoDev"}>
        <ChannelContext.Provider value={"Slovakia"}>
          <ComponentA />
          <ComponentC />
        </ChannelContext.Provider>
      </UserContext.Provider> */}

      {/* USEREDUCER */}
      {/* <CounterOne />
      <CounterTwo />
      <CounterThree /> */}

      <CountContext.Provider
        value={{ countState: count, countDispatch: dispatch }}>
        <h1>Count: {count}</h1>
        <ComponentA />
        <ComponentB />
        <ComponentC />
      </CountContext.Provider>
    </div>
  );
}

export default App;
