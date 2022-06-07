// Fragment

import React from "react";

function FragmentDemo() {
  const items = ["Adam", "John", "Erik", "Martin"];

  return (
    <React.Fragment>
      <h1>Fragment Demo</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus
        minus ea inventore!
      </p>
      {items.map((item) => (
        <React.Fragment key={item.id}>
          <p>{item}</p>
        </React.Fragment>
      ))}
    </React.Fragment>
  );
}

export default FragmentDemo;
