import { useReducer } from "react";

const initialState = { firstCounter: 0, secondCounter: 12 };

// reducer function
const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { ...state, firstCounter: state.firstCounter + action.value };
    case "decrement":
      return { ...state, firstCounter: state.firstCounter - action.value };
    case "increment2":
      return { ...state, secondCounter: state.secondCounter + action.value };
    case "decrement2":
      return { ...state, secondCounter: state.secondCounter - action.value };
    case "reset":
      return initialState;
    default:
      return state;
  }
};

const CounterTwo = () => {
  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h2>First Count: {count.firstCounter}</h2>
      <button onClick={() => dispatch({ type: "increment", value: 1 })}>
        Increment
      </button>
      <button onClick={() => dispatch({ type: "decrement", value: 1 })}>
        Decrement
      </button>
      <br />
      <button onClick={() => dispatch({ type: "increment", value: 5 })}>
        Increment by 5
      </button>
      <button onClick={() => dispatch({ type: "decrement", value: 3 })}>
        Decrement by 3
      </button>

      <br />
      <h2>Second Count: {count.secondCounter}</h2>
      <button onClick={() => dispatch({ type: "increment2", value: 4 })}>
        Increment by 4
      </button>
      <button onClick={() => dispatch({ type: "decrement2", value: 3 })}>
        Decrement by 3
      </button>

      <br />
      <br />
      <button onClick={() => dispatch({ type: "reset" })}>Reser</button>
    </div>
  );
};

export default CounterTwo;
