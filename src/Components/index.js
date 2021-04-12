import React from 'react'
import ClockHandler from "./Clock/Clock";
import Stopwatch from './Stopwatch/Stopwatch'
import Timer from './/Timer/Timer'

function AppContainer({clockState}) {


    return(
        <div className="container">
            {clockState==="Clock"?<ClockHandler/>:null}
            {clockState==="Timer"?<Timer />:null}
            {clockState==="Stopwatch"?<Stopwatch />:null}
        </div>
    )


}

export default AppContainer;