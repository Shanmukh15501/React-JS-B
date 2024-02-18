import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import TextForm from './TextForm';
import Posts from './Posts';
import Alert from './Alert';
import SecondFunc from './eventfunc';
import Home from './Homes';

function App() {
  const [alert, setAlert] = useState(null);

  const showAlert = (message) => {
    if (message != null) {
      setAlert(message);
      setTimeout(() => {
        setAlert(null);
      }, 1500);
    } else {
      setAlert(null);
    }
  };

  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/navbar" element={<Navbar title="Navigation Menu" />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/alert" element={<Alert message={alert} />} />
          <Route path="/textform" element={<TextForm showAlert={showAlert} />} />
          <Route path="/secondfunc" element={<SecondFunc />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
