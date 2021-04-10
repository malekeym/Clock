import React from 'react'
import Timecontainer from './Timecontainer'
function Showtime({timer, isEnd}){
    return (
        <div className="ui grid">
            {
                isEnd()?<div class="element End">End</div>:<Timecontainer timer={timer} />
            }
        </div>
    )
}
export default Showtime