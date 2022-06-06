// Using index as key

// When you should use index as a key
// 1. items in your list do not have unique id.
// 2. list is static and will not change.
// 3. list will never be reordered or filterd.

const IndexList = () => {
  const names = ["Kierkegaard", "Nietzsche", "Heidegger", "Sartre"];

  const nameList = names.map((name, index) => (
    <h2 key={index}>
      {index} {name}
    </h2>
  ));

  return <>{nameList}</>;
};

export default IndexList;
