import React from "react";
import './Counter.scss'

export default function Counter (props)  {

    return(
        <div className='Counter'>
            <h1 className='Counter-logo'>Counter: {props.state.state}</h1>
            <div className='buttonBlock'>
            <button className='buttonadd' onClick={()=>props.state.add()}>Add</button>
            <button className='buttonsub' onClick={()=>props.state.sub()}>Sub</button>
            </div>
        </div>
    )
}