import React from "react";

const Greet = ({items = ["Apple","Banana","Orange"]}) => {
    return (
        <div>
            <ul> 
                {items.map((fruit,index) => (
                    <li key={index}> {fruit} </li>
                ))}
            </ul>
        </div>
    );
}

export default Greet;