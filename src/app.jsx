import React, { useState } from 'react';
import './app.css';
import Contteiners from './components/info/Contteiners';
import Header from './components/logotip/header/Header';
import Search, { Appp } from './components/logotip/search/SearchInput';
import Home from './components/short/home/Home';

export const App = React.memo(() => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <div className={`App ${theme}`}>
      <Appp theme={theme} toggleTheme={toggleTheme} />
      <Search theme={theme} />
      <div className="frent">
        <Home theme={theme} />
        <div className="url">
          <Header theme={theme} />
          <Contteiners theme={theme} />
        </div>
      </div>
    </div>
  );
})
