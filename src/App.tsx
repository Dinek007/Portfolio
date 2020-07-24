import React from 'react'
import { ThemeProvider } from '@material-ui/core'
import { HeaderContainer } from './pages/header/headerContainer'

import { theme } from './theme'


export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <HeaderContainer></HeaderContainer>

    </ThemeProvider>
  )
}