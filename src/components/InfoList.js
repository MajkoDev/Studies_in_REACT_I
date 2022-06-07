import Info from "./Info";

const InfoList = () => {
  const persons = [
    { id: 1, name: "Adam", age: 24, skill: "React" },
    { id: 2, name: "Eva", age: 19, skill: "Vue" },
    { id: 3, name: "David", age: 31, skill: "Angular" },
    { id: 4, name: "Patrick", age: 27, skill: "Node" },
  ];

  const personList = persons.map((person) => (
    <Info key={person.id} person={person} />
  ));

  return (
    <>
      <h4>{personList}</h4>
    </>
  );
};

export default InfoList;
