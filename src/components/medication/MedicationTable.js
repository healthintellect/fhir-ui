import React, { Fragment, useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import {
  Checkbox,
  Paper,
  Table,
  TableRow,
  TableHead,
  TableCell,
  TableBody,
  Typography,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import moment from 'moment'
import { Delete as DeleteIcon, Label as LabelIcon } from '@material-ui/icons'

const useStyles = makeStyles({
  hideOnPhone: {
    visibility: 'visible',
    display: 'table',
  },
  tableTitle: {
    margin: 9,
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

const MedicationTable = ({
  medications,
  hideForm,
  hideIngredientStrength,
  hideIngredient,
  hideUnit,
  hideUnitQuantity,
  hideCheckboxes,
  hideCode,
  hideActionIcons,
  hideIdentifier,
  multiline,
  onCellClick,
  onRowClick,
  onRemoveRecord,
  onActionButtonClick,
  actionButtonLabel,
  tableTitle,
  tableRowSize,
  stickyHeader,
  tableHeight,
}) => {
  const classes = useStyles()
  const [source, setSource] = useState([])
  const [tableRows, setTableRows] = useState([])

  const flattenMedication = medication => {
    const result = {
      id: '',
      meta: '',
      code: '',
      codeText: '',
      subject: '',
      form: '',
      ingredientStrength: '',
      ingredient: '',
      unit: '',
      unitQuantity: '',
    }

    result.id = medication.id ? medication.id : medication.id
    result.code = Array.isArray(medication.code?.coding)
      ? medication.code.coding[0].code
      : ''
    result.codeText = Array.isArray(medication.code?.coding)
      ? medication.code.coding[0].display
      : ''
    result.subject = medication.subject?.reference
    result.form = medication.form ? medication.form.coding[0]?.display : ''
    result.ingredient = Array.isArray(medication.ingredient)
      ? medication.ingredient[0]?.itemCodeableConcept?.coding[0]?.display
      : ''
    result.ingredientStrength = Array.isArray(medication.ingredient)
      ? `${medication.ingredient[0]?.strength?.numerator?.value} ${medication.ingredient[0].strength?.numerator?.code}`
      : ''
    result.unit = Array.isArray(medication.ingredient)
      ? medication.ingredient[0]?.strength?.denominator?.unit
      : ''
    result.unitQuantity = Array.isArray(medication.ingredient)
      ? medication.ingredient[0]?.strength?.denominator?.value
      : ''

    return result
  }

  const rowClick = id => {
    if (onRowClick) {
      onRowClick(id)
    }
  }

  const renderActionIconsHeader = () => {
    if (!hideActionIcons) {
      return (
        <TableCell id="actionIcons">
          {actionButtonLabel ? actionButtonLabel : 'Actions'}
        </TableCell>
      )
    }
  }

  const renderActionIcons = medication => {
    if (!hideActionIcons) {
      return (
        <TableCell id="actionIcons">
          <LabelIcon
            className={classes.iconStyle}
            onClick={() => onActionButtonClick(medication)}
          />
          <DeleteIcon
            className={classes.iconStyle}
            onClick={() => removeRecord(medication.id)}
          />
        </TableCell>
      )
    }
  }

  const removeRecord = id => {
    if (onRemoveRecord) {
      onRemoveRecord(id)
    }
  }

  const renderId = id => {
    if (!hideIdentifier) {
      return (
        <TableCell>
          <span id="identifier">{id}</span>
        </TableCell>
      )
    }
  }

  const renderIdHeader = () => {
    if (!hideIdentifier) {
      return <TableCell id="id-header">ID</TableCell>
    }
  }

  const renderForm = form => {
    if (!hideForm) {
      return (
        <TableCell>
          <span id="form">{form}</span>
        </TableCell>
      )
    }
  }
  const renderFormHeader = () => {
    if (!hideForm) {
      return <TableCell id="form-header">Form</TableCell>
    }
  }

  const renderIngredientStrengthHeader = () => {
    if (!hideIngredientStrength) {
      return (
        <TableCell id="ingredientStrength-header">
          Medication Strength
        </TableCell>
      )
    }
  }
  const renderIngredientStrength = ingredientStrength => {
    if (!hideIngredientStrength) {
      return (
        <TableCell>
          <span id="ingredientStrength">{ingredientStrength}</span>
        </TableCell>
      )
    }
  }

  const renderIngredientHeader = () => {
    if (!hideIngredient) {
      return <TableCell id="ingredient-header">Medication</TableCell>
    }
  }
  const renderIngredient = ingredient => {
    if (!hideIngredient) {
      return (
        <TableCell>
          <span id="ingredient">{ingredient}</span>
        </TableCell>
      )
    }
  }

  const renderUnitHeader = () => {
    if (!hideUnit) {
      return <TableCell id="unit-header">Unit</TableCell>
    }
  }
  const renderUnit = unit => {
    if (!hideUnit) {
      return (
        <TableCell>
          <span id="unit">{unit}</span>
        </TableCell>
      )
    }
  }

  const renderUnitQuantityHeader = () => {
    if (!hideUnitQuantity) {
      return <TableCell id="unitQuantity-header">Unit Quantity</TableCell>
    }
  }
  const renderUnitQuantity = unitQuantity => {
    if (!hideUnitQuantity) {
      return (
        <TableCell>
          <span id="unitQuantity">{unitQuantity}</span>
        </TableCell>
      )
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

  const renderCodeTextHeader = () => {
    if (!hideCode) {
      return <TableCell id="code-header">Code Text</TableCell>
    }
  }

  const renderCodeText = (code, value) => {
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

    const medicationsToRender = []
    if (medications) {
      if (medications.length > 0) {
        for (let i = 0; i < medications.length; i++) {
          medicationsToRender.push(flattenMedication(medications[i]))
        }
      }
    }

    if (medicationsToRender.length === 0) {
      console.log('No medications to render')
    } else {
      for (let j = 0; j < medicationsToRender.length; j++) {
        if (multiline) {
          allTableRows.push(
            <TableRow
              id="medicationRow"
              key={j}
              onClick={rowClick(medicationsToRender[j].id)}
            >
              {renderToggle()}
              {renderCodeText(medicationsToRender[j].codeText)}
              {renderCode(medicationsToRender[j].code)}
              {renderIngredientStrength(medicationsToRender[j].ingredient)}
              {renderForm(medicationsToRender[j].ingredientStrength)}
              {renderIngredient(medicationsToRender[j].form)}
              {renderUnit(medicationsToRender[j].unit)}
              {renderUnitQuantity(medicationsToRender[j].unitQuantity)}
              {renderId(medicationsToRender[j].id)}
              {renderActionIcons(medicationsToRender[j])}
            </TableRow>,
          )
        } else {
          allTableRows.push(
            <TableRow
              id="medicationRow"
              key={j}
              onClick={rowClick(medicationsToRender[j].id)}
            >
              {renderToggle()}
              {renderCodeText(medicationsToRender[j].codeText)}
              {renderCode(medicationsToRender[j].code)}
              {renderIngredientStrength(medicationsToRender[j].ingredient)}
              {renderForm(medicationsToRender[j].ingredientStrength)}
              {renderIngredient(medicationsToRender[j].form)}
              {renderUnit(medicationsToRender[j].unit)}
              {renderUnitQuantity(medicationsToRender[j].unitQuantity)}
              {renderId(medicationsToRender[j].id)}
              {renderActionIcons(medicationsToRender[j])}
            </TableRow>,
          )
        }
      }
      setTableRows(allTableRows)
    }
  }, [medications])

  return (
    <Fragment>
      {tableTitle && (
        <Typography variant="h6" gutterBottom className={classes.tableTitle}>
          {tableTitle}
        </Typography>
      )}
      <Paper
        style={
          tableHeight ? { maxHeight: tableHeight, overflow: 'auto' } : null
        }
      >
        <Table
          className={classes.table}
          aria-labelledby="medicationTable"
          size={tableRowSize}
          stickyHeader={stickyHeader}
          aria-label="Medication table"
        >
          <TableHead>
            <TableRow>
              {renderToggleHeader()}
              {renderCodeTextHeader()}
              {renderCodeHeader()}
              {renderIngredientHeader()}
              {renderIngredientStrengthHeader()}
              {renderFormHeader()}
              {renderUnitHeader()}
              {renderUnitQuantityHeader()}
              {renderIdHeader()}
              {renderActionIconsHeader()}
            </TableRow>
          </TableHead>
          <TableBody>{tableRows}</TableBody>
        </Table>
      </Paper>
    </Fragment>
  )
}

MedicationTable.propTypes = {
  medications: PropTypes.array,
  hideForm: PropTypes.bool,
  hideIngredientStrength: PropTypes.bool,
  hideIngredient: PropTypes.bool,
  hideUnit: PropTypes.bool,
  hideUnitQuantity: PropTypes.bool,
  hideCheckboxes: PropTypes.bool,
  hideCode: PropTypes.bool,
  hideActionIcons: PropTypes.bool,
  hideIdentifier: PropTypes.bool,
  multiline: PropTypes.bool,
  onRowClick: PropTypes.func,
  onRemoveRecord: PropTypes.func,
  onActionButtonClick: PropTypes.func,
  actionButtonLabel: PropTypes.string,
  tableTitle: PropTypes.string,
  tableRowSize: PropTypes.string,
  stickyHeader: PropTypes.string,
  tableHeight: PropTypes.number,
}

export default MedicationTable
