
import { useContext } from "react";
import { ThemeContext }  from "./ThemeContext"
import {Content} from "./Content"


const Main = () => {
    const context =useContext(ThemeContext);
  return (
    <div>
        <button onClick={context.toggleTheme}>Toggle Theme</button>
        <Content />

    </div>
  )
}

export default Main