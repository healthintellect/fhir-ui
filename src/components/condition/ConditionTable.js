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

const ConditionTable = ({
  conditions,
  hideCheckboxes,
  hideCode,
  hideAsserter,
  hideCategory,
  hideClinicalStatus,
  hideVerificationStatus,
  hideRecordedDate,
  hideOnsetDateTime,
  hideSeverity,
  hideBodySite,
  hideEncounter,
  hideSubject,
  hideEvidence,
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

  const flattenCondition = condition => {
    const result = {
      id: '',
      meta: '',
      category: '',
      code: '',
      codeText: '',
      subject: '',
      clinicalStatus: '',
      verificationStatus: '',
      onsetDateTime: '',
      recordedDate: '',
      severity: '',
      bodySite: '',
      encounter: '',
      asserter: '',
      evidence: '',
    }

    result.id = condition.id ? condition.id : condition.id
    result.category = Array.isArray(condition.category)
      ? condition.category[0]?.coding[0]?.display
      : ''
    result.code = Array.isArray(condition.code?.coding)
      ? condition.code.coding[0].code
      : ''
    result.codeText = Array.isArray(condition.code?.coding)
      ? condition.code.coding[0].display
      : condition.code.text
      ? condition.code.text
      : ''
    result.subject = condition.subject?.reference
    result.clinicalStatus = Array.isArray(condition.clinicalStatus.coding)
      ? condition.clinicalStatus.coding[0].code
      : ''
    result.verificationStatus = Array.isArray(
      condition.verificationStatus.coding,
    )
      ? condition.verificationStatus.coding[0].code
      : ''
    result.criticality = condition.criticality || ''
    result.reaction = Array.isArray(condition.reaction)
      ? condition.reaction[0]?.manifestation[0]?.coding[0]?.display
      : ''
    result.asserter = condition.asserter?.display || ''
    result.onsetDateTime = condition.onsetDateTime
      ? moment(condition.onsetDateTime).format('YYYY-MM-DD')
      : ''
    result.severity = Array.isArray(condition.severity?.coding)
      ? condition.severity?.coding[0].display
      : ''
    result.bodySite = Array.isArray(condition.bodySite)
      ? condition.bodySite[0].coding[0].display
      : ''
    result.encounter = condition.encounter ? condition.encounter.reference : ''
    result.evidence = Array.isArray(condition.evidence)
      ? condition.evidence[0]?.code[0]?.coding[0]?.display
      : ''
    result.recordedDate = condition.recordedDate
      ? moment(condition.recordedDate).format('YYYY-MM-DD')
      : ''

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

  const renderActionIcons = condition => {
    if (!hideActionIcons) {
      return (
        <TableCell id="actionIcons">
          <LabelIcon
            className={classes.iconStyle}
            onClick={() => onActionButtonClick(condition)}
          />
          <DeleteIcon
            className={classes.iconStyle}
            onClick={() => removeRecord(condition.id)}
          />
        </TableCell>
      )
    }
  }

  const removeRecord = id => {
    console.log('Remove condition ', id)
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

  const renderAsserter = asserter => {
    if (!hideAsserter) {
      return <TableCell id="asserter">{asserter}</TableCell>
    }
  }

  const renderAsserterHeader = () => {
    if (!hideAsserter) {
      return <TableCell id="asserter-header">Asserter</TableCell>
    }
  }

  const renderBodySite = bodySite => {
    if (!hideBodySite) {
      return <TableCell id="bodySite">{bodySite}</TableCell>
    }
  }

  const renderBodySiteHeader = () => {
    if (!hideBodySite) {
      return <TableCell id="bodySite-header">Body Site</TableCell>
    }
  }

  const renderRecordedDate = recordedDate => {
    if (!hideRecordedDate) {
      return (
        <TableCell id="recorded-date">
          {moment(recordedDate).format('MM/DD/YYYY')}
        </TableCell>
      )
    }
  }

  const renderRecordedDateHeader = () => {
    if (!hideRecordedDate) {
      return <TableCell id="recorded-date-header">Date Recorded</TableCell>
    }
  }

  const renderOnsetDateTime = onsetDateTime => {
    if (!hideOnsetDateTime) {
      return (
        <TableCell id="onset-datetime">
          {moment(onsetDateTime).format('MM/DD/YYYY')}
        </TableCell>
      )
    }
  }

  const renderOnsetDateTimeHeader = () => {
    if (!hideOnsetDateTime) {
      return <TableCell id="onset-datetime-header">Onset Date</TableCell>
    }
  }

  const renderSeverity = severity => {
    if (!hideSeverity) {
      return <TableCell id="severity">{severity}</TableCell>
    }
  }
  const renderSeverityHeader = () => {
    if (!hideSeverity) {
      return <TableCell id="severity-header">Severity</TableCell>
    }
  }

  const renderEncounter = encounter => {
    if (!hideEncounter) {
      return <TableCell id="encounter">{encounter}</TableCell>
    }
  }
  const renderEncounterHeader = () => {
    if (!hideEncounter) {
      return <TableCell id="encounter-header">Encounter</TableCell>
    }
  }

  const renderEvidence = evidence => {
    console.log('renderEvidence Evidence: ', evidence)
    if (!hideEvidence) {
      return <TableCell id="evidence">{evidence}</TableCell>
    }
  }
  const renderEvidenceHeader = () => {
    if (!hideEvidence) {
      return <TableCell id="evidence-header">Evidence</TableCell>
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

  const renderSubjectHeader = () => {
    if (!hideSubject) {
      return <TableCell id="subject-header">Subject</TableCell>
    }
  }

  const renderSubject = subject => {
    if (!hideSubject) {
      return <TableCell id="subject">{subject}</TableCell>
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

    const conditionsToRender = []
    if (conditions) {
      if (conditions.length > 0) {
        for (let i = 0; i < conditions.length; i++) {
          conditionsToRender.push(flattenCondition(conditions[i]))
        }
      }
    }

    if (conditionsToRender.length === 0) {
      console.log('No conditions to render')
    } else {
      for (let j = 0; j < conditionsToRender.length; j++) {
        if (multiline) {
          allTableRows.push(
            <TableRow
              id="conditionRow"
              key={j}
              onClick={rowClick(conditionsToRender[j].id)}
            >
              {renderToggle()}
              {renderCodeText(conditionsToRender[j].codeText)}
              {renderCode(conditionsToRender[j].code)}
              {renderCategory(conditionsToRender[j].category)}
              {renderClinicalStatus(conditionsToRender[j].clinicalStatus)}
              {renderVerificationStatus(
                conditionsToRender[j].verificationStatus,
              )}
              {renderAsserter(conditionsToRender[j].asserter)}
              {renderOnsetDateTime(conditionsToRender[j].onsetDateTime)}
              {renderRecordedDate(conditionsToRender[j].recordedDate)}
              {renderEvidence(conditionsToRender[j].reaction)}
              {renderSeverity(conditionsToRender[j].severity)}
              {renderBodySite(conditionsToRender[j].bodySite)}
              {renderEncounter(conditionsToRender[j].encounter)}
              {renderSubject(conditionsToRender[j].subject)}
              {renderEvidence(conditionsToRender[j].evidence)}
              {renderId(conditionsToRender[j].id)}
              {renderActionIcons(conditionsToRender[j])}
            </TableRow>,
          )
        } else {
          allTableRows.push(
            <TableRow
              id="conditionRow"
              key={j}
              onClick={rowClick(conditionsToRender[j].id)}
            >
              {renderToggle()}
              {renderCodeText(conditionsToRender[j].codeText)}
              {renderCode(conditionsToRender[j].code)}
              {renderCategory(conditionsToRender[j].category)}
              {renderClinicalStatus(conditionsToRender[j].clinicalStatus)}
              {renderVerificationStatus(
                conditionsToRender[j].verificationStatus,
              )}
              {renderAsserter(conditionsToRender[j].asserter)}
              {renderOnsetDateTime(conditionsToRender[j].onsetDateTime)}
              {renderRecordedDate(conditionsToRender[j].recordedDate)}
              {renderSeverity(conditionsToRender[j].severity)}
              {renderBodySite(conditionsToRender[j].bodySite)}
              {renderEncounter(conditionsToRender[j].encounter)}
              {renderSubject(conditionsToRender[j].subject)}
              {renderEvidence(conditionsToRender[j].evidence)}
              {renderId(conditionsToRender[j].id)}
              {renderActionIcons(conditionsToRender[j])}
            </TableRow>,
          )
        }
      }
      setTableRows(allTableRows)
    }
  }, [conditions])

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
          aria-labelledby="conditionTable"
          size={tableRowSize}
          stickyHeader={stickyHeader}
          aria-label="Condition table"
        >
          <TableHead>
            <TableRow>
              {renderToggleHeader()}
              {renderCodeTextHeader()}
              {renderCodeHeader()}
              {renderCategoryHeader()}
              {renderClinicalStatusHeader()}
              {renderVerificationStatusHeader()}
              {renderAsserterHeader()}
              {renderOnsetDateTimeHeader()}
              {renderRecordedDateHeader()}
              {renderSeverityHeader()}
              {renderBodySiteHeader()}
              {renderEncounterHeader()}
              {renderSubjectHeader()}
              {renderEvidenceHeader()}
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

ConditionTable.propTypes = {
  conditions: PropTypes.array,
  hideCheckboxes: PropTypes.bool,
  hideCode: PropTypes.bool,
  hideAsserter: PropTypes.bool,
  hideCategory: PropTypes.bool,
  hideClinicalStatus: PropTypes.bool,
  hideVerificationStatus: PropTypes.bool,
  hideRecordedDate: PropTypes.bool,
  hideOnsetDateTime: PropTypes.bool,
  hideSeverity: PropTypes.bool,
  hideBodySite: PropTypes.bool,
  hideEncounter: PropTypes.bool,
  hideSubject: PropTypes.bool,
  hideEvidence: PropTypes.bool,
  hideActionIcons: PropTypes.bool,
  hideIdentifier: PropTypes.bool,
  multiline: PropTypes.bool,
  onCellClick: PropTypes.func,
  onRowClick: PropTypes.func,
  onRemoveRecord: PropTypes.func,
  onActionButtonClick: PropTypes.func,
  actionButtonLabel: PropTypes.string,
  tableTitle: PropTypes.string,
  tableRowSize: PropTypes.string,
  stickyHeader: PropTypes.string,
  tableHeight: PropTypes.number,
}

export default ConditionTable
