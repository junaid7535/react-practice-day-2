import { useState } from 'react'

import {BrowserRouter,Routes,Route,Link} from 'react-router';
import './App.css'
import Greet from './components/Greet'

import ControlledComponent from './components/ControlledComponent';
import CheckBox from './components/CheckBox';
import Cart from './components/Cart';
import UseEffect from './components/UseEffect';
import UseRef from './components/UseRef';
import UseForm from './components/useForm';
import Context from './components/Context';
import About from './components/About';
import Contact from './components/Contact';
import Navigation from './components/Navigation';

function App() {
  const fruits = ["Apple","Banana","Orange"];

  return (
    <div>
      <Cart/>
      <Greet/>
      <ControlledComponent></ControlledComponent>
      <CheckBox></CheckBox>

      <UseEffect></UseEffect>
      <UseRef></UseRef>
      <UseForm></UseForm>
      <Context></Context>

      <BrowserRouter>
        <Navigation></Navigation>
        <Routes>
          <Route path='/about' element = {<About></About>}/>
          <Route path='/contact' element = {<Contact/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
