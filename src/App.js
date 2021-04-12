import React, {useState} from 'react'
import Themecontext from './Themecontext'
import Nav from "./Components/Navbar/Nav";
import AppContainer from './Components'
import Authentication from './Components/Authentication';
import "./App.css";


function App() {
  const [clockState, setClockState] = useState("Clock");
  const themeHook = useState("inverted")
  const isAuthHook = useState(Boolean(localStorage.getItem("name")))
  const [showAuth, setShowAuth] = useState(!isAuthHook[0])
  return (
    <div className={`App ${themeHook[0]}`}>
      <Themecontext.Provider value={[...themeHook, showAuth, setShowAuth, ...isAuthHook]}>
        <Nav setShow={setClockState} show={clockState}/>
        {(!isAuthHook[0])&&showAuth ? <Authentication isAuthHook={isAuthHook} />
                                    : <AppContainer clockState={clockState}/>}
      </Themecontext.Provider>
    </div>
  );

}

export default App;
