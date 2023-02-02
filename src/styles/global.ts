import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  *::-webkit-scrollbar {
        width: 22px;
        height: 22px;
        border-radius: 9999px;
    }

  *::-webkit-scrollbar-corner {
      background-color: transparent;  
  }

  *::-webkit-scrollbar-thumb {
      width: 6px;
      background-color: transparent;
      border-radius: 80px;
      box-shadow: inset 0 0 0px 6px ${(props) => props.theme.purple};
      border: solid 10px transparent;
  }

  :root {
    font-size: 62.5%;
    --toastify-icon-color-success: ${(props) => props.theme['purple-dark']};
  }

  body {
    background: ${(props) => props.theme.background};
    color: ${(props) => props.theme['base-text']};

    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1.6rem;
    color: ${(props) => props.theme['base-text']};
  }
`
