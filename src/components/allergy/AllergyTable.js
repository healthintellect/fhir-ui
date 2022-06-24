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

const AllergyTable = ({
  allergies,
  hideCheckboxes,
  hideCode,
  hideRecorder,
  hideReaction,
  hideCriticality,
  hideClinicalStatus,
  hideVerificationStatus,
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

  const flattenAllergy = allergy => {
    const result = {
      id: '',
      meta: '',
      category: '',
      criticality: '',
      code: '',
      codeText: '',
      subject: '',
      clinicalStatus: '',
      verificationStatus: '',
      recorder: '',
      recordedDate: '',
      reaction: '',
    }

    result.id = allergy.id ? allergy.id : allergy.id
    result.category = Array.isArray(allergy.category) ? allergy.category : ''
    result.code = Array.isArray(allergy.code?.coding)
      ? allergy.code.coding[0].code
      : ''
    result.codeText = Array.isArray(allergy.code?.coding)
      ? allergy.code.coding[0].display
      : ''
    result.subject = allergy.patient?.reference
    result.clinicalStatus = Array.isArray(allergy.clinicalStatus.coding)
      ? allergy.clinicalStatus.coding[0].display
      : ''
    result.verificationStatus = Array.isArray(allergy.verificationStatus.coding)
      ? allergy.verificationStatus.coding[0].display
      : ''
    result.criticality = allergy.criticality || ''
    result.reaction = Array.isArray(allergy.reaction)
      ? allergy.reaction[0]?.manifestation[0]?.coding[0]?.display
      : ''
    result.recorder = allergy.recorder?.reference || ''

    if (allergy.recordedDate) {
      result.effectiveDateTime = moment(allergy.recordedDate).format(
        'YYYY-MM-DD hh:mm a',
      )
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
  const rowClick = id => {
    if (onRowClick) {
      onRowClick(id)
    }
  }

  const renderActionIconsHeader = () => {
    if (!hideActionIcons) {
      return <TableCell id="actionIcons">Actions</TableCell>
    }
  }

  const renderActionIcons = allergy => {
    if (!hideActionIcons) {
      return (
        <TableCell id="actionIcons">
          <LabelIcon
            className={classes.iconStyle}
            onClick={() => onActionButtonClick(allergy)}
          />
          <DeleteIcon
            className={classes.iconStyle}
            onClick={() => removeRecord(allergy.id)}
          />
        </TableCell>
      )
    }
  }

  const removeRecord = id => {
    console.log('Remove allergy ', id)
    if (onRemoveRecord) {
      onRemoveRecord(id)
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

  const renderRecorder = recorder => {
    if (!hideRecorder) {
      return <TableCell id="recorder">{recorder}</TableCell>
    }
  }

  const renderRecorderHeader = () => {
    if (!hideRecorder) {
      return <TableCell id="recorder-header">Recorder</TableCell>
    }
  }

  const renderReaction = reaction => {
    if (!hideReaction) {
      return <TableCell id="reaction">{reaction}</TableCell>
    }
  }

  const renderReactionHeader = () => {
    if (!hideReaction) {
      return <TableCell id="reaction-header">Reaction</TableCell>
    }
  }

  const renderRecorderDate = recorderDate => {
    if (!hideRecorder) {
      return (
        <TableCell id="recorder-date">
          {moment(recorderDate).format('MM/DD/YYYY HH:mm:ss')}
        </TableCell>
      )
    }
  }

  const renderRecorderDateHeader = () => {
    if (!hideRecorder) {
      return <TableCell id="recorder-date-header">Date Recorded</TableCell>
    }
  }

  const renderCriticality = criticality => {
    if (!hideCriticality) {
      return <TableCell id="criticality">{criticality}</TableCell>
    }
  }
  const renderCriticalityHeader = () => {
    if (!hideCriticality) {
      return <TableCell id="criticality-header">Criticality</TableCell>
    }
  }

  const renderClinicalStatus = clinicalStatus => {
    if (!hideClinicalStatus) {
      return <TableCell id="clinicalStatus">{clinicalStatus}</TableCell>
    }
  }
  const renderClinicalStatusHeader = () => {
    if (!hideClinicalStatus) {
      return <TableCell id="clinicalStatus-header">Clinical Status</TableCell>
    }
  }
  const renderVerificationStatus = verificationStatus => {
    if (!hideVerificationStatus) {
      return <TableCell id="verificationStatus">{verificationStatus}</TableCell>
    }
  }
  const renderVerificationStatusHeader = () => {
    if (!hideVerificationStatus) {
      return (
        <TableCell id="verificationStatus-header">
          Verification Status
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

    const allergiesToRender = []
    if (allergies) {
      if (allergies.length > 0) {
        for (let i = 0; i < allergies.length; i++) {
          allergiesToRender.push(flattenAllergy(allergies[i]))
        }
      }
    }

    if (allergiesToRender.length === 0) {
      console.log('No allergies to render')
    } else {
      for (let j = 0; j < allergiesToRender.length; j++) {
        if (multiline) {
          allTableRows.push(
            <TableRow
              id="allergyRow"
              key={j}
              onClick={rowClick(allergiesToRender[j].id)}
            >
              {renderToggle()}
              {renderCodeText(allergiesToRender[j].codeText)}
              {renderCode(allergiesToRender[j].code)}
              {renderCategory(allergiesToRender[j].category)}
              {renderClinicalStatus(allergiesToRender[j].clinicalStatus)}
              {renderVerificationStatus(
                allergiesToRender[j].verificationStatus,
              )}
              {renderRecorder(allergiesToRender[j].recorder)}
              {renderRecorderDate(allergiesToRender[j].recorderDate)}
              {renderReaction(allergiesToRender[j].reaction)}
              {renderCriticality(allergiesToRender[j].criticality)}
              {renderId(allergiesToRender[j].id)}
              {renderActionIcons(allergiesToRender[j])}
            </TableRow>,
          )
        } else {
          allTableRows.push(
            <TableRow
              id="allergyRow"
              key={j}
              onClick={rowClick(allergiesToRender[j].id)}
            >
              {renderToggle()}
              {renderCodeText(allergiesToRender[j].codeText)}
              {renderCode(allergiesToRender[j].code)}
              {renderCategory(allergiesToRender[j].category)}
              {renderClinicalStatus(allergiesToRender[j].clinicalStatus)}
              {renderVerificationStatus(
                allergiesToRender[j].verificationStatus,
              )}
              {renderRecorder(allergiesToRender[j].recorder)}
              {renderRecorderDate(allergiesToRender[j].recorderDate)}
              {renderReaction(allergiesToRender[j].reaction)}
              {renderCriticality(allergiesToRender[j].criticality)}
              {renderId(allergiesToRender[j].id)}
              {renderActionIcons(allergiesToRender[j])}
            </TableRow>,
          )
        }
      }
      setTableRows(allTableRows)
    }
  }, [allergies])

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
          aria-labelledby="allergyTable"
          size={tableRowSize}
          stickyHeader={stickyHeader}
          aria-label="Allergy table"
        >
          <TableHead>
            <TableRow>
              {renderToggleHeader()}
              {renderCodeTextHeader()}
              {renderCodeHeader()}
              {renderCategoryHeader()}
              {renderClinicalStatusHeader()}
              {renderVerificationStatusHeader()}
              {renderRecorderHeader()}
              {renderRecorderDateHeader()}
              {renderReactionHeader()}
              {renderCriticalityHeader()}
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

AllergyTable.propTypes = {
  allergies: PropTypes.array,
  hideCheckboxes: PropTypes.bool,
  hideCode: PropTypes.bool,
  hideRecorder: PropTypes.bool,
  hideReaction: PropTypes.bool,
  hideCriticality: PropTypes.bool,
  hideClinicalStatus: PropTypes.bool,
  hideVerificationStatus: PropTypes.bool,
  hideActionIcons: PropTypes.bool,
  hideIdentifier: PropTypes.bool,
  multiline: PropTypes.bool,
  onCellClick: PropTypes.func,
  onRowClick: PropTypes.func,
  onRemoveRecord: PropTypes.func,
  onActionButtonClick: PropTypes.func,
  actionButtonLabel: PropTypes.string,
  tableRowSize: PropTypes.string,
  stickyHeader: PropTypes.string,
  tableHeight: PropTypes.number,
}

export default AllergyTable
