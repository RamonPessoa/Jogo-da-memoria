import { createGlobalStyle } from 'styled-components';
import pokemon from '@fonts/Pokemon_Hollow.ttf';

export const GlobalStyle = createGlobalStyle`

@font-face {
  font-family: pokemon;
  src: url(${pokemon});
}

:root {
  --color-orange: #EE9430;
  --color-orange: #EE9430;
  --color-orange: #EE9430;
}

body {
  background-color: ${(props) => props.theme.colors.background};
  color: ${(props) => props.theme.colors.font_normal};
}

h1 {
  font-family: pokemon;
  letter-spacing: 3px;
  color: ${(props) => props.theme.colors.font_orange};
}
`;
