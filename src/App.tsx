import React from 'react'
import { ThemeProvider } from '@material-ui/core'
import { HeaderContainer } from './pages/header/headerContainer'
import { WhoAmIContainer } from './pages/whoAmI/whoAmIContainer'
import { MySkillsContainer } from './pages/mySkills/mySkillsContainer'
import { MyProjektsContainer } from './pages/myProjekts/myProjektsContainer'
import { CommunicationContainer } from './pages/communication/communicationContainer'
import { theme } from './theme'


export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <HeaderContainer />
      <WhoAmIContainer />
      <MySkillsContainer />
      <MyProjektsContainer />
      <CommunicationContainer />
    </ThemeProvider>
  )
}