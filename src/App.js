import React from "react";
import Button from "./Button";

const App=()=>{
    let counter=0;
    const handleClick=()=>{
        console.log(++counter);
    }

    return <Button description="This is a button" clickAction={handleClick}>Click</Button>;
}

export default App;