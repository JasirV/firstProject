import React, { useState } from 'react'
import { Button } from 'react-bootstrap';
const Test = () => {
   const [colour,setColour] =useState("Green");
   const changeColour=()=>{
    setColour("Red");
   }
  return (
    <div>
        <h1 className='bg-warning'>my fav color</h1>
        <h1>colour is {colour}</h1>
        <Button onClick={changeColour}>Change color</Button>
    </div>
  )
}

export default Test