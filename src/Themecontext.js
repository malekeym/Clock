import { createContext } from "react";

const Themecontext = createContext(["dark", () => {}, false, ()=>{}, false]);

export default Themecontext;