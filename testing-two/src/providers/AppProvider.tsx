import { createTheme, CssBaseline, ThemeProvider } from '@mui/material'
import React from 'react'

const theme = createTheme({
  palette:{
    mode:'dark'
  }
})

const AppProvider = ({children}:{children : React.ReactNode}) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline>
        {children}
      </CssBaseline>
    </ThemeProvider>
  )
}

export default AppProvider