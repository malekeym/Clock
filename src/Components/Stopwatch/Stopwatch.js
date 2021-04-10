import React, { useEffect, useState } from 'react';
import Buttons from './Buttons';
import './Stopwatch.css'
function Timer (props) {
    var timer;
    const [count, setCount] = useState(0)

    function resume(){
        clearTimeout(timer)
        timer = setTimeout(()=>setCount(count+1),1000)
    }
    function stop(){
        clearTimeout(timer)
        setCount(0)
    }
    function pause(){
        clearTimeout(timer)
    }

    useEffect(()=>{
        resume()
        console.log(count)
    },[count])
    return(
        <div className="container">
            <div className='stopwatch'>{count}</div>
            <Buttons resume={resume} pause={pause} stop={stop}></Buttons>
        </div>
    )
}
export default Timer;