import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: "SUIT";
    font-weight: 400;
    src: url("/assets/fonts/SUIT-Regular.woff2") format("woff2");
  }

  @font-face {
    font-family: "SUIT";
    font-weight: 500;
    src: url("/assets/fonts/SUIT-Medium.woff2") format("woff2");
  }

   @font-face {
    font-family: "SUIT";
    font-weight: 600;
    src: url("/assets/fonts/SUIT-SemiBold.woff2") format("woff2");
  }

  @font-face {
    font-family: "SUIT";
    font-weight: 700;
    src: url("/assets/fonts/SUIT-Bold.woff2") format("woff2");
  }

  html {
    margin: 0;
    padding: 0;
    font-size: 62.5%;
  }

  body {
    margin: 0;
    font-size: 1rem;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: #FFFFFF;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }
`;

export default GlobalStyle;