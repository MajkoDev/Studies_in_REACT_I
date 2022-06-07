import { useState } from "react";

// useState with array

const HookCounterFour = () => {
  const [items, setItems] = useState([]);

  // we are copying previous array and append new object
  const addItem = () => {
    setItems([
      ...items,
      {
        id: items.lenght,
        value: Math.floor(Math.random() * 10) + 1,
      },
    ]);
  };

  return (
    <div className='container'>
      <button onClick={addItem}>Add a fruit</button>
      {items.map((item) => (
        <p key={item.id}>{item.value}</p>
      ))}
    </div>
  );
};

export default HookCounterFour;