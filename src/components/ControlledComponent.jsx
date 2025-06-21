import React, { useState } from "react";

const ControlledComponent = () => {
    const [name,setName] = useState("");
    const [password,setPassword] = useState("");

    const [data,setData] = useState([]);
    const [show,setShow] = useState(false);

    const handleName = (e) => {
        setName(e.target.value);
    }

    const handlePassword = (e) => {
        setPassword(e.target.value);
    }

    const handleData = (e) => {
        e.preventDefault();

        setData([...data,{name : name.trim(),password : password.trim()}]);
        setName("");
        setPassword("");
    }

    const showData = (e) => {
        e.preventDefault();
        setShow(true);
    }

    return (
        <div>
            <form>
                <input type="text" placeholder="name" value={name} onChange={handleName}/> <br /> <br />
                <input type="text" placeholder="password" value={password} onChange={handlePassword}/> <br /> <br />

                <button onClick={handleData}>Submit</button>

                <button onClick={showData}>Show</button>
            </form>

            {show && (
                <ul>
                    {data.map((item,index) => (
                        <li key={index}> {item.name},{item.password} </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default ControlledComponent;