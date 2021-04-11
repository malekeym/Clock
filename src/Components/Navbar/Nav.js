import React, {useContext} from 'react';
import Themecontext from '../../Themecontext'
import "./Nav.css";
function Nav({setShow, show}) {
  const [theme,setTheme] = useContext(Themecontext)

  function themeHandler() {
     return((theme==="" && "inverted") || (theme==="inverted" && ""))
  }

  return (
    <div id="nav" className={`ui menu secondary ${theme} vertical pointing menu`}>
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
      <button className={`ui ${theme} item button`} onClick={()=>setTheme(themeHandler())}>changeHandler</button>
    </div>
  );
}

export default Nav;
