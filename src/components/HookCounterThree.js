import { useState } from "react";

// useState with object and spread operator

// useState hook does not automatically merge or updates objects
// you must manually merge them using spead operator

const HookCounterThree = () => {
  const [name, setName] = useState({ firstName: "", lastName: "" });

  return (
    <form className='container'>
      <input
        type='text'
        value={name.firstName}        
        placeholder='First Name'
        onChange={(e) => setName({...name, firstName: e.target.value })}
      />
      <input
        type='text'
        value={name.lastName}
        placeholder='Last Name'
        onChange={(e) => setName({ ...name, lastName: e.target.value })}
      />
      <div>
        <h2>Your first name is {name.firstName}</h2>
        <h2>Your last name is {name.lastName}</h2>
        <h5>{JSON.stringify(name)}</h5>
      </div>
    </form>
  );
};

export default HookCounterThree;