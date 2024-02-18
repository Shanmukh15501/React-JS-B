
import React, {useState } from 'react';
import { Outlet, Link } from "react-router-dom";



const Home = () => {
    return (
      <>
        <nav>
          <ul>
            <li>
              <Link to="/navbar">Nav</Link>
            </li>
            <li>
              <Link to="/posts">Posts</Link>
            </li>
            <li>
              <Link to="/alert">alert</Link>
            </li>
            <li>
              <Link to="/textform">textform</Link>
            </li>

            <li>
              <Link to="/secondfunc">secondfunc</Link>
            </li>
            
          </ul>
        </nav>
  
        <Outlet />
      </>
    )
  };
  
  export default Home;


