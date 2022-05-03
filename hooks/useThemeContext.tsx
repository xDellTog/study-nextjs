import { useContext } from "react";
import { ThemeContext } from "../providers/ThemeProvider";

export default function useThemeContext() {
    const { theme, toggleTheme } = useContext(ThemeContext);

    return {
        theme,
        toggleTheme
    }
}