// Styling
import "./App.css";

// Components
import LifecycleA from "./components/LifecycleA";
import Clock from "./components/LifecycleB";
import FragmentDemo from "./components/FragmentDemo";
import PureComp from "./components/PureComp";

import RefsDemo from "./components/RefsDemo";
import FocusInput from "./components/FocusInput";
import RFParentInput from "./components/RFParentInput";

function App() {
  return (
    <div className='App'>
      {/* <LifecycleA /> */}
      {/* <Clock /> */}
      {/* <FragmentDemo /> */}
      {/* <PureComp /> */}

      {/* <RefsDemo /> */}
      {/* <FocusInput /> */}
      <RFParentInput />
    </div>
  );
}

export default App;
