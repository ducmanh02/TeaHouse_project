import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

export function Content(){
    const context = useContext(ThemeContext);
    console.log(context);
    return <p className={context.theme}>This is a paragraph</p>
}