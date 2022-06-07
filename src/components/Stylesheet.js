import "./myStyles.css";

const paragraph = {
  fontSize: "18px",
  fontWeight: "400",
  color: "darkblue",
};

const Stylesheet = (props) => {
  let className = props.primary ? "primary" : "";

  return (
    <>
      <h1 className={`${className} font-xl`}>Stylesheets</h1>

      <p style={paragraph}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, cumque non
        similique eos neque voluptates assumenda quos dignissimos temporibus,
        animi minima aliquam tempora! Error, dolore tempore. Voluptas non dicta
        voluptatibus?
      </p>
    </>
  );
};

export default Stylesheet;