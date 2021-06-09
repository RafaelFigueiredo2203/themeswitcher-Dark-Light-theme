import Head from 'next/head'

import styled, { ThemeProvider } from 'styled-components';
import usePersistedState from '../utils/usePersistedState';

import light from '../styles/themes/light';
import dark from '../styles/themes/dark';

import Header from '../components/Header'
import GlobalStyle from '../styles/global';


export default function Home() {
  const [theme, setTheme] = usePersistedState('theme', light);

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light);
  }

  return (
    <ThemeProvider theme={theme}>
    <div  >
      <GlobalStyle/>
    
      <Header toggleTheme={toggleTheme}/>

    </div>
    </ThemeProvider>
  );
}
