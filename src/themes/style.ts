import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    html, body, #root {
        display: block;
        min-height: 100vh;
    }
    
    html {
        font-family: 'Roboto', sans-serif;
        font-size: 16px;
    }

    :focus {
        outline: none;
    }
`