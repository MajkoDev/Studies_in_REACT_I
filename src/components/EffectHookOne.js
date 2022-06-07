//?   React counter class component
//?   that updates the document title right after React makes changes to the DOM

import React, { useState, useEffect } from "react";

const EffectHookOne = () => {
  
  const [count, setCount] = useState(0);

  //* this Hook, you tell React that your component needs to do something after render.
  useEffect(() => {

      //* this is called "effect" (we set the document title)
      document.title = `You clicked ${count} times`
  })

  return (
    <>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </>
  );
};

export default EffectHookOne;
