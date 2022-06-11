// Styling
import "./App.css";

// Components: fetch data with useReducer - useCallback - 
import DataFetchingOne from "./components/DataFetchingOne";
import DataFetchingTwo from "./components/DataFetchingTwo";
import CallbackComponent from "./components/CallbackComponent";
import Counter from "./components/Counter";

function App() {
  return (
    <div className='App'>
      {/* <DataFetchingOne /> */}
      {/* <DataFetchingTwo /> */}
      {/* <CallbackComponent /> */}
      <Counter />

    </div>
  );
}

export default App;
