import React from 'react';
import "./Nav.css";
function Nav({setShow, show}) {
  return (
    <div id="nav" className="ui inverted menu secondary vertical pointing menu">
      <a className={`${show==="Clock" && "active"} item`} onClick={()=>setShow("Clock")}>
        <i className="clock icon"></i>
        Clock
      </a>
      <a className={`${show==="Timer" && "active"} item`} onClick={()=>setShow("Timer")}>
        <i className="hourglass icon"></i>
        Timer
      </a>
      <a className={`${show==="Stopwatch" && "active"} item`} onClick={()=>setShow("Stopwatch")}>
        <i className="stopwatch icon"></i>
        Stopwatch
      </a>
    </div>
  );
}

export default Nav;
