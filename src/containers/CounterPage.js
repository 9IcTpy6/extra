import React, {useState} from "react";
import './CounterPage.scss'
import Counter from "../components/Counter";

export default function CounterPage(){
    const [toggle, setToggle] = useState(false)
    const [state, setState] = useState(0)

    function add(){
        setState(state+1)
    }
    function sub(){
        setState( prev=> prev - 1)
    }



    return(
        <div className='CounterWrapper'>
            <h1 className='text1'>Here is Counter</h1>
            { toggle ? <Counter state={{ state, setState, add, sub }}/>: null}
            <button className='btnshow' onClick={()=> setToggle(prevState=>!prevState)}>Show Counter</button>
        </div>
    )
}