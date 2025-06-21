import React,{useState} from "react";

import './checkbox.css';

const CheckBox = () => {

    const [fruits,setFruits] = useState([]);

    const handle = (e) => {
        if(e.target.checked){
            setFruits([...fruits,e.target.value]);
        }
        else{
           setFruits(fruits.filter((item) => item !== e.target.value));
        }
    }

    const [choice,setChoice] = useState("");

    const handleChoice = (e) => {
        setChoice(e.target.value);
    }

    const [city,selectCity] = useState("Noida");

    const handleCity = (e) => {
        selectCity(e.target.value);
    }

    return (
        <div className="checkbox">
            <input className="input" onChange={handle} type="checkbox" value="Apple" />
            <label htmlFor="">Apple</label> <br />

            <input className="input" onChange={handle}  type="checkbox" value="Orange" /> 
            <label htmlFor="">Orange</label> <br />

            <input className="input" onChange={handle}  type="checkbox" value="Mango" /> 
            <label htmlFor="">Mango</label> <br />

            <input className="input" onChange={handle}  type="checkbox" value="Banana" /> 
            <label htmlFor="">Banana</label> <br />

            <ul>
                {fruits.map((item,index) => (
                    <li key={index}> {item} </li>
                ))}
            </ul>


            <div>
                <h1>Select</h1>
                <input type="radio" onChange={handleChoice} name="Choice" value={"Yes"}/> 
                <label htmlFor="">Yes</label>

                <input type="radio" onChange={handleChoice} name="Choice" value={"No"}/>
                <label htmlFor="">No</label>

                <h2>Selected : {choice}</h2>
            </div>


            <div>
                <h1>Select City</h1>

                <select onChange={handleCity} name="" id="">
                    <option value="Noida">Noida</option>
                    <option value="Delhi">Delhi</option>
                    <option value="Gurgaon">Gurgaon</option>
                </select>

                <h2> Selected City : {city} </h2>
            </div>
        </div>
    );
}

export default CheckBox; 