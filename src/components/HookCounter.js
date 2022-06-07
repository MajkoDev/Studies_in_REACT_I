import { useState } from "react";

const HookCounter = () => {
  const [count, setCount] = useState(100);

  return (
    <div className='container'>
      <h3>Function Counter</h3>
      <h1>{count}</h1>
      <button onClick={() => setCount(count - 1)}>-</button>
    </div>
  );
};

export default HookCounter;