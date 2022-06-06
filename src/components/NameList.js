const NameList = () => {
  const names = ["Adam", "Eva", "David"];
  const nameList = names.map((name) => <p>{name}</p>);

  return (
    <>
      <h4>First Option:</h4>
      {names.map((name) => (
        <p>{name}</p>
      ))}

      <h4>Second Option:</h4>
      {nameList}
    </>
  );
};

export default NameList;
