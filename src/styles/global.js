import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    min-height: 100%;
  }

  body {
    background: #3B5BFD;
    -webkit-font-smoothing: antialiased !important;
  }

  body, button, input {
    color: #222;
    font-size: 14px;
    font-family: Arial, Helvetica, sans-serif;
  }

  button {
    cursor: pointer;
  }

  .container-load {
    display: flex;
    justify-content: center;
    padding: 40px 0;
  }
`;
