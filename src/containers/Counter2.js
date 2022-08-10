import React from 'react'
import counter from '../store/counter'
import {observer} from "mobx-react-lite";
import './Counter2.scss'

const Counter2 = observer(()=>{
    return(
        <div className='Counter2Wrapper'>
            <div className='counter2'>
                Counter2: {counter.count}
                <div className='btns'>
                    <button className='btn' onClick={()=> counter.increment()}>Add</button>
                    <button className='btn' onClick={()=> counter.decrement()}>Sub</button>
                </div>
            </div>
        </div>
    )
})
export default Counter2