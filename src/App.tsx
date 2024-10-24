import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { DarkTheme, LightTheme } from './styles/theme';
import GlobalStyle from './styles/global';
import { Home } from './pages/Home';
import { NotFound } from './pages/NotFound';

function App() {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme === 'dark';
  });

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
      <Router>
        <Routes>
          <Route path="/" element={<Home toggleTheme={toggleTheme} isDarkMode={isDarkMode} />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
