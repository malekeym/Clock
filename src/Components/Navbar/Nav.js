import React, {useContext} from 'react';
import Themecontext from '../../Themecontext'
import Notification from '../Notification/Notification'
import "./Nav.css";
function Nav({setShow, show}) {
  const [theme,setTheme, showAuth, setShowAuth, isAuth, setAuth] = useContext(Themecontext)
  function themeHandler() {
     return((theme==="" && "inverted") || (theme==="inverted" && ""))
  }

  let buttonColor =()=>isAuth?"red":"green";

  return (
    <div id="nav" className={`ui menu secondary ${theme} vertical pointing menu`}>
      <a className={`${show==="Clock" && "active"} item`} onClick={()=>isAuth?setShow("Clock"):null}>
        <i className="clock icon"></i>
        Clock
      </a>
      <a className={`${show==="Timer" && "active"} item`} onClick={()=>isAuth?setShow("Timer"):null}>
        <i className="hourglass icon"></i>
        Timer
      </a>
      <a className={`${show==="Stopwatch" && "active"} item`} onClick={()=>isAuth?setShow("Stopwatch"):null}>
        <i className="stopwatch icon"></i>
        Stopwatch
      </a>
      <button className={`ui ${theme} item button`} onClick={()=>setTheme(themeHandler())}>changeHandler</button>
      <button className={`ui ${buttonColor()} Login button`} onClick={()=>isAuth?setAuth(false):null}>{isAuth?"Log Out":"Log in"}</button>
    </div>
  );
}

export default Nav;
