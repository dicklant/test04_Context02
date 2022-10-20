import React from "react";
import { useTheme } from "./ThemeProvider";

const Header = () => {

        const theme = useTheme();

        return (
            <div style={{ backgroundColor: theme}}>Hello</div>
        );

}

export default Header;