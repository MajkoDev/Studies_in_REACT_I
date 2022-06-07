// Styling
import './App.css';

// Components
import LifecycleA from "./components/LifecycleA";
import Clock from "./components/LifecycleB";
import FragmentDemo from "./components/FragmentDemo";
import PureComp from "./components/PureComp";

function App() {
  return (
    <div className="App">
      {/* <LifecycleA /> */}
      {/* <Clock /> */}
      <FragmentDemo />
      <PureComp />
    </div>
  );
}

export default App;
