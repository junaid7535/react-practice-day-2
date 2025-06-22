import React, { useRef } from "react";

const UseRef = () => {

    const inputRef = useRef(null);

    const handle = () => {
        inputRef.current.focus();
    }

    return (
        <div>
            <h1> Use Ref hook</h1>

            <input ref={inputRef} type="text" placeholder="Enter Username" />
            <button onClick={handle}>Focus on input field</button>
        </div>
    );
}

export default UseRef;