// Styling
import "./App.css";

// Components
import ClickCounter from "./components/ClickCounter";
import HoverCounter from "./components/HoverCounter";

function App() {
  return (
    <div className='App'>
      <ClickCounter name='Eric' />
      <HoverCounter name='Adam' />
    </div>
  );
}

export default App;
