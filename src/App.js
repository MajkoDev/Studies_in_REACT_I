// Styling
import './App.css';
import InfoList from './components/InfoList';
import NameList from './components/NameList';
import UserGreeting from './components/UserGreeting';

// Components


function App() {
  return (
    <div className="App">
        <UserGreeting />
        <NameList />
        <InfoList />
        
    </div>
  );
}

export default App;
