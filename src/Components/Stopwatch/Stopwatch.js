import React, { useEffect, useState, useRef } from 'react';
import Buttons from './Buttons';
import './Stopwatch.css'
function Timer (props) {
    var timerRef = useRef();
    const [count, setCount] = useState(0)
    const [status, setStatus] = useState(true)

    function resume(){
        if(!status){
            setStatus(true)
        }
        clearInterval(timerRef.current)
        let timerId = setInterval(()=>{
            console.log("I am still running!")        
            setCount(count+1)},1000)
        timerRef.current = timerId
    }

    function stop(){
        setStatus(false)
        setCount(0)
        clearInterval(timerRef.current)
    }

    function pause(){
        clearInterval(timerRef.current)
    }

    useEffect(()=>{
        if(status){
            resume()
        }
        return () => clearInterval(timerRef.current)
    },[count])


    return(
        <div className="container">
            <div className='stopwatch'>{count}</div>
            <Buttons resume={resume} pause={pause} stop={stop}></Buttons>
        </div>
    )
}


export default Timer;