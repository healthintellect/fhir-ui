import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import {
  Checkbox,
  Card,
  CardContent,
  Table,
  TableRow,
  TableHead,
  TableCell,
  TableBody,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import moment from 'moment'
import { Delete as DeleteIcon, Label as LabelIcon } from '@material-ui/icons'

const useStyles = makeStyles({
  hideOnPhone: {
    visibility: 'visible',
    display: 'table',
  },
  cellHideOnPhone: {
    visibility: 'visible',
    display: 'table',
    paddingTop: '16px',
    maxWidth: '120px',
  },
  cell: {
    paddingTop: '16px',
  },
  root: {
    padding: '0px',
    position: 'relative',
  },
  iconStyle: {
    marginLeft: 4,
    marginRight: 4,
    marginTop: 2,
    fontSize: '120%',
  },
})

const ObservationTable = ({
  hideActionIcons,
  onRemoveRecord,
  onRowClick,
  onCellClick,
  hideBarcodes,
  hideSubjects,
  hideDevices,
  hideValue,
  hideCode,
  multiline,
  hideComparator,
  hideCheckboxes,
  appWidth,
  observations,
  stickyHeader,
  tableSize,
}) => {
  const classes = useStyles()
  const [source, setSource] = useState([])
  const [tableRows, setTableRows] = useState([])

  const flattenObservation = observation => {
    const result = {
      _id: '',
      meta: '',
      category: '',
      code: '',
      valueString: '',
      value: '',
      observationValue: '',
      subject: '',
      subjectId: '',
      status: '',
      device: '',
      createdBy: '',
      effectiveDateTime: '',
      issued: '',
      unit: '',
    }

    result._id = observation.id ? observation.id : observation._id
    result.category = observation.category?.text
      ? observation.category?.text
      : observation.category && observation.category[0]?.coding[0]?.display
    result.code = observation.code?.text
      ? observation.code?.text
      : observation.code.coding[0].display
    result.valueString = observation.valueQuantity?.value
      ? `${observation.valueQuantity?.value} ${observation.valueQuantity?.unit}`
      : `${observation.component &&
          observation.component[0]?.valueQuantity
            ?.value} ${observation.component &&
          observation.component[0]?.valueQuantity?.unit}`
    result.comparator = observation.valueQuantity?.comparator
    result.observationValue = observation.valueQuantity?.value
    result.unit = observation.valueQuantity?.unit
    result.subject = observation.subject?.reference
    result.subjectId = observation.subject.reference
    result.device = observation.device?.display
    result.status = observation.status

    if (observation.effectiveDateTime) {
      result.effectiveDateTime = moment(observation.effectiveDateTime).format(
        'YYYY-MM-DD hh:mm a',
      )
    }
    if (observation.issued) {
      result.effectiveDateTime = moment(observation.issued).format(
        'YYYY-MM-DD hh:mm a',
      )
    }

    result.meta = observation.category?.text

    if (result.valueString?.length > 0) {
      result.value = result.valueString
    } else {
      if (result.comparator) {
        result.value = `${result.comparator} `
      }
      result.value = `${result.value + result.observationValue} ${result.unit}`
    }

    return result
  }

  const handleChange = (row, key, value) => {
    source[row][key] = value
    setSource(source)
  }

  const displayOnMobile = width => {
    const style = {}
    if (['iPhone'].includes(window.navigator.platform)) {
      style.display = 'none'
    }
    if (width) {
      style.width = width
    }
    return style
  }
  const rowClick = _id => {
    if (onRowClick) {
      onRowClick(_id)
    }
  }

  const renderActionIconsHeader = () => {
    if (!hideActionIcons) {
      return <TableCell id="actionIcons">Actions</TableCell>
    }
  }

  const renderActionIcons = observation => {
    if (!hideActionIcons) {
      return (
        <TableCell id="actionIcons">
          <LabelIcon
            className={classes.iconStyle}
            onClick={() => onMetaClick(observation)}
          />
          <DeleteIcon
            className={classes.iconStyle}
            onClick={() => removeRecord(observation._id)}
          />
        </TableCell>
      )
    }
  }

  const removeRecord = _id => {
    console.log('Remove observation ', _id)
    if (onRemoveRecord) {
      onRemoveRecord(_id)
    }
  }

  const onActionButtonClick = id => {
    if (onActionButtonClick) {
      onActionButtonClick(id)
    }
  }

  const cellClick = id => {
    if (onCellClick) {
      onCellClick(id)
    }
  }

  const onMetaClick = patient => {
    if (onRowClick) {
      onRowClick(patient)
    }
  }

  const renderBarcode = id => {
    if (!hideBarcodes) {
      return (
        <TableCell>
          <span id="barcode">{id}</span>
        </TableCell>
      )
    }
  }

  const renderBarcodeHeader = () => {
    if (!hideBarcodes) {
      return <TableCell id="system-id-header">System ID</TableCell>
    }
  }

  const renderSubject = id => {
    if (!hideSubjects) {
      return <TableCell id="name">{id}</TableCell>
    }
  }

  const renderSubjectHeader = () => {
    if (!hideSubjects) {
      return <TableCell id="name-header">Subject</TableCell>
    }
  }
  const renderDevice = device => {
    if (!hideDevices) {
      return <TableCell id="device.display">{device}</TableCell>
    }
  }
  const renderDeviceHeader = () => {
    if (!hideDevices) {
      return <TableCell id="device.display-header">Device</TableCell>
    }
  }

  const renderValue = valueString => {
    if (!hideValue) {
      return <TableCell id="value">{valueString}</TableCell>
    }
  }
  const renderValueHeader = () => {
    if (!hideValue) {
      return <TableCell id="value-header">Value</TableCell>
    }
  }

  const renderCodeHeader = () => {
    if (!hideCode) {
      return <TableCell id="code-header">Code</TableCell>
    }
  }

  const renderCode = (code, value) => {
    if (!hideCode) {
      if (multiline) {
        return (
          <TableCell>
            <span className={{ fontWeight: 400 }}>{code}</span> <br />
            {value}
          </TableCell>
        )
      }
      return <TableCell id="code">{code}</TableCell>
    }
  }

  const renderCategoryHeader = () => {
    if (multiline === false) {
      return <TableCell id="category-header">Category</TableCell>
    }
  }

  const renderCategory = category => {
    if (multiline === false) {
      return <TableCell id="category">{category}</TableCell>
    }
  }

  const renderValueString = valueString => {
    if (!hideValue) {
      return <TableCell id="value">{valueString}</TableCell>
    }
  }

  const renderValueStringHeader = () => {
    if (!hideValue) {
      return <TableCell id="value-header">Value</TableCell>
    }
  }

  const renderComparator = comparator => {
    if (!hideComparator) {
      return <TableCell id="comparator">{comparator}</TableCell>
    }
  }

  const renderComparatorHeader = () => {
    if (!hideComparator) {
      return <TableCell id="comparator-header">Comparator</TableCell>
    }
  }

  const renderToggleHeader = () => {
    if (!hideCheckboxes) {
      return <TableCell id="toggle-header">Toggle</TableCell>
    }
  }

  const renderToggle = () => {
    if (!hideCheckboxes) {
      return (
        <TableCell id="toggle">
          <Checkbox defaultChecked={false} className={classes.root} />
        </TableCell>
      )
    }
  }

  useEffect(() => {
    const allTableRows = []

    const observationsToRender = []
    if (observations) {
      if (observations.length > 0) {
        for (let i = 0; i < observations.length; i++) {
          observationsToRender.push(flattenObservation(observations[i]))
        }
      }
    }

    if (observationsToRender.length === 0) {
      console.log('No observations to render')
    } else {
      for (let j = 0; j < observationsToRender.length; j++) {
        if (multiline) {
          allTableRows.push(
            <TableRow
              id="observationRow"
              key={j}
              onClick={rowClick(observationsToRender[j]._id)}
            >
              {renderToggle()}
              {renderCategory(observationsToRender[j].category)}
              {renderCode(
                observationsToRender[j].code,
                observationsToRender[j].value,
              )}
              {renderValue(observationsToRender[j].value)}
              {renderSubject(observationsToRender[j].subject)}
              <TableCell id="status">
                {observationsToRender[j].status}
              </TableCell>
              {renderDevice(observationsToRender[j].device)}
              <TableCell id="date">
                {observationsToRender[j].effectiveDateTime}
              </TableCell>
              {renderBarcode(observationsToRender[j]._id)}
              {renderActionIcons(observationsToRender[j])}
            </TableRow>,
          )
        } else {
          allTableRows.push(
            <TableRow
              id="observationRow"
              key={j}
              onClick={rowClick(observationsToRender[j]._id)}
            >
              {renderToggle()}
              {renderCategory(observationsToRender[j].category)}
              {renderCode(observationsToRender[j].code)}
              {renderValue(observationsToRender[j].value)}
              {renderSubject(observationsToRender[j].subject)}
              <TableCell id="status">
                {observationsToRender[j].status}
              </TableCell>
              {renderDevice(observationsToRender[j].device)}
              <TableCell id="date">
                {observationsToRender[j].effectiveDateTime}
              </TableCell>
              {renderBarcode(observationsToRender[j]._id)}
              {renderActionIcons(observationsToRender[j])}
            </TableRow>,
          )
        }
      }
      setTableRows(allTableRows)
    }
  }, [])

  return (
    <Card>
      <CardContent>
        <Table
          className={classes.table}
          aria-labelledby="observationTable"
          size={tableSize}
          stickyHeader={stickyHeader}
          aria-label="Observation table"
        >
          <TableHead>
            <TableRow>
              {renderToggleHeader()}
              {renderCategoryHeader()}
              {renderCodeHeader()}
              {renderValueHeader()}
              {renderSubjectHeader()}
              <TableCell id="status">Status</TableCell>
              {renderDeviceHeader()}
              <TableCell id="date">Date</TableCell>
              {renderBarcodeHeader()}
              {renderActionIconsHeader()}
            </TableRow>
          </TableHead>
          <TableBody>{tableRows}</TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}

ObservationTable.propTypes = {
  observations: PropTypes.array,
  paginationLimit: PropTypes.number,
  hideCode: PropTypes.bool,
  hideBarcodes: PropTypes.bool,
  hideSubjects: PropTypes.bool,
  hideDevices: PropTypes.bool,
  hideComparator: PropTypes.bool,
  hideValue: PropTypes.bool,
  hideCheckboxes: PropTypes.bool,
  hideActionIcons: PropTypes.bool,
  hideIdentifier: PropTypes.bool,
  enteredInError: PropTypes.bool,
  multiline: PropTypes.bool,
  onCellClick: PropTypes.func,
  onRowClick: PropTypes.func,
  onRemoveRecord: PropTypes.func,
  onActionButtonClick: PropTypes.func,
  actionButtonLabel: PropTypes.string,
  tableSize: PropTypes.string,
  stickyHeader: PropTypes.string,
}

export default ObservationTable
