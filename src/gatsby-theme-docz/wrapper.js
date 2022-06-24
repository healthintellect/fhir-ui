import React from 'react'
import { MuiPickersUtilsProvider } from '@material-ui/pickers'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'
import lightBlue from '@material-ui/core/colors/lightBlue'
import MomentUtils from '@date-io/moment'

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: {
      light: lightBlue[300],
      main: lightBlue[500],
      dark: lightBlue[900],
      contrastText: '#FFF',
    },
    secondary: {
      light: lightBlue[300],
      main: lightBlue[500],
      dark: lightBlue[900],
      contrastText: '#FFF',
    },
    background: {
      default: '#f9f9f9',
    },
  },
})

const Wrapper = ({ children }) => (
  <ThemeProvider theme={theme}>
    <MuiPickersUtilsProvider utils={MomentUtils}>
      {children}
    </MuiPickersUtilsProvider>
  </ThemeProvider>
)

export default Wrapper
