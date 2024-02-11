import React, { useState } from 'react';

const Alert = (props) => {
    // Check if props.message is defined
    if (props.message === null) {
      // Return empty JSX fragment if message is undefined
      return <></>;
    }
    else
    {
        console.log("You are in the else case")
    }
  
    return (
      <div className="alert alert-primary" role="alert">
        <h1>{props.message}</h1>
      </div>
    );
  };
  
export default Alert;