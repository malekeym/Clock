import React, {useEffect, useState} from 'react'
import './Notification.css'

function Notification (props) {

    const [percent, setPercent] = useState(0)
    let progStyle ={width:`${percent}%`}


    useEffect(()=>{
        if(percent<98){
            setTimeout(()=>{
                setPercent(percent+2)
            },20)
        }
    })


    return(
        <div className="max">
            <div className="content">{props.children}</div>
            <span style={progStyle} className="progressBar"></span>
        </div>
    )
    
}


export default Notification;