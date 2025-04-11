import React from "react";

const Button=(props)=>{
    const {children, description}= props;
    return <button onClick={props.clickAction}>{children}+{description}</button>;
}

export default Button;