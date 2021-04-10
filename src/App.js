import React, {useState} from 'react'
import ClockHandler from "./Components/Clock/Clock";
import "./App.css";
import Nav from "./Components/Navbar/Nav";
import Timer from './Components/Timer/Timer'
function App() {
  const [clockState, setClockState] = useState("Clock");
  return (
    <div className="App">
      <Nav setShow={setClockState} show={clockState}/>
      {clockState==="Clock"?<ClockHandler/>:null}
      {clockState==="Timer"?<Timer />:null}
    </div>
  );
}
export default App;
