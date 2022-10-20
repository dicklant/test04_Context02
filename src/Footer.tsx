import React from "react";
import {useTheme} from "./ThemeProvider"


/*
class Footer extends React.Component {

    static contextType = ThemeContext;
    context : React.ContextType<typeof ThemeContext>;

    render() {
        const {theme , setTheme} = this.context!;

        return (
        <div>
            Change theme <button style={{backgroundColor : theme}}>OK</button>
        </div>
        );           
    }
}
*/


const Footer = () => {

   const theme = useTheme();

   return( <div>Change theme <button style={{backgroundColor : theme}}>OK</button></div>);
}


export default Footer;