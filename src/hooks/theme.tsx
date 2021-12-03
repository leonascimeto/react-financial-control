import React, { createContext, useState, useContext } from 'react';
import dark from '../styles/themes/dark';
import ligth from '../styles/themes/ligth';

interface ITheme {
  title: string;
  colors: {
    primary: string;
    secondary: string;
    terciary: string;

    white: string;
    black: string;
    gray: string;

    success: string;
    info: string;
    warning: string;
  },
}
interface IThemeContext {
  toggleTheme(): void;
  theme: ITheme;
}

const ThemeContext = createContext<IThemeContext>({} as IThemeContext);


const ThemeProvider: React.FC = ({ children }) => {
  const [theme, setTheme] = useState<ITheme>(() => {
    const themeSaved = localStorage.getItem('@financial-control:theme');

    if (themeSaved) {
      return JSON.parse(themeSaved)
    } else {
      return dark;
    }
  });

  const toggleTheme = () => {
    if (theme.title === 'dark') {
      setTheme(ligth);
      localStorage.setItem('@financial-control:theme', JSON.stringify(ligth));
    } else {
      setTheme(dark);
      localStorage.setItem('@financial-control:theme', JSON.stringify(dark));
    }
  }

  return (
    <ThemeContext.Provider value={{ toggleTheme, theme }}>
      {children}
    </ThemeContext.Provider>
  )
}

function useTheme(): IThemeContext {
  const context = useContext(ThemeContext);

  return context;
}

export { ThemeProvider, useTheme };


