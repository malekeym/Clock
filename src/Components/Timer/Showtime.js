import React from 'react'
import Timecontainer from './Timecontainer'
import Notification from "../Notification/Notification"

function Showtime({timer, isEnd}){

    return (
        <div className="ui grid">
            {
                isEnd()?<Notification>Time's up!</Notification>:<Timecontainer timer={timer} />
            }
        </div>
    )
    
}
export default Showtime