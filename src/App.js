// Styling
import "./App.css";

// Components
import Hello from "./components/Hello";
import Welcome from "./components/Welcome";
import Greet from "./components/Greet";

import Message from "./components/Message";
import Counter from "./components/Counter";

import FunctionClick from "./components/FunctionClick";
import ClassClick from "./components/ClassClick";
import EventBind from "./components/EventBind";

import ParentComponent from "./components_I/ParentComponent";

function App() {
  return (
    <div className='App'>
      {/* Components and Props  */}

      {/* <Hello title='function' />
      <Welcome title='class' info='A little more informations' />
      <Greet>This can also be greeting.</Greet> */}

      {/* II. State */}

      {/* <Message />
      <Counter /> */}

      {/* III. Events  */}
      {/* <FunctionClick />
      <ClassClick />
      <EventBind /> */}

      {/* IV. Methods as Props  */}
      <ParentComponent />


    </div>
  );
}

export default App;
