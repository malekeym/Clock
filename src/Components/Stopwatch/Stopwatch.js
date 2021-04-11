import React, { useEffect, useState } from 'react';
import Buttons from './Buttons';
import './Stopwatch.css'
function Timer (props) {
    var timer;
    const [count, setCount] = useState(0)
    const [status, setStatus] = useState(true)

    function resume(){
        if(!status){
            setStatus(true)
        }
        clearInterval(timer)
        timer = setInterval(()=>setCount(count+1),1000)
    }

    function stop(){
        setStatus(false)
        setCount(0)
        clearInterval(timer)
    }

    function pause(){
        clearInterval(timer)
    }

    useEffect(()=>{
        if(status){
            resume()
        }
        return () => clearInterval(timer)
    },[count])


    return(
        <div className="container">
            <div className='stopwatch'>{count}</div>
            <Buttons resume={resume} pause={pause} stop={stop}></Buttons>
        </div>
    )
}


export default Timer;