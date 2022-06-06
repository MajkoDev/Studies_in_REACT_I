import React from "react";

function ChildComponent(props) {
  return (
    <>
      {/* 
        <p>Button that receives method from ParentComponent.</p>
      <button onClick={props.greetHandler}>Greet Parent</button> 
      */}

      <p>Button that passes the parameter to ParentComponent.</p>
      <button onClick={() => props.greetHandler("child")}>Greet Parent</button>
    </>
  );
}

export default ChildComponent;
