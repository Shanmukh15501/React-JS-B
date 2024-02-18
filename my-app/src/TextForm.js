import React, { useState } from 'react';

import Alert from './Alert';

export default function TextForm(props) {
  const [textbb, settext] = useState("Enter the Text");
  const [email, setemail] = useState("Enter the Email");
  const [textbox2Text, setTextbox2Text] = useState('');
  const [togglebox, settogglebox] = useState({ backgroundColor: "pink" , color:"green"});
  const [toggletext, settoggletext] = useState("Enable Dark Mode");


  const emailCase = (event) => {
    const op = String(event.target.value);

    setemail(op.toLowerCase());
  };

  const togglebuttonfunc = (event) =>
  {
    const op = String(event.target.value);
    console.log("into func",op);

    if (op === "Enable Dark Mode")
    {
      console.log("into if",op);
      settogglebox({ backgroundColor: "black" , color:"green"});
      settoggletext("Enable Pink Mode");
      props.showAlert("Enabled Dark Mode");
 
    }
    else
    {
      console.log("into elseeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",op);
      settogglebox({ backgroundColor: "pink" , color:"green"});
      settoggletext("Enable Dark Mode");
      props.showAlert("Enabled Pink Mode");
    }

  }

  const uppercase = (event) => {
    settext(event.target.value.toUpperCase());
  };

  const convertUppercase = () => {
    console.log("YOOOOOOOOOOOOOOOOOOOOOOOOOOOOO");
    setTextbox2Text(textbox2Text.toUpperCase());
    props.showAlert("Converted To Upper Case");
  };
  const convertlowercase = () =>
  {
    setTextbox2Text(textbox2Text.toLowerCase());
    props.showAlert("Converted To Lower Case");

  }


  const cleartext = () =>
  {
    setTextbox2Text('');

  }



  return (
    <div style={togglebox} >








<div className="form-check form-switch">
  <input className="form-check-input" type="checkbox" onClick={togglebuttonfunc} value={toggletext} id="flexSwitchCheckDefault"/>
  <label className="form-check-label" for="flexSwitchCheckDefault"  > {toggletext} </label>
</div>


      <form>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
          <input type="email" className="form-control" onChange={emailCase} value={email} id="exampleInputEmail1" aria-describedby="emailHelp"/>
          <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
          <input type="password" className="form-control" id="exampleInputPassword1"/>
        </div>
        <div className="mb-3 form-check">
          <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
          <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
      <br />
      <div className="mb-3">
        <textarea
          className="form-control"
          rows="5"
          value={textbb}
          onChange={uppercase}
        ></textarea>
      </div>
      <div className="mb-3">
        <textarea
          className="form-control"
          rows="5"
          value={textbox2Text}
          onChange={(e) => setTextbox2Text(e.target.value)}
        >


        </textarea>
        <button onClick={convertUppercase}>Convert to Uppercase</button>
        <button onClick={convertlowercase}>Convert to LowerCase</button>
        <button onClick={cleartext}>CLEAR</button>


      </div>
      <div className='container'>
        <p>{textbox2Text.split(" ").length}  words used  & Total Letters {textbox2Text.length} </p>
        <p>Preview</p>
        {textbox2Text}
      </div>
    </div>
  );
}
