import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import TextForm from './TextForm';
import Posts from './Posts';
import { Shanmukh, Revan } from './Classs';

const App = () => {
  return (
    <div>
      {/* <Navbar title="Navigation Menu" /> */}
      {/* <div className="container"> */}
      {/* <TextForm /> */}
      {/* </div> */}
    
      <Posts />
      <Revan name="revan"   color="blue"/>
      <Shanmukh name="shanu" />

    </div>
  );
};

export default App;
