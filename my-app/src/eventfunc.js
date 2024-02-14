import React from 'react';

function FirstFunc(props) 
{

    // Your code for the FirstFunc component
    console.log(`You are into the first Function {props.set}`)
    const fistfunc = (a,b) =>
    {
        alert(b.type)
        console.log(b)
    }
    return(
        <div>
            
            <button onClick={(event) => fistfunc(1,event)}>
                    CHECK THIS FOR BUTTON from func1
            </button>
        
        </div>

    );
}

function SecondFunc() {
    console.log("HEY You are in the Second Function");
    
    const result = (data) => {
        alert("You Clicked " + data.message);
    }

    return (       
        <div>

        
        <button onClick={() => result({"a": 1, "message": "Your Goals"})}>
            CHECK THIS FOR BUTTON
        </button>
        <FirstFunc  set="revan"></FirstFunc>

        
        </div> 
    );
}

export default SecondFunc;
