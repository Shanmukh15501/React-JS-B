import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import TextForm from './TextForm';
import Posts from './Posts';
import  Revan from './Classs';
import Alert from './alert';
import { useState } from 'react';

const App = () => {
  const [alert,setalert] = useState(null)
  const showalert = (messages) =>
  {
    if (messages != null)
    {
      setalert(messages);
      setTimeout(()=>
      {
        setalert(null);
      },1500
      )

    }
    else
    {
      setalert(null);
    }
  }
  return (
    <div>
      {/* <Navbar title="Navigation Menu" />  */}
      {/* <div className="container"> */}
      <TextForm showalert={showalert}/>
    
      {/* // <Posts /> */}
      {/* // <Revan name="revan"   color="blue"/> */}
       {/* <Shanmukh name="shanu" /> */}
    <Alert message={alert}/>;


    </div>
  );
};

export default App;




