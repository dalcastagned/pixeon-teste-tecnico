import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*{
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    font-family: Poppins, sans-serif;
    -webkit-tap-highlight-color: transparent;
}
`;

export default GlobalStyle