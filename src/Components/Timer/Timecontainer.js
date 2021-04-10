import React from 'react'
function Timecontainer({timer}){
    let {hour, minute, second} = timer
    return (
        <div className="row">
            <div class="element">{hour}</div>
            <div class="element">{minute}</div>
            <div class="element">{second}</div>
        </div>
    )
}
export default Timecontainer;