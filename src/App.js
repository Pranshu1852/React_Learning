import React,{useEffect, useLayoutEffect, useState, useCallback} from "react";
import Button from "./Button";
import Text from "../Text";

const App=()=>{
    let counter=0;
    const [data, setData]=useState([{id:'a',text:'text 0'},
        {id:'b',text:'text 1'},
        {id:'c',text:'text 2'},
        {id:'d',text:'text 3'},
        {id:'e',text:'text 4'},
    ])
    const handleClick=()=>{
        setData((prevdata)=>[...prevdata,{id:'f',text:'text 5'}])
    }

    const callbackRunning=useCallback(()=>{
        console.log('callback running');
    },[])

    callbackRunning();

    useEffect(()=>{
        console.log('useEffect');

        return ()=>{
            console.log('unmount')
        }
    },[data])

    useLayoutEffect(()=>{
        console.log('uselayouteffect');
    },[])

    return <>
    {data.map((item,index)=>{
        return <Text key={index}>{item.text}</Text>;
    })}
    <Button clickAction={handleClick}>Add new</Button>;
    </>;
}

export default App;