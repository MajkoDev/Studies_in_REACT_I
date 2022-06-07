// Styling
import "./App.css";

// Components
import ClickCounter from "./components/ClickCounter";
import HoverCounter from "./components/HoverCounter";

import ClickCounterTwo from "./components/ClickCounterTwo";
import HoverCounterTwo from "./components/HoverCounterTwo";
import User from "./components/User";
import Counter from "./components/Counter";

function App() {
  return (
    <div className='App'>
      {/* <ClickCounter name='Eric' />
      <HoverCounter name='Adam' /> */}

      {/* <ClickCounterTwo />
      <HoverCounterTwo />
      <User render={(isLoggedIn) => (isLoggedIn ? "Adam" : "Guest")} /> */}

      <Counter
        render={(count, incrementCount) => (
          <ClickCounterTwo count={count} incrementCount={incrementCount} />
        )}
      />
      <Counter
        render={(count, incrementCount) => (
          <HoverCounterTwo count={count} incrementCount={incrementCount} />
        )}
      />
    </div>
  );
}

export default App;
