import React from 'react'
import PropTypes from 'prop-types'
import { lighten, makeStyles } from '@material-ui/core/styles'
import clsx from 'clsx'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  TableSortLabel,
  Toolbar,
  Typography,
  Paper,
  Checkbox,
  IconButton,
  Tooltip,
  FormControlLabel,
  Switch,
} from '@material-ui/core'
import TableHeader from '../table/TableHeader'
import TableToolbar from '../table/TableToolbar'

const desc = (a, b, orderBy) => {
  if (b[orderBy] < a[orderBy]) {
    return -1
  }
  if (b[orderBy] > a[orderBy]) {
    return 1
  }
  return 0
}

const stableSort = (array, cmp) => {
  const stabilizedThis = array.map((el, index) => [el, index])
  stabilizedThis.sort((a, b) => {
    const order = cmp(a[0], b[0])
    if (order !== 0) return order
    return a[1] - b[1]
  })
  return stabilizedThis.map(el => el[0])
}

const getSorting = (order, orderBy) => {
  return order === 'desc'
    ? (a, b) => desc(a, b, orderBy)
    : (a, b) => -desc(a, b, orderBy)
}

const headCells = [
  {
    id: 'identifier',
    numeric: false,
    disablePadding: true,
    label: 'Patient ID',
  },
  {
    id: 'name',
    numeric: false,
    disablePadding: true,
    label: 'Patient Name',
  },
  { id: 'dob', numeric: false, disablePadding: false, label: 'Date of Birth' },
  { id: 'gender', numeric: false, disablePadding: false, label: 'Gender' },
  { id: 'phone', numeric: false, disablePadding: false, label: 'Phone' },
  { id: 'language', numeric: false, disablePadding: false, label: 'Language' },
  {
    id: 'organization',
    numeric: false,
    disablePadding: false,
    label: 'Organization',
  },
]

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing(3),
  },
  paper: {
    width: '100%',
    marginBottom: theme.spacing(2),
  },
  table: {
    minWidth: 750,
  },
  tableWrapper: {
    overflowX: 'auto',
  },
}))

const PatientTable = ({
  patients = [],
  onRemoveRecord,
  tableTitle,
  tableRowSize,
  tableHeight,
  stickyHeader,
  defaultRowsPerPage,
}) => {
  const classes = useStyles()
  const [order, setOrder] = React.useState('asc')
  const [orderBy, setOrderBy] = React.useState('patientId')
  const [selected, setSelected] = React.useState([])
  const [page, setPage] = React.useState(0)
  const [dense, setDense] = React.useState(false)
  const [rowsPerPage, setRowsPerPage] = React.useState(defaultRowsPerPage || 5)

  const handleRequestSort = (event, property) => {
    const isDesc = orderBy === property && order === 'desc'
    setOrder(isDesc ? 'asc' : 'desc')
    setOrderBy(property)
  }

  const handleSelectAllClick = event => {
    if (event.target.checked) {
      const newSelecteds = patients.map(n => n.id)
      setSelected(newSelecteds)
      return
    }
    setSelected([])
  }

  const handleClick = (event, name) => {
    const selectedIndex = selected.indexOf(name)
    let newSelected = []

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name)
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1))
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1))
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1),
      )
    }

    setSelected(newSelected)
  }

  const handleChangePage = (event, newPage) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(parseInt(event.target.value, 10))
    setPage(0)
  }

  const isSelected = name => selected.indexOf(name) !== -1

  const emptyRows =
    rowsPerPage - Math.min(rowsPerPage, patients.length - page * rowsPerPage)

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <TableToolbar
          selected={selected}
          tableTitle={tableTitle}
          onRemoveRecord={onRemoveRecord}
        />
        <div className={classes.tableWrapper}>
          <Table
            className={classes.table}
            size={tableRowSize}
            stickyHeader={stickyHeader}
            aria-label={tableTitle || 'patient-table'}
          >
            <TableHeader
              classes={classes}
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={patients.length}
              headCells={headCells}
            />
            <TableBody>
              {stableSort(patients, getSorting(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
                  const isItemSelected = isSelected(row.id)
                  const labelId = `enhanced-table-checkbox-${index}`

                  return (
                    <TableRow
                      hover
                      onClick={event => handleClick(event, row.id)}
                      role="checkbox"
                      aria-checked={isItemSelected}
                      tabIndex={-1}
                      key={row.id}
                      selected={isItemSelected}
                    >
                      <TableCell padding="checkbox">
                        <Checkbox
                          checked={isItemSelected}
                          inputProps={{ 'aria-labelledby': labelId }}
                        />
                      </TableCell>
                      <TableCell>{row.identifier[0].value}</TableCell>
                      <TableCell
                        component="th"
                        id={labelId}
                        scope="row"
                        padding="none"
                      >
                        {row.name[0].text
                          ? row.name[0].text
                          : `${row.name[0].given.join(' ')} ${
                              row.name[0].family
                            }`}
                      </TableCell>
                      <TableCell>{row.birthDate}</TableCell>
                      <TableCell>{row.gender}</TableCell>
                      <TableCell>
                        {Array.isArray(row.telecom) &&
                          row.telecom
                            .map(el => (el.system === 'phone' ? el.value : ''))
                            .filter(el => !!el)}
                      </TableCell>
                      <TableCell>
                        {Array.isArray(row.communication) &&
                          row.communication[0].language.text}
                      </TableCell>
                      <TableCell>
                        {row.managingOrganization &&
                          row.managingOrganization.reference}
                      </TableCell>
                    </TableRow>
                  )
                })}
              {emptyRows > 0 && (
                <TableRow style={{ height: (dense ? 33 : 53) * emptyRows }}>
                  <TableCell colSpan={7} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={patients.length}
          rowsPerPage={rowsPerPage}
          page={page}
          backIconButtonProps={{
            'aria-label': 'previous page',
          }}
          nextIconButtonProps={{
            'aria-label': 'next page',
          }}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
      </Paper>
    </div>
  )
}

PatientTable.propTypes = {
  patients: PropTypes.arrayOf(PropTypes.object).isRequired,
  onRemoveRecord: PropTypes.func,
  tableTitle: PropTypes.string,
  tableRowSize: PropTypes.string,
  tableHeight: PropTypes.number,
  stickyHeader: PropTypes.string,
  defaultRowsPerPage: PropTypes.number,
}

export default PatientTable
