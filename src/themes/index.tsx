import React from 'react'
import { ThemeType } from 'typings'
import { ThemeProvider } from 'styled-components'
import { Normalize } from 'styled-normalize'
import { GlobalStyle } from './style';

const theme = {

}

export default function Theme({ children }:ThemeType) {

    return <ThemeProvider theme={theme}>
        <Normalize />
        <GlobalStyle />
        {children}
    </ThemeProvider>
}