import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Card from './components/Card';
import Advantages from "./components/Advantages.js"
function App() {

  return (
    <div className="App">
    
      <Navbar/>
      <Card/>
      <Advantages/>
    </div>
  );
}

export default App;
