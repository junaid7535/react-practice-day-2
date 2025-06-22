import React, { createContext } from "react";
import Comp1  from "./Comp1";

export const data = createContext("transfer data using context api")

const Context = () => {
    return (
        <div>
        <h1>Parent Component</h1>
        <Comp1></Comp1>
        </div>
    );
}

export default Context;