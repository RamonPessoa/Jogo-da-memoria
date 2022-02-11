import React from 'react';
import { ThemeProvider } from 'styled-components';
import Render from '@components/Render';
import { ResetCSS } from '@styles/reset';
import { GlobalStyle } from '@styles/global';
import { theme } from '@styles/themes';
import LevelContext from '@contexts/LevelContext';
import GameBoard from '@contexts/GameContext';

function App() {
  return (
    <LevelContext>
      <GameBoard>
        <ThemeProvider theme={theme}>
          <ResetCSS />
          <GlobalStyle />
          <Render />
        </ThemeProvider>
      </GameBoard>
    </LevelContext>
  );
}

export default App;
