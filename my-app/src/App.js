import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import TextForm from './TextForm'

const App = () => {
  return (
    <div>
      <Navbar title="Navigation Menu" />
      <div className="container">
        <TextForm />
      </div>
    </div>
  );
};

export default App;
