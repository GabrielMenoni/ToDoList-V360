import { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { DarkTheme, LightTheme } from './styles/theme'
import GlobalStyle from './styles/global'
import { Home } from './pages/home'

function App() {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    // Recupera a preferência do tema do localStorage, se existir
    const savedTheme = localStorage.getItem('theme');
    return savedTheme === 'dark';
  });

  // Alterna entre Light e Dark e armazena no localStorage
  const toggleTheme = () => {
    setIsDarkMode((prevMode) => {
      const newMode = !prevMode;
      localStorage.setItem('theme', newMode ? 'dark' : 'light');
      return newMode;
    });
  };

  return (
    <ThemeProvider theme={isDarkMode ? DarkTheme : LightTheme}>
      <GlobalStyle />
      <Home toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
    </ThemeProvider>
  )
}

export default App
