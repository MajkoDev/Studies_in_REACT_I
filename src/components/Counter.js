import React, { useState, useMemo } from "react";

// ? USEMEMO HOOK
// 
// useCallback caches provided function instance inself
// useMemo invokes provided function and caches its result
    // if we cash function use callback, 
    // when we cash result of invoked function use memo

function Counter() {

  const [counterOne, setCounterOne] = useState(0);
  const [counterTwo, setCounterTwo] = useState(0);

  const incrementOne = () => {
    setCounterOne(counterOne + 1);
  };

  const incrementTwo = () => {
    setCounterTwo(counterTwo + 1);
  };

  const isEven = useMemo(() => {
    // make function longer
    let i = 0;
    while (i < 2000000000) i++;

    return counterOne % 2 === 0;
  }, [counterOne]);

  return (
    <div>
      <div>
        <button onClick={incrementOne}>Count One - {counterOne}</button>
      </div>
      <div>
        <span>{isEven ? "Even" : "Odd"}</span>
      </div>
      <div>
        <button onClick={incrementTwo}>Count Two - {counterTwo}</button>
      </div>
    </div>
  );
}

export default Counter;
