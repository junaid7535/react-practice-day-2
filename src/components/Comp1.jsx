import React, { useContext } from "react";
import {data} from './Context'

const Comp1 = () => {

    const contextData = useContext(data);

    return (
        <div>
            <h2>{contextData}</h2>
        </div>
    );
}

export default Comp1;