// Styling
import "./App.css";
import Stylesheet from "./components/Stylesheet";

// Components
import InfoList from "./components/InfoList";
import NameList from "./components/NameList";
import UserGreeting from "./components/UserGreeting";
import IndexList from "./components/IndexList";
import Form from "./components/Form";

function App() {
  return (
    <div className='App'>
      {/* <UserGreeting />
      <NameList />
      <InfoList />
      <IndexList />
      <Stylesheet primary={true} /> */}
      <Form />
    </div>
  );
}

export default App;
