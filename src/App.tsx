import React from 'react';
import { ThemeProvider } from 'styled-components';
import Render from '@components/Render';
import { ResetCSS } from '@styles/reset';
import { GlobalStyle } from '@styles/global';
import { theme } from '@styles/themes';
import CardContext from '@contexts/CardContext';
import LevelContext from '@contexts/LevelContext';

function App() {
  return (
    <LevelContext>
      <CardContext>
        <ThemeProvider theme={theme}>
          <ResetCSS />
          <GlobalStyle />
          <Render />
        </ThemeProvider>
      </CardContext>
    </LevelContext>
  );
}

export default App;
