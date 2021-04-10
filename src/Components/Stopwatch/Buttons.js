import React from 'react';
function Buttons({resume, pause, stop}) {
    return(
        <div id="Button-group" className="ui buttons">
            <button className="ui blue inverted basic labeled icon button" onClick={()=>stop()}><i className="redo icon"></i>Reset</button>
            <button className="ui blue inverted basic labeled icon button" onClick={()=>pause()}><i className="pause icon"></i>Pause</button>
            <button className="ui blue inverted basic labeled icon button" onClick={()=>resume()}><i className="play icon"></i>Resume</button>
        </div>
    )
}
export default Buttons;