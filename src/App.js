import React, {useState, useContext} from 'react'
import ClockHandler from "./Components/Clock/Clock";
import Nav from "./Components/Navbar/Nav";
import Stopwatch from './Components/Stopwatch/Stopwatch'
import Timer from './Components/Timer/Timer'
import Themecontext from './Themecontext'
import "./App.css";


function App() {
  
  const themeHook = useState("inverted")
  const [clockState, setClockState] = useState("Clock");

  return (
    <div className={`App ${themeHook[0]}`}>
      <Themecontext.Provider value={themeHook}>
        <Nav setShow={setClockState} show={clockState}/>
        {clockState==="Clock"?<ClockHandler/>:null}
        {clockState==="Timer"?<Timer />:null}
        {clockState==="Stopwatch"?<Stopwatch />:null}
      </Themecontext.Provider>
    </div>
  );

}

export default App;
