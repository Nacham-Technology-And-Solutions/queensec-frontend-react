import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #cca300; /* Set the global background color */
    margin: 0;
    padding: 0;
    font-family: 'Ubuntu', sans-serif; /* Ensures consistent font across pages */
  }

  #root {
    min-height: 100vh; /* Ensures the root element fills the viewport */
  }
`;

export default GlobalStyle;
