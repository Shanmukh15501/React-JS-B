import React, { useState } from 'react';

export default function TextForm() {
  const [textbb, settext] = useState("Enter the Text");

  const uppercase = (event) => {
    settext(event.target.value.toUpperCase());
  };

  return (
    <div>
      <form>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
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
    </div>
  );
}
