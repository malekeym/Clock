import React, {useEffect, useState, useRef} from 'react'
import Inputs from './Inputs'
import Showtime from './Showtime'
import './Timer.css'
function Timer() {
    const [timer, setTimer] = useState({hour:0, minute:2, second:30})
    const [show, setShow] = useState(false)
    let timeRef = useRef();


    function isEnd(){
        return (timer.second===0 && timer.minute===0 && timer.hour===0);
    }


    function dec(){
        console.log("I am still run!!!")
        if(!show){
            clearInterval(timeRef.current)
        }
        if(timer.second!==0){
            setTimer(prevState => {
                let newState = {...prevState}
                newState.second = timer.second-1;
                return newState
            })
        }else{
            setTimer(prevState => {
                let newState = {...prevState}
                newState.second = 59;
                let newMinute = timer.minute-1;
                if(timer.minute===0){
                    newMinute = 59
                }
                newState.minute = newMinute;
                let newHour = timer.hour-1;
                if(timer.hour===0){
                    newHour = 0
                }
                newState.hour = newHour;
                return newState
            })
        }
    }

    function reset(e){
        setTimer({hour:0, minute:2, second:30})
        setShow(false)
    }

    useEffect(()=>{
        if(show && !isEnd()){
            let timeCounter = setInterval(()=>dec(),1000)
            timeRef.current = timeCounter
        }
        return () => {
            clearInterval(timeRef.current)
        }
    },[timer, show])

    function changeHandler(e){
        let val = +e.target.value;
        if( val === ""){
            val = 0;
        }
        setTimer(currentState => {
            currentState[e.target.id] = val;
            let newState = {...currentState}
            return newState
            });
    }


    return(
        <div className="timer">
            {show ? <Showtime timer = {timer} isEnd={isEnd}/> : <Inputs timer={timer} changeHandler={changeHandler}/>}
            {!isEnd()?(
            <div><button className="ui green button" onClick={(e)=>{setShow(true)}}>Start</button>
            <button className="ui red button" onClick={(e)=>{setShow(false)}}> Stop</button></div>):
            <button className="ui blue button" onClick={(e)=>{reset()}}> Restart</button>
            }
        </div>
    )
    
}

export default Timer;