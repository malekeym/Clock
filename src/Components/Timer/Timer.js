import React, { useEffect, useState } from 'react';
import Buttons from './Buttons';
import './Timer.css'
function Timer (props) {
    var timer;
    const [count, setCount] = useState(0)

    function resume(){
        timer = setInterval(()=>setCount(count+1),2000)
    }
    function stop(){
        clearInterval(timer)
        setCount(0)
    }
    function pause(){
        clearInterval(timer)
    }

    useEffect(()=>{
        resume()
        console.log(count)
    })
    return(
        <div className="container">
            <div className='timer'>{count}</div>
            <Buttons resume={resume} pause={pause} stop={stop}></Buttons>
        </div>
    )
}
export default Timer;