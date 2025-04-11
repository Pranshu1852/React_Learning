import React from "react";
import ReactDOM from "react-dom/client"
import App from "./App";


let flag=true;
let counter=0;


const handleClick=()=>{
    console.log(++counter);
}

const trueElement=<div className="trueelement" onClick={handleClick}>This is a true Element</div>;
const falseElement=<div className="falseelement">This is a false Element</div>;
const div=<div className="container">{flag?trueElement:falseElement}</div>;
const CustomComponent=()=>{
    return <>
    <div>
        This is a customComponent.
    </div>
    hello
    </>;
}

const root=ReactDOM.createRoot(document.getElementById('root'));
// root.render(div);
root.render(<App/>);