// Styling
import "./App.css";

// Components
import Hello from "./components/Hello";
import Welcome from "./components/Welcome";
import Greet from "./components/Greet";

import Message from "./components/Message";
import Counter from "./components/Counter";

function App() {
  return (
    <div className='App'>
      {/* Components and Props  */}

      {/* <Hello title='function' /> */}
      {/* <Welcome title='class' info='A little more informations' /> */}
      {/* <Greet>This can also be greeting.</Greet> */}
      
      {/* II. State */}

      <Message />
      <Counter />
    </div>
  );
}

export default App;
