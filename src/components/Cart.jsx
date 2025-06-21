import React, { useState } from "react";
import './Cart.css';

const Cart = () => {

    const [item,setItem] = useState("");
    const [price,setPrice] = useState("");

    const [cart,setCart] = useState([]);
    const [show,setShow] = useState(false);

    const handleItem = (e) => {
        setItem(e.target.value)
    }

    const handlePrice = (e) => {
        setPrice(e.target.value)
    }

    const handlebtn = (e) => {
        e.preventDefault();

        if(item !== "" && price !== "") setCart([...cart,{item,price}]);
        setItem("");
        setPrice("");
    }

    const showData = (e) => {
        e.preventDefault();
        setShow(true);
    }

    return (
        <div className="cart-container">
            <div className="inputs">
                <input className="input1" type="text" placeholder="Item" onChange={handleItem} value = {item} />
                <label className="label" htmlFor="">Item</label> <br />

                <input className="input2" type="text" placeholder="Price" onChange={handlePrice} value = {price}/>
                <label className="label" htmlFor="">Price</label>


                <button className="btn1" onClick={handlebtn}>Add to Cart</button>
                <button className="btn2" onClick={showData}>Show Cart</button>
            </div>

            <div className="item-container">
                {show && (<ul>
                    {cart.map((cartItem,index) => (
                        <li key={index}> {cartItem.item} {} </li>
                    ))}
                </ul>
                )}
                <h3>Total Price : </h3>
            </div>
        </div>
    )
}

export default Cart;