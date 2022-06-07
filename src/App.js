// Styling
import "./App.css";

// ? Components = useState
import ClassCounter from "./components/ClassCounter";
import HookCounter from "./components/HookCounter";
import HookCounterTwo from "./components/HookCounterTwo";
import HookCounterThree from "./components/HookCounterThree";
import HookCounterFour from "./components/HookCounterFour";

// ? Components = useEffect
import EffectClassOne from "./components/EffectClassOne";
import EffectHookOne from "./components/EffectHookOne";
import HookMouse from "./components/HookMouse";
import DataFetching from "./components/DataFetching";

function App() {
  return (
    <div className='App'>
      {/* <ClassCounter />
      <HookCounter />
      <HookCounterTwo />
      <HookCounterThree />
      <HookCounterFour /> */}

      {/* <EffectClassOne />
      <EffectHookOne />
      <HookMouse /> */}
      <DataFetching />
    </div>
  );
}

export default App;
