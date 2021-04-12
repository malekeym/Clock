import React, {useContext, useState} from 'react';
import Themecontext from '../../Themecontext'
import Notification from '../Notification/Notification'
import Modal from '../Modal'

import "./Nav.css";
function Nav({setShow, show}) {


  const [theme,setTheme, showAuth, setShowAuth, isAuth, setAuth] = useContext(Themecontext)
  const [showModal, setShowModal] = useState(false)


  function themeHandler() {
     return((theme==="" && "inverted") || (theme==="inverted" && ""))
  }


  let buttonColor =()=>isAuth?"red":"green";

  return (
    showModal? 
    (<Modal>
        <div>
          <h3>Do You really want to logout?</h3>
          <div className="ui buttons">
            <button className="ui button positive"onClick={()=>{setShowAuth(true);localStorage.removeItem("name");setShowModal(false);setAuth(false)}}>Yes</button>
            <div className="or" />
            <button className="ui button red"onClick={()=>{setShowModal(false)}}>No</button>
          </div>
        </div>
      </Modal>):
      (<div id="nav" className={`ui menu secondary ${theme} vertical pointing menu`}>
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
        <div className="Login">
          {isAuth?<span className="ui teal label">{`${localStorage.getItem('name')}`}</span>:null}
          <button className={`ui detail ${buttonColor()} button`} onClick={() => isAuth?setShowModal(true):null}>{isAuth?"Log Out":"Log in"}</button>
        </div>
      </div>)
  );
}

export default Nav;
