import React from 'react'
import './Timer.css'
function Inputs({changeHandler, timer}) {
    let {hour, minute, second} = timer
    return(
        <div className="group">
            <div className="timer inp">
                <input value={hour} type="number" id="hour" min="0" max="10" onChange={(e)=>changeHandler(e)}/>
                <label htmlFor="hour">hour</label>
            </div>
            <div className="timer inp">
                <input value={minute} type="number" id="minute" min="0" max="60" onChange={(e)=>changeHandler(e)}/>
                <label htmlFor="minute">minute</label>
            </div>
            <div className="timer inp">
                <input value={second} type="number" id="second" min="0" max="60" onChange={(e)=>changeHandler(e)}/>
                <label htmlFor="second">second</label>
            </div>
        </div>
    )
}
export default Inputs;