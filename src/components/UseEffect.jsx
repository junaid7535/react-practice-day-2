import React, { useEffect, useState } from "react";

const UseEffect = () => {

    const func = () => {
        console.log("one time function call")
    }

    const [count,setCount] = useState(0);

    useEffect(() => {
        func();
    },[]);

    const handle = () => {
        setCount(count+1);
    }

    return (
        <div>
            <h1>Learn Use Effect</h1>

            <button onClick={handle} value={count}>Count is {count}</button>

        </div>
    );
}

export default UseEffect;