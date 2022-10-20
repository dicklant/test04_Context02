import * as React from "react";

const defaultTheme = "white";
export const ThemeContext = React.createContext(defaultTheme);

type Props = {
    children: React.ReactNode;
};

export const ThemeProvider = ({children} : Props) => {
    const [theme, setTheme] = React.useState(defaultTheme);

    React.useEffect(() => {
        const currentTheme = "yellow";
        setTheme(currentTheme);
    }, []);

    return(
        <ThemeContext.Provider value={theme}>
            {children}
        </ThemeContext.Provider>
    );
}


export const useTheme = () => React.useContext(ThemeContext);

export default ThemeProvider
