import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  :root {
    --background: #ffffff;
    --foreground: #171717;
  }
  @media (prefers-color-scheme: dark) {
    :root {
      --background: #0a0a0a;
      --foreground: #ededed;
    }
  }

  html, body {
    max-width: 100vw;
    overflow-x: hidden;
    font-family: 'Georgia', serif;
    background: var(--background);
    color: var(--foreground);
    padding: 0;
    margin: 0;
  }
  *, *::before, *::after {
    box-sizing: border-box;
  }
`;

export default GlobalStyle;