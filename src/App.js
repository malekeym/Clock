import React, {useState} from 'react'
import ClockHandler from "./Components/Clock/Clock";
import Nav from "./Components/Navbar/Nav";
import Stopwatch from './Components/Stopwatch/Stopwatch'
import Timer from './Components/Timer/Timer'
import "./App.css";


function App() {

  const [clockState, setClockState] = useState("Clock");

  return (
    <div className="App">
      <Nav setShow={setClockState} show={clockState}/>
      {clockState==="Clock"?<ClockHandler/>:null}
      {clockState==="Timer"?<Timer />:null}
      {clockState==="Stopwatch"?<Stopwatch />:null}
    </div>
  );

}

export default App;
