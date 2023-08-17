import React,{useState} from "react";
import "./App.css";

function App()
{
  const [count,setCount] = useState(0)
  return (

    <div className="App">
      <h1>Hello World</h1>
      <header> Counter App using State</header>
      <h2>Count is {count}</h2>
      <button onClick={()=>setCount(0)}>Reset Counter</button>
      <button onClick={ ()=> count>9?10:setCount(count+1)}>INC Counter</button>
      <button onClick={()=>count<1?0:setCount(count-1)}>DEC Counter</button>


    </div>

  )
}

export default App