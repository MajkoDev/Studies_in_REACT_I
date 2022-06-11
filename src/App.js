// Styling
import "./App.css";

// Components: fetch data with useReducer - useCallback - 
import DataFetchingOne from "./components/DataFetchingOne";
import DataFetchingTwo from "./components/DataFetchingTwo";
import CallbackComponent from "./components/CallbackComponent";

function App() {
  return (
    <div className='App'>
      {/* <DataFetchingOne /> */}
      {/* <DataFetchingTwo /> */}
      <CallbackComponent />

    </div>
  );
}

export default App;
