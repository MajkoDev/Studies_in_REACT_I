import { useState } from "react";

const HookCounterTwo = () => {
  // initial state
  const initialState = 100;

  const [count, setCount] = useState(initialState);

  const incrementTwo = () => {
    for (let i = 0; i < 2; i++) {
      setCount((prevCount) => prevCount + 1);
    }
  };

  return (
    <div className='container'>
      <h3>Function Counter (prevState)</h3>
      <h1>{count}</h1>
      <div>
        <button onClick={() => setCount(count + 1)}>Plus</button>
        <button onClick={() => setCount(count - 1)}>Minus</button>
        <button onClick={() => setCount(initialState)}>Reset</button>
      </div>
      <div>
        {/* update state on previous state */}
        <button onClick={incrementTwo}>Increment by 2</button>
        <button onClick={() => setCount((prevCount) => prevCount + 5)}>
          Increment by 5
        </button>
      </div>
    </div>
  );
};

export default HookCounterTwo;