import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    min-height: 100%;
    background: var(--background);
  }

  *, button, input{
    border: 0;
    background: none;
    font-family: 'Quicksand', 'Dosis', sans-serif;
    color: var(--text-primary);
  }

  ul {
    list-style: none;
  }

  a {
    text-decoration: none;
  }

  :root {
    --primary:  #365A74;
    --background: #2e51bb;
    --shadow: rgba(66, 153, 225, 0.5);
    --text-primary: #2D3748;
    --card-background: #fafafa;
    --search-input-bg: #D2DFEA;

    --nav-size: 6rem;
  }
  
`;

