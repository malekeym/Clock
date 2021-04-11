import React, {useContext} from 'react';
import Themecontext from '../../Themecontext'

function Buttons({resume, pause, stop}) {
    const [theme] = useContext(Themecontext)
    console.log(theme)
    return(
        <div id="Button-group" className="ui buttons">
            <button className= {`ui ${theme} blue basic labeled icon button`} onClick={()=>stop()}><i className="redo icon"></i>Reset</button>
            <button className= {`ui ${theme} blue basic labeled icon button`} onClick={()=>pause()}><i className="pause icon"></i>Pause</button>
            <button className= {`ui ${theme} blue basic labeled icon button`} onClick={()=>resume()}><i className="play icon"></i>Resume</button>
        </div>
    )

}

export default Buttons;