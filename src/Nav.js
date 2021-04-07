import './Nav.css'
function Nav (){
    return(
    <div id ="nav" className="ui inverted menu secondary vertical pointing menu">
        <a className="active item">
            <i className="clock icon"></i>
            Clock
        </a>
        <a className="item">
            <i className="hourglass icon"></i>
            Timer
        </a>
        <a className="item">
            <i className="stopwatch icon"></i>
            Stopwatch
        </a>
    </div>
    )
}
export default Nav;