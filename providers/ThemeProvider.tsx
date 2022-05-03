import { createContext, useEffect, useState } from "react";
import { darkTheme, lightTheme, styled } from "../stitches.config";

export type ThemeContextType = {
    theme: string,
    toggleTheme: () => void
}

export type ThemeProviderType = {
    children: JSX.Element,
}

export const ThemeContext = createContext({} as ThemeContextType);

export const ThemeProviderRoot = styled('div', {
    fontFamily: '$system',
    backgroundColor: '$background',
    color: '$gray12',
    minHeight: '100vh',
});

export function ThemeProvider({ children }: ThemeProviderType) {
    const [theme, setTheme] = useState<any>(lightTheme);

    useEffect(() => {
        initMatchMedia();
    }, []);

    function toggleTheme() {
        if (theme === lightTheme) {
            setTheme(darkTheme);
        } else {
            setTheme(lightTheme);
        }
    }

    function initMatchMedia() {
        if (window.matchMedia) {
            if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
                setTheme(darkTheme);
            } else {
                setTheme(lightTheme);
            }

            window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
                if (e.matches) {
                    setTheme(darkTheme);
                } else {
                    setTheme(lightTheme);
                }
            });
        }
    }

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            <ThemeProviderRoot className={theme}>
                {children}
            </ThemeProviderRoot>
        </ThemeContext.Provider>
    )
}