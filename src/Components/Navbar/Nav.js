import "./Nav.css";
function Nav(props) {
  return (
    <div id="nav" className="ui inverted menu secondary vertical pointing menu">
      <a className="active item" onClick={()=>props.setShow("Clock")}>
        <i className="clock icon"></i>
        Clock
      </a>
      <a className="item" onClick={()=>props.setShow("Timer")}>
        <i className="hourglass icon"></i>
        Timer
      </a>
      <a className="item" onClick={()=>props.setShow("Stopwatch")}>
        <i className="stopwatch icon"></i>
        Stopwatch
      </a>
    </div>
  );
}
export default Nav;
