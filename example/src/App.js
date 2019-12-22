import React from 'react'
import { Container, Grid, Typography, Link } from '@material-ui/core'
import { MuiPickersUtilsProvider } from '@material-ui/pickers'
import {
  createMuiTheme,
  makeStyles,
  ThemeProvider,
} from '@material-ui/core/styles'
import lightBlue from '@material-ui/core/colors/lightBlue'
import MomentUtils from '@date-io/moment'
import {
  PatientCard,
  PatientDetail,
  PatientTable,
  ObservationTable,
  ObservationDetail,
} from 'fhir-ui'

import { patient, patients, observation, observations } from './fhir-examples'

const useStyles = makeStyles(theme => ({
  root: {
    margin: theme.spacing(6, 0, 3),
  },
  header: {
    margin: theme.spacing(1),
  },
  body: {
    display: 'flex',
    justifyContent: 'center',
    margin: theme.spacing(1),
  },
  footer: {
    margin: theme.spacing(1),
  },
}))

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

const Copyright = () => {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://healthintellect.com/">
        Health Intellect
      </Link>
      {' 2019 - '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  )
}

const App = () => {
  const classes = useStyles()
  return (
    <ThemeProvider theme={theme}>
      <MuiPickersUtilsProvider utils={MomentUtils}>
        <Container>
          <div className={classes.header}>
            <Typography variant="h4" gutterBottom className={classes.root}>
              fhir-ui examples
            </Typography>
          </div>
          <div className={classes.body}>
            <Grid container spacing={3} direction="row">
              <Grid item xs={12} md={6}>
                <Typography variant="subtitle1" gutterBottom align="center">
                  Patient Card
                </Typography>
                <PatientCard patient={patient} />
              </Grid>
              <Grid item xs={12} md={6}>
                <Typography variant="subtitle1" gutterBottom align="center">
                  Patient Detail
                </Typography>
                <PatientDetail patient={patient} />
              </Grid>
              <Grid item xs={12}>
                <Typography variant="subtitle1" gutterBottom align="center">
                  Patient Table
                </Typography>
                <PatientTable patients={patients} />
              </Grid>
              <Grid item xs={12}>
                <Typography variant="subtitle1" gutterBottom align="center">
                  Observations Table
                </Typography>
                <ObservationTable
                  observations={observations}
                  hideActionIcons={true}
                  hideCheckboxes={true}
                  hideDevices={true}
                />
              </Grid>
              <Grid item xs={12}>
                <Typography variant="subtitle1" gutterBottom align="center">
                  Observations Detail
                </Typography>
                <ObservationDetail
                  observationId={observation.id}
                  observation={observation}
                />
              </Grid>
            </Grid>
          </div>
          <div className={classes.footer}>
            <Copyright />
          </div>
        </Container>
      </MuiPickersUtilsProvider>
    </ThemeProvider>
  )
}

export default App
