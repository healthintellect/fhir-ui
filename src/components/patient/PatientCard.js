import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { Grid, TextField, Card, Paper, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import CustomDatePicker from '../../components/table/CustomDatePicker'

const PatientCard = ({ patient, detailLink, fieldVariant }) => {
  const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      margin: theme.spacing(1),
      marginRight: theme.spacing(3),
    },
    paper: {
      margin: theme.spacing(1),
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
    },
    link: {
      color: theme.palette.primary.main,
      textDecoration: 'none',
      '&:hover': {
        textDecoration: 'underline',
      },
    },
    avatar: {
      position: 'relative',
      zIndex: 10,
      transition: '1s',
      width: '100%',
      height: '100%',
      objectFit: 'cover',
    },
    photo: {
      position: 'relative',
      height: '160px',
      width: '160px',
      left: '-20px',
      top: '-30px',
      zIndex: 10,
    },
    grid: {
      flexGrow: 1,
    },
  }))

  const classes = useStyles()
  const [currentPatient, setCurrentPatient] = useState({
    fullName: '',
    familyName: '',
    givenName: '',
    email: '',
    birthdate: {},
    gender: '',
    avatar: '',
    identifier: '',
  })

  useEffect(() => {
    const familyName = Array.isArray(patient.name[0].family)
      ? patient.name[0].family[0]
      : patient.name[0].family
    const givenName = Array.isArray(patient.name[0].given)
      ? patient.name[0].given[0]
      : patient.name[0].given
    const fullName = patient.name[0]?.text
      ? patient.name[0].text
      : givenName + ' ' + familyName
    setCurrentPatient(prevPatient => ({
      ...prevPatient,
      fullName,
      familyName,
      givenName,
      email: patient.telecom
        .map(el => (el.system === 'email' ? el.value : ''))
        .filter(el => !!el),
      birthdate: patient.birthDate,
      gender: patient.gender,
      avatar: patient.photo
        ? patient.photo[0].url
        : 'https://cdn1.iconfinder.com/data/icons/user-pictures/100/unknown-512.png',
      identifier: patient.identifier[0]?.value
        ? patient.identifier[0]?.value
        : patient.id
        ? patient.id
        : patient.identifier
        ? patient.identifier
        : 'Unknown',
    }))
  }, [patient])

  const updateCurrentPatient = e => {
    e.preventDefault()
    setCurrentPatient(prevPatient => ({
      ...prevPatient,
      [e.target.name]: e.target.value,
    }))
  }

  const handleDateChange = date => {
    setCurrentPatient(prevPatient => ({
      ...prevPatient,
      birthdate: date,
    }))
  }

  return (
    <Paper className={classes.paper}>
      <Grid container spacing={1} direction="row">
        <Grid item>
          <Card className={classes.photo}>
            <img
              id="avatarImage"
              src={currentPatient.avatar}
              className={classes.avatar}
            />
          </Card>
        </Grid>
        <Grid item xs>
          <form className={classes.root} noValidate autoComplete="off">
            <Grid container direction="row" spacing={1}>
              <Grid item xs={12}>
                <TextField
                  id="patientCardIdInput"
                  name="identifier"
                  label="Patient ID"
                  margin="normal"
                  className={classes.textField}
                  value={currentPatient.identifier}
                  onChange={updateCurrentPatient}
                  fullWidth
                  disabled
                  variant={fieldVariant}
                  size="small"
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  id="givenNameInput"
                  name="givenName"
                  label="Given Name"
                  margin="normal"
                  className={classes.textField}
                  value={currentPatient.givenName}
                  onChange={updateCurrentPatient}
                  fullWidth
                  variant={fieldVariant}
                  size="small"
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  id="familyNameInput"
                  name="familyName"
                  label="Family Name"
                  margin="normal"
                  className={classes.textField}
                  value={currentPatient.familyName}
                  onChange={updateCurrentPatient}
                  fullWidth
                  variant={fieldVariant}
                  size="small"
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <CustomDatePicker
                  date={currentPatient.birthdate}
                  displayDatePicker={true}
                  changeState={handleDateChange}
                  className={classes.textField}
                  name="birthDate"
                  label="Birthdate"
                  fieldVariant={fieldVariant}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  id="genderInput"
                  name="gender"
                  label="Gender"
                  margin="normal"
                  className={classes.textField}
                  value={currentPatient.gender}
                  onChange={updateCurrentPatient}
                  fullWidth
                  variant={fieldVariant}
                  size="small"
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </Grid>
            </Grid>
            {detailLink && (
              <Typography variant="caption">
                Additional patient details are available
                <br />
                <a
                  href="#secondary-heading-and-columns"
                  className={classes.link}
                >
                  See patient details
                </a>
              </Typography>
            )}
          </form>
        </Grid>
      </Grid>
    </Paper>
  )
}

PatientCard.propTypes = {
  patient: PropTypes.object,
  detailLink: PropTypes.string,
  fieldVariant: PropTypes.string,
}

export default PatientCard
