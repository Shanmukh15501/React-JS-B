import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';

const App = () => {
  return (
    <div>
      <header>
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Welcome to My App</h1>
      </header>
      <Navbar title="Navigation Menu"/> 
    </div>
  );
};

export default App;
