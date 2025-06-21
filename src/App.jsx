import { useState } from 'react'
import './App.css'
import Greet from './components/Greet'
import ControlledComponent from './components/ControlledComponent';
import CheckBox from './components/CheckBox';
import Cart from './components/Cart';
import UseEffect from './components/UseEffect';

function App() {
  const fruits = ["Apple","Banana","Orange"];

  return (
    <div>
      <Cart/>
      <Greet/>
      <ControlledComponent></ControlledComponent>
      <CheckBox></CheckBox>

      <UseEffect></UseEffect>
    </div>
  )
}

export default App
