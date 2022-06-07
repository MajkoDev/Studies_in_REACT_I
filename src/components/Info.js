const Info = ({ person }) => {
    return (
      <div>
        <h3>my name is {person.name}</h3>
        <p>
          I am {person.age} years old. I know, how to work with {person.skill}
        </p>
      </div>
    );
  };
  
  export default Info;