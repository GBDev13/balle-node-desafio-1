import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  #root, body {
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
  }

  body {
    background: linear-gradient(115.58deg, #00FC19 0%, #1700A4 100.22%), radial-gradient(92.72% 100% at 50% 0%, #EBFFCB 0%, #651200 100%), radial-gradient(92.72% 100% at 50% 0%, #FAFF00 0%, #820000 100%), radial-gradient(109.21% 213.32% at 100% 0%, #FF4D00 0%, #00C2FF 100%), linear-gradient(127.43deg, #D50000 0%, #7856FF 100%);
    background-blend-mode: lighten, overlay, lighten, screen, normal;
  }

  body,
  input,
  textarea,
  button {
    font: 400 1rem 'Montserrat', sans-serif;
  }
  ul {
    list-style:none;
  }
  button {
    cursor: pointer;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
`;
