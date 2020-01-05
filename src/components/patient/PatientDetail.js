import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import {
  Grid,
  Card,
  CardActions,
  CardContent,
  Checkbox,
  TextField,
  Button,
  RadioGroup,
  Radio,
  FormGroup,
  FormLabel,
  FormControl,
  FormControlLabel,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import moment from 'moment'
import CustomDatePicker from '../table/CustomDatePicker'

const useStyles = makeStyles(theme => ({
  root: {
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
  grid: {
    flexGrow: 1,
  },
  actionButtons: {
    margin: theme.spacing(1),
  },
}))

const PatientDetail = ({
  onUpsert,
  onCancel,
  onDelete,
  patient,
  fieldVariant,
}) => {
  const classes = useStyles()
  const [patientId, setPatientId] = useState(false)
  const [currentPatient, setCurrentPatient] = useState({
    resourceType: 'Patient',
    name: [
      {
        text: '',
        prefix: [''],
        family: [''],
        given: [''],
        suffix: [''],
        resourceType: 'HumanName',
      },
    ],
    active: true,
    gender: '',
    birthDate: '',
    address1: '',
    address2: '',
    city: '',
    state: '',
    postalCode: '',
    country: '',
    photo: [
      {
        url: '',
      },
    ],
    identifier: [
      {
        use: 'usual',
        type: {
          coding: [
            {
              system: 'http://hl7.org/fhir/v2/0203',
              code: 'MR',
            },
          ],
        },
        value: '',
      },
    ],
    deceasedBoolean: false,
    multipleBirthBoolean: false,
    maritalStatus: {
      text: '',
    },
    telecom: [
      {
        use: 'phone',
      },
    ],
    contact: [],
    animal: {
      species: {
        text: 'Human',
      },
    },
    communication: [
      {
        language: {
          text: 'English',
        },
      },
    ],
    careProvider: [
      {
        display: '',
        reference: '',
      },
    ],
    managingOrganization: {
      reference: '',
      display: '',
    },
  })
  const [form, setForm] = useState({
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
    phone: '',
    birthDate: {},
    photo: '',
  })

  useEffect(() => {
    dehydratePatientResource(patient)
    setPatientId(patient.identifier[0].value)
  }, [currentPatient, patientId])

  const dehydratePatientResource = patient => {
    setForm(prevForm => ({
      ...prevForm,
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
      birthDate: patient.birthDate,
    }))
  }

  const changeState = e => {
    e.persist && e.persist()
    let patientData = currentPatient

    if (moment.isMoment(e)) {
      setForm(prevForm => ({
        ...prevForm,
        birthDate: moment(e).format('YYYY-MM-DD'),
      }))
      patientData.birthDate = moment(e).format('YYYY-MM-DD')
    } else {
      switch (e.target.name) {
        case 'prefix':
          setForm(prevForm => ({
            ...prevForm,
            [e.target.name]: e.target.value,
          }))
          patientData.name[0].prefix[0] = e.target.value
          break
        case 'familyName':
          setForm(prevForm => ({
            ...prevForm,
            [e.target.name]: e.target.value,
          }))
          patientData.name[0].family[0] = e.target.value
          break
        case 'givenName':
          setForm(prevForm => ({
            ...prevForm,
            [e.target.name]: e.target.value,
          }))
          patientData.name[0].given[0] = e.target.value
          break
        case 'suffix':
          setForm(prevForm => ({
            ...prevForm,
            [e.target.name]: e.target.value,
          }))
          patientData.name[0].suffix[0] = e.target.value
          break
        case 'identifier':
          setForm(prevForm => ({
            ...prevForm,
            [e.target.name]: e.target.value,
          }))
          patientData.identifier[0].value = e.target.value
          break
        case 'deceased':
          setForm(prevForm => ({
            ...prevForm,
            [e.target.name]: e.target.value,
          }))
          patientData.deceasedBoolean = e.target.checked
          break
        case 'multipleBirth':
          setForm(prevForm => ({
            ...prevForm,
            [e.target.name]: e.target.value,
          }))
          patientData.multipleBirthBoolean = e.target.checked
          break
        case 'gender':
          setForm(prevForm => ({
            ...prevForm,
            [e.target.name]: e.target.value,
          }))
          patientData.gender = e.target.value
          break
        case 'maritalStatus':
          setForm(prevForm => ({
            ...prevForm,
            [e.target.name]: e.target.value,
          }))
          patientData.maritalStatus.text = e.target.value
          break
        case 'species':
          setForm(prevForm => ({
            ...prevForm,
            [e.target.name]: e.target.value,
          }))
          patientData.animal.species.text = e.target.value
          break
        case 'language':
          setForm(prevForm => ({
            ...prevForm,
            [e.target.name]: e.target.value,
          }))
          patientData.communication[0].language.text = e.target.value
          break
        case 'photo':
          setForm(prevForm => ({
            ...prevForm,
            [e.target.name]: e.target.value,
          }))
          patientData.photo[0].url = e.target.value
          break
        case 'phone':
          setForm(prevForm => ({
            ...prevForm,
            [e.target.name]: e.target.value,
          }))
          patientData.telecom[0].value = e.target.value
          break
        default:
          break
      }
    }

    setCurrentPatient(patientData)
  }

  const handleSaveButton = () => {
    if (onUpsert) {
      onUpsert(currentPatient)
    }
  }

  const handleCancelButton = () => {
    if (onCancel) {
      onCancel(currentPatient)
    }
  }

  const handleDeleteButton = () => {
    if (onDelete) {
      onDelete(currentPatient)
    }
  }

  let formButtons
  if (patientId) {
    formButtons = (
      <div>
        <Button
          id="updatePatientButton"
          onClick={handleSaveButton}
          variant="contained"
          color="primary"
          className={classes.actionButtons}
        >
          Save
        </Button>
        <Button
          id="deletePatientButton"
          variant="contained"
          onClick={handleDeleteButton}
          className={classes.actionButtons}
        >
          Delete
        </Button>
      </div>
    )
  } else {
    formButtons = (
      <Button
        id="savePatientButton"
        variant="contained"
        color="primary"
        onClick={handleSaveButton}
      >
        Save
      </Button>
    )
  }

  return (
    <Card className={classes.paper}>
      <CardContent>
        <Grid container direction="column" spacing={2} className={classes.grid}>
          <Grid item>
            <TextField
              id="patientDetailIdInput"
              name="identifier"
              label="Patient ID"
              value={form.identifier}
              fullWidth
              disabled
              variant={fieldVariant}
              size="small"
              InputLabelProps={{
                shrink: true,
              }}
            />
          </Grid>
          <Grid item>
            <FormGroup row name="deceased">
              <FormControlLabel
                control={
                  <Checkbox
                    checked={form.deceased}
                    onChange={changeState}
                    value={form.deceased}
                    color="primary"
                  />
                }
                label="Deceased"
              />
            </FormGroup>
          </Grid>
          <Grid item>
            <TextField
              id="prefixInput"
              name="prefix"
              label="Prefix"
              value={form.prefix}
              onChange={changeState}
              fullWidth
              variant={fieldVariant}
              size="small"
              InputLabelProps={{
                shrink: true,
              }}
            />
          </Grid>
          <Grid item>
            <TextField
              id="givenInput"
              name="givenName"
              label="Given Name"
              value={form.givenName}
              onChange={changeState}
              fullWidth
              variant={fieldVariant}
              size="small"
              InputLabelProps={{
                shrink: true,
              }}
            />
          </Grid>
          <Grid item>
            <TextField
              id="familyInput"
              name="familyName"
              label="Family Name"
              value={form.familyName}
              onChange={changeState}
              fullWidth
              variant={fieldVariant}
              size="small"
              InputLabelProps={{
                shrink: true,
              }}
            />
          </Grid>
          <Grid item>
            <TextField
              id="suffixInput"
              name="suffix"
              label="Suffix / Maiden"
              value={form.suffix}
              onChange={changeState}
              fullWidth
              variant={fieldVariant}
              size="small"
              InputLabelProps={{
                shrink: true,
              }}
            />
          </Grid>
          <Grid item>
            <TextField
              id="maritalStatusInput"
              name="maritalStatus"
              label="Marital Status"
              value={form.maritalStatus}
              onChange={changeState}
              fullWidth
              variant={fieldVariant}
              size="small"
              InputLabelProps={{
                shrink: true,
              }}
            />
          </Grid>
          <Grid item>
            <FormControl component="fieldset" className={classes.formControl}>
              <FormLabel component="legend">Gender</FormLabel>
              <RadioGroup
                aria-label="gender"
                id="gender"
                name="gender"
                value={form.gender}
                onChange={changeState}
                row
              >
                <FormControlLabel
                  value="female"
                  control={<Radio />}
                  label="Female"
                />
                <FormControlLabel
                  value="male"
                  control={<Radio />}
                  label="Male"
                />
                <FormControlLabel
                  value="other"
                  control={<Radio />}
                  label="Other"
                />
              </RadioGroup>
            </FormControl>
          </Grid>
          <Grid item>
            <CustomDatePicker
              displayDatePicker={true}
              date={form.birthDate}
              changeState={changeState}
              name="birthDate"
              label="Birthdate"
              fieldVariant={fieldVariant}
            />
          </Grid>
          <Grid item>
            <FormGroup row name="multipleBirth">
              <FormControlLabel
                control={
                  <Checkbox
                    checked={form.multipleBirth}
                    onChange={changeState}
                    value={form.multipleBirth}
                    color="primary"
                  />
                }
                label="Multiple Birth"
              />
            </FormGroup>
          </Grid>
          <Grid item>
            <TextField
              id="address1Input"
              name="address1"
              label="Address 1"
              value={form.address1}
              onChange={changeState}
              fullWidth
              variant={fieldVariant}
              size="small"
              InputLabelProps={{
                shrink: true,
              }}
            />
          </Grid>
          <Grid item>
            <TextField
              id="address1Input"
              name="address2"
              label="Address 2"
              value={form.address2}
              onChange={changeState}
              fullWidth
              variant={fieldVariant}
              size="small"
              InputLabelProps={{
                shrink: true,
              }}
            />
          </Grid>
          <Grid item>
            <TextField
              id="cityInput"
              name="city"
              label="City"
              value={form.city}
              onChange={changeState}
              fullWidth
              variant={fieldVariant}
              size="small"
              InputLabelProps={{
                shrink: true,
              }}
            />
          </Grid>
          <Grid item>
            <TextField
              id="stateInput"
              name="state"
              label="State"
              value={form.state}
              onChange={changeState}
              fullWidth
              variant={fieldVariant}
              size="small"
              InputLabelProps={{
                shrink: true,
              }}
            />
          </Grid>
          <Grid item>
            <TextField
              id="postalCodeInput"
              name="postalCode"
              label="Postal Code"
              value={form.postalCode}
              onChange={changeState}
              fullWidth
              variant={fieldVariant}
              size="small"
              InputLabelProps={{
                shrink: true,
              }}
            />
          </Grid>
          <Grid item>
            <TextField
              id="countryInput"
              name="country"
              label="Country"
              value={form.country}
              onChange={changeState}
              fullWidth
              variant={fieldVariant}
              size="small"
              InputLabelProps={{
                shrink: true,
              }}
            />
          </Grid>
          <Grid item>
            <TextField
              id="photoInput"
              name="photo"
              label="Photo"
              value={form.photo}
              onChange={changeState}
              fullWidth
              variant={fieldVariant}
              size="small"
              InputLabelProps={{
                shrink: true,
              }}
            />
          </Grid>
          <Grid item>
            <TextField
              id="speciesInput"
              name="species"
              label="Species"
              value={form.species}
              onChange={changeState}
              fullWidth
              variant={fieldVariant}
              size="small"
              InputLabelProps={{
                shrink: true,
              }}
            />
          </Grid>
          <Grid item>
            <TextField
              id="languageInput"
              name="language"
              label="Language"
              value={form.language}
              onChange={changeState}
              fullWidth
              variant={fieldVariant}
              size="small"
              InputLabelProps={{
                shrink: true,
              }}
            />
          </Grid>
          <Grid item>
            <TextField
              id="phoneInput"
              name="phone"
              label="Phone"
              value={form.phone}
              onChange={changeState}
              fullWidth
              variant={fieldVariant}
              size="small"
              InputLabelProps={{
                shrink: true,
              }}
            />
          </Grid>
        </Grid>
      </CardContent>
      <CardActions>{formButtons}</CardActions>
    </Card>
  )
}

PatientDetail.propTypes = {
  patient: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  onDelete: PropTypes.func,
  onUpsert: PropTypes.func,
  onSave: PropTypes.func,
  onCancel: PropTypes.func,
  fieldVariant: PropTypes.string,
}
export default PatientDetail
