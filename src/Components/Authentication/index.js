import React, {useEffect, useState, useRef, useContext} from 'react'
import Notification from '../Notification/Notification'
import Themecontext from '../../Themecontext'
import "./Auth.css"

function Authentication({isAuthHook}) {

    let timeRef = useRef()
    const [isAuth, setAuth] = isAuthHook
    const [authHandle, setAuthHandle] = useState(isAuth)
    const [userInfo, setUserInfo] = useState({Email:"", Password:""})
    const [showNotif, setShowNotif] = useState(false)
    const [theme] = useContext(Themecontext)

    function OnInputChange(e){
        setUserInfo((currentState) =>{
            let newState = {...currentState};
            newState[e.target.name] = e.target.value
            return newState
        })
    }


    let checkAuth = async(e) => {
        e.preventDefault()
        let data = await fetch("https://jsonplaceholder.typicode.com/users").then(res=>res.json())
        let user = data.find((item)=> item.email===userInfo.Email && item.phone===userInfo.Password)
        setShowNotif(true)
        if(user!==undefined){
            localStorage.setItem("name", user.name)
        }
        setUserInfo({Email:"", Password:""})
        setAuthHandle(user!==undefined)
        let timeId = setTimeout(()=>{setAuth(user!==undefined);setShowNotif(false)},1500)
        timeRef.current = timeId
    }

    useEffect(()=>()=>clearTimeout(timeRef.current),[])


    return(
        <div className={`container ${theme==="inverted" ?"dark":null}`}>
            <h1>Login Page</h1>
            <form className={`ui form ${theme}`}>
                <div className="field">
                    <label htmlFor="mail">Email : </label>
                    <input id="mail" name="Email" type="email" placeholder="Your Email" value={userInfo.Email} onChange={OnInputChange}></input>
                </div>
                <div className="field">
                    <label htmlFor="pass">password: </label>
                    <input id="pass" name="Password" type="password" placeholder="Your Password" value={userInfo.Password} onChange={OnInputChange}></input>
                </div>
                <button className="ui button green" type="submit" onClick={checkAuth}>Submit</button>
                
            </form>
            {showNotif?<Notification>{authHandle?"Successfully Login":"Email or Password not match"}</Notification>:null}
        </div>
    )
}

export default Authentication