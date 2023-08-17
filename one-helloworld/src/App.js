import React from "react";
import Button from "./Button.js"

const App = () =>
{   return(
    <div>
    <h1 style={{textAlign:"center"}}>Hello World</h1>
    <Button title="App Store"></Button>
    <hr>
    </hr>
    <Button title="Play Store"></Button>
    <hr>
    </hr>
    <Button></Button>

    {/* <button className="button"> Playstore</button>
    <button className="button"> AppStore</button> */}

    </div>
    );
}

export default App;