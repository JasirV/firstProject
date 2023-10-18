import React,{useState} from 'react'
import { Button } from 'react-bootstrap';
const Count = () => {
    const [count,setCount]= useState(0)
    const incriment=()=>{
    setCount(count+1);
    }
    const decriment=()=>{
        setCount(count-1)
    }
  return (
    <div>
        <h1>Your count is {count}</h1>
        <Button className='bg-sucess'onClick={incriment}>+</Button>
        <Button className='bg-danger m-2'onClick={decriment}>-</Button>
        </div>
  )
}

export default Count