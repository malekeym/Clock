import React from 'react'
function Timecontainer({timer}){
    let {hour, minute, second} = timer
    return (
        <div className="row">
            <div className="element">{hour}</div>
            <div className="element">{minute}</div>
            <div className="element">{second}</div>
        </div>
    )
}
export default Timecontainer;