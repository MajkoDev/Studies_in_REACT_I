// Passing props as children

const Greet = (props) => {
  return (
    <>
      <h2>Greeting</h2>
      {props.children}
    </>
  );
};

export default Greet;
