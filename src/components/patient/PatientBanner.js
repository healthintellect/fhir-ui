import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { Grid, TextField, Card, Paper, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import moment from 'moment'
import CustomDatePicker from '../table/CustomDatePicker'

const PatientBanner = ({ patient }) => {
  const useStyles = makeStyles(theme => ({
    root: {
      display: 'flex',
    },
    margin: {
      margin: theme.spacing(2),
      padding: theme.spacing(1),
    },
    deceasedIndicator: {
      position: 'float',
      color: 'red',
      margin: theme.spacing(1),
    },
  }))

  const classes = useStyles()
  const [currentPatient, setCurrentPatient] = useState({
    prefix: '',
    familyName: '',
    givenName: '',
    suffix: '',
    identifier: '',
    deceased: false,
    multipleBirth: false,
    maritalStatus: '',
    species: '',
    language: '',
    gender: '',
    phone: [],
    email: [],
    birthDate: {},
    photo: '',
  })

  useEffect(() => {
    dehydratePatientResource(patient)
  }, [patient])

  const dehydratePatientResource = patient => {
    if (patient && Object.keys(patient).length !== 0) {
      setCurrentPatient(prevCurrentPatient => ({
        ...prevCurrentPatient,
        prefix: Array.isArray(patient.name[0]?.prefix)
          ? patient.name[0].prefix[0]
          : patient.name[0].prefix,
        familyName: Array.isArray(patient.name[0]?.family)
          ? patient.name[0].family[0]
          : patient.name[0].family,
        givenName: Array.isArray(patient.name[0]?.given)
          ? patient.name[0].given[0]
          : patient.name[0].given,
        suffix: Array.isArray(patient.name[0]?.suffix)
          ? patient.name[0].suffix[0]
          : patient.name[0].suffix,
        identifier: patient.identifier[0].value,
        identifierType: patient.identifier[0]?.type?.coding[0]?.code,
        deceased: patient.deceasedBoolean,
        multipleBirth: patient.multipleBirthBoolean,
        gender: patient.gender,
        maritalStatus: patient.maritalStatus.text,
        address1: Array.isArray(patient.address)
          ? Array.isArray(patient.address[0]?.line)
            ? patient.address[0]?.line[0]
            : patient.address[0]?.line
            ? patient.address[0]?.line
            : ''
          : '',
        address2: Array.isArray(patient.address)
          ? Array.isArray(patient.address[0]?.line)
            ? patient.address[0]?.line[1]
            : patient.address[0]?.line
            ? patient.address[0]?.line
            : ''
          : '',
        city: Array.isArray(patient.address)
          ? patient.address[0]?.city
          : patient.address
          ? patient.address.line
          : '',
        state: Array.isArray(patient.address)
          ? patient.address[0]?.state
          : patient.address
          ? patient.address?.state
          : '',
        postalCode: Array.isArray(patient.address)
          ? patient.address[0]?.postalCode
          : patient.address
          ? patient.address?.postalCode
          : '',
        country: Array.isArray(patient.address)
          ? patient.address[0]?.country
          : patient.address
          ? patient.address?.country
          : '',
        species: patient.animal?.species?.text,
        language: Array.isArray(patient.communication)
          ? patient.communication[0]?.language?.text
          : '',
        photo: patient.photo ? patient.photo[0].url : '',
        phone:
          Array.isArray(patient.telecom) &&
          patient.telecom
            .map(el => (el.system === 'phone' ? el.value : ''))
            .filter(el => !!el),
        email:
          Array.isArray(patient.telecom) &&
          patient.telecom
            .map(el => (el.system === 'email' ? el.value : ''))
            .filter(el => !!el),
        birthDate: patient.birthDate,
      }))
    }
  }

  return (
    <Paper>
      <Grid container spacing={1} className={classes.margin}>
        <Grid item xs={12} md={6}>
          <Grid container spacing={1} direction="column">
            <Grid item>
              <Grid container spacing={1} direction="row">
                {currentPatient.identifier && (
                  <Grid item>
                    <Typography variant="caption">
                      ID: {currentPatient.identifier}
                    </Typography>
                  </Grid>
                )}
                {currentPatient.mrn && (
                  <Grid item>
                    <Typography variant="caption">
                      MRN: {currentPatient.mrn}
                    </Typography>
                  </Grid>
                )}
              </Grid>
              <Typography variant="h4">
                {currentPatient.givenName} {currentPatient.middleName}{' '}
                {currentPatient.familyName}{' '}
                {currentPatient.deceasedDateTime && (
                  <span>
                    <h6 className={classes.deceasedIndicator}>
                      DECEASED{' '}
                      {moment(currentPatient.deceasedDateTime).format(
                        'MM/DD/YYYY @ HH:mm:ss',
                      )}
                    </h6>
                  </span>
                )}
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="body1">
                {currentPatient.address1} {currentPatient.address2}
              </Typography>
              <Typography variant="body1">
                {currentPatient.city}
                {currentPatient.state && ','} {currentPatient.state}{' '}
                {currentPatient.postalCode}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} md={6}>
          <Grid container spacing={1} direction="column">
            <Grid item>
              <Typography variant="body1">
                Age: {moment().diff(currentPatient.birthDate, 'years')} / Birth
                Date: {moment(currentPatient.birthDate).format('MM/DD/YYYY')}
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="body1">
                Gender: {currentPatient.gender}
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="body1">
                Email:{' '}
                {currentPatient.email.length > 0 &&
                  currentPatient.email.join(', ')}
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="body1">
                Phone:{' '}
                {currentPatient.phone.length > 0 &&
                  currentPatient.phone.join(', ')}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  )
}

PatientBanner.propTypes = {
  patient: PropTypes.object,
}

export default PatientBanner
