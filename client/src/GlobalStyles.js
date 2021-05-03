import { createGlobalStyle } from "styled-components";
import { reset } from "styled-reset";

const GlobalStyles = createGlobalStyle`
  ${reset}

  html {
      scroll-behavior: smooth;
  }

  body {
    font-family: 'Noto Sans KR', sans-serif;
    position: relative;
    background: rgb(47, 54, 64);
  }

  button, input, textarea {
    font-family: 'Noto Sans KR', sans-serif;
  }
`;

export default GlobalStyles;
