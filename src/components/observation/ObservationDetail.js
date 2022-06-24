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
import { observations } from '../../examples/fhir-examples'

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

const ObservationDetail = ({
  onUpsert,
  onCancel,
  onDelete,
  observation,
  fieldVariant,
  hidePatientInputs,
  hideDeviceInputs,
}) => {
  const classes = useStyles()
  const [observationId, setObservationId] = useState(false)
  const [currentObservation, setCurrentObservation] = useState({
    resourceType: 'Observation',
    status: 'preliminary',
    category: {
      text: '',
    },
    effectiveDateTime: '',
    subject: {
      display: '',
      reference: '',
    },
    performer: [],
    device: {
      display: '',
      reference: '',
    },
    valueQuantity: {
      value: '',
      unit: '',
      system: 'http://unitsofmeasure.org',
    },
    valueString: '',
  })
  const [form, setForm] = useState({
    category: '',
    code: '',
    value: '',
    comparator: '',
    quantity: '',
    unit: '',
    deviceDisplay: '',
    subjectDisplay: '',
    subjectReference: '',
    effectiveDateTime: '',
    effectiveStartDateTime: '',
    effectiveEndDateTime: '',
    status: '',
    loincCode: '',
    loincCodeText: '',
    loincCodeDisplay: '',
  })

  useEffect(() => {
    dehydrateObservationResource(observation)
    setObservationId(observation.identifier[0].value)
    setCurrentObservation(observation)
  }, [observation])

  const dehydrateObservationResource = observation => {
    setForm(prevForm => ({
      ...prevForm,
      category: observation.category
        ? observation.category[0]?.coding
          ? observation.category[0]?.coding[0].display
          : ''
        : '',
      value: observation.valueQuantity?.value,
      comparator: observation.valueQuantity?.comparator
        ? observation.valueQuantity?.comparator
        : '',
      quantity: observation.valueQuantity?.quantity
        ? observation.valueQuantity?.quantity
        : '',
      unit: observation.valueQuantity?.unit
        ? observation.valueQuantity?.unit
        : '',
      deviceDisplay: observation.device?.display
        ? observation.device?.display
        : '',
      subjectDisplay: observation.subject?.display
        ? observation.subject?.display
        : '',
      subjectReference: observation.subject?.reference
        ? observation.subject?.reference
        : '',
      effectiveDateTime: observation.effectiveDateTime
        ? observation.effectiveDateTime
        : '',
      effectiveStartDateTime:
        observation.effectivePeriod && observation.effectivePeriod.start
          ? observation.effectivePeriod.start
          : '',
      effectiveEndDateTime:
        observation.effectivePeriod && observation.effectivePeriod.end
          ? observation.effectivePeriod.end
          : '',
      status: observation.status ? observation.status : '',
      loincCode: Array.isArray(observation.code?.coding)
        ? observation.code?.coding.filter(code =>
            code.system === 'http://loinc.org'
              ? code.code
              : 'No LOINC code listed',
          )[0].code
        : Array.isArray(observation.code?.codeable)
        ? observation.code?.codeable[0].code
        : 'No LOINC code listed',
      loincCodeText: Array.isArray(observation.code?.coding)
        ? observation.code?.coding.filter(code =>
            code.system === 'http://loinc.org'
              ? code.display
              : 'No LOINC code listed',
          )[0].display
        : Array.isArray(observation.code?.codeable)
        ? observation.code?.codeable[0].display
        : 'No LOINC code listed',
      loincCodeDisplay: Array.isArray(observation.code?.coding)
        ? observation.code?.coding.filter(code =>
            code.system === 'http://loinc.org'
              ? code.display
              : 'No LOINC code listed',
          )[0].display
        : Array.isArray(observation.code?.codeable)
        ? observation.code?.codeable[0].display
        : 'No LOINC code listed',
    }))
  }

  const changeState = e => {
    e.persist && e.persist()
    let observationData = currentObservation

    if (moment.isMoment(e)) {
      setForm(prevForm => ({
        ...prevForm,
        effectiveDateTime: moment(e).format('YYYY-MM-DD'),
      }))
      observationData.effectiveDateTime = moment(e).format('YYYY-MM-DD')
    } else {
      switch (e.target.name) {
        case 'category':
          setForm(prevForm => ({
            ...prevForm,
            [e.target.name]: e.target.value,
          }))
          observationData.category[0].coding[0].display = e.target.value
          break
        case 'value':
          setForm(prevForm => ({
            ...prevForm,
            [e.target.name]: e.target.value,
          }))
          observationData.valueQuantity.value = e.target.value
          break
        case 'comparator':
          setForm(prevForm => ({
            ...prevForm,
            [e.target.name]: e.target.value,
          }))
          // observationData.valueQuantity.comparator = e.target.value
          break
        case 'quantity':
          setForm(prevForm => ({
            ...prevForm,
            [e.target.name]: e.target.value,
          }))
          observationData.valueQuantity.quantity = e.target.value
          break
        case 'unit':
          setForm(prevForm => ({
            ...prevForm,
            [e.target.name]: e.target.value,
          }))
          observationData.valueQuantity.unit = e.target.value
          break
        case 'deviceDisplay':
          setForm(prevForm => ({
            ...prevForm,
            [e.target.name]: e.target.value,
          }))
          observationData.device.display = e.target.value
          break
        case 'subjectDisplay':
          setForm(prevForm => ({
            ...prevForm,
            [e.target.name]: e.target.value,
          }))
          observationData.subject.display = e.target.value
          break
        case 'subjectReference':
          setForm(prevForm => ({
            ...prevForm,
            [e.target.name]: e.target.value,
          }))
          observationData.subject.reference = e.target.value
          break
        case 'status':
          setForm(prevForm => ({
            ...prevForm,
            [e.target.name]: e.target.value,
          }))
          observationData.status = e.target.value
          break
        case 'loincCode':
          setForm(prevForm => ({
            ...prevForm,
            [e.target.name]: e.target.value,
          }))
          observationData.code.coding[0].code = e.target.value
          break
        case 'loincCodeText':
          setForm(prevForm => ({
            ...prevForm,
            [e.target.name]: e.target.value,
          }))
          observationData.code.coding[0].display = e.target.value
          break
        case 'loincCodeDisplay':
          setForm(prevForm => ({
            ...prevForm,
            [e.target.name]: e.target.value,
          }))
          observationData.code.coding[0].display = e.target.value
          break
        default:
          break
      }
    }

    setCurrentObservation(observationData)
  }

  const handleSaveButton = () => {
    if (onUpsert) {
      onUpsert(currentObservation)
    }
  }

  const handleCancelButton = () => {
    if (onCancel) {
      onCancel(currentObservation)
    }
  }

  const handleDeleteButton = () => {
    if (onDelete) {
      onDelete(currentObservation)
    }
  }

  let formButtons
  if (observationId) {
    formButtons = (
      <div>
        <Button
          id="updateObservationButton"
          onClick={handleSaveButton}
          variant="contained"
          color="primary"
          className={classes.actionButtons}
        >
          Save
        </Button>
        <Button
          id="deleteObservationButton"
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
        id="saveObservationButton"
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
              id="loincCodeTextInput"
              name="loincCodeText"
              label="LOINC Code Text"
              value={form.loincCodeText}
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
              id="loincCodeInput"
              name="loincCode"
              label="LOINC Code"
              value={form.loincCode}
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
              id="comparatorInput"
              name="comparator"
              label="Comparator"
              value={form.comparator}
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
              id="valueQuantityInput"
              name="quantity"
              label="Quantity"
              value={form.quantity}
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
              id="valueQuantityUnitInput"
              name="unit"
              label="Unit"
              value={form.unit}
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
              id="valueStringInput"
              name="value"
              label="Observation Value"
              value={form.value}
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
              id="statusInput"
              name="status"
              label="Status"
              value={form.status}
              onChange={changeState}
              fullWidth
              variant={fieldVariant}
              size="small"
              InputLabelProps={{
                shrink: true,
              }}
            />
          </Grid>
          {hideDeviceInputs && (
            <Grid item>
              <TextField
                id="deviceDisplayInput"
                name="deviceDisplay"
                label="Device Name"
                value={form.deviceDisplay}
                onChange={changeState}
                fullWidth
                variant={fieldVariant}
                size="small"
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Grid>
          )}
          {hideDeviceInputs && (
            <Grid item>
              <TextField
                id="deviceReferenceInput"
                name="deviceReference"
                label="Device ID"
                value={form.deviceReference}
                onChange={changeState}
                fullWidth
                variant={fieldVariant}
                size="small"
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Grid>
          )}
          {form.effectiveDateTime && form.effectiveDateTime !== '' && (
            <Grid item>
              <CustomDatePicker
                displayDatePicker={true}
                date={form.effectiveDateTime}
                changeState={changeState}
                name="effectiveDateTime"
                label="Effective Date"
                fieldVariant={fieldVariant}
                size="small"
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Grid>
          )}
          {form.effectiveStartDateTime && form.effectiveStartDateTime !== '' && (
            <Grid item>
              <CustomDatePicker
                displayDatePicker={true}
                date={form.effectiveStartDateTime}
                changeState={changeState}
                name="effectiveStartDateTime"
                label="Effective Start Date"
                fieldVariant={fieldVariant}
                size="small"
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Grid>
          )}
          {form.effectiveEndDateTime && form.effectiveEndDateTime !== '' && (
            <Grid item>
              <CustomDatePicker
                displayDatePicker={true}
                date={form.effectiveEndDateTime}
                changeState={changeState}
                name="effectiveEndDateTime"
                label="Effective End Date"
                fieldVariant={fieldVariant}
                size="small"
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Grid>
          )}
          <Grid item>
            <TextField
              id="categoryTextInput"
              name="category"
              label="Category"
              value={form.category}
              onChange={changeState}
              fullWidth
              variant={fieldVariant}
              size="small"
              InputLabelProps={{
                shrink: true,
              }}
            />
          </Grid>
          {!hidePatientInputs && (
            <Grid item>
              <TextField
                id="subjectDisplayInput"
                name="subjectDisplay"
                label="Subject Name"
                value={form.subjectDisplay}
                onChange={changeState}
                fullWidth
                variant={fieldVariant}
                size="small"
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Grid>
          )}
          {!hidePatientInputs && (
            <Grid item>
              <TextField
                id="subjectIdInput"
                name="subjectReference"
                label="Subject ID"
                value={form.subjectReference}
                onChange={changeState}
                fullWidth
                variant={fieldVariant}
                size="small"
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Grid>
          )}
        </Grid>
      </CardContent>
      <CardActions>{formButtons}</CardActions>
    </Card>
  )
}

ObservationDetail.propTypes = {
  observationId: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  observation: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  hidePatientInputs: PropTypes.bool,
  hideDeviceInputs: PropTypes.bool,
  onInsert: PropTypes.func,
  onUpsert: PropTypes.func,
  onRemove: PropTypes.func,
  onCancel: PropTypes.func,
  fieldVariant: PropTypes.string,
}

export default ObservationDetail
