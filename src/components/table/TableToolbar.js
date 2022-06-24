import React from 'react'
import PropTypes from 'prop-types'
import { Toolbar, Tooltip, IconButton, Typography } from '@material-ui/core'
import {
  Delete as DeleteIcon,
  FilterList as FilterListIcon,
  SelectAllRounded,
} from '@material-ui/icons'
import { lighten, makeStyles } from '@material-ui/core/styles'
import clsx from 'clsx'

const useToolbarStyles = makeStyles(theme => ({
  root: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(1),
  },
  highlight:
    theme.palette.type === 'light'
      ? {
          color: theme.palette.secondary.main,
          backgroundColor: lighten(theme.palette.secondary.light, 0.85),
        }
      : {
          color: theme.palette.text.primary,
          backgroundColor: theme.palette.secondary.dark,
        },
  title: {
    flex: '1 1 100%',
  },
}))

const TableToolbar = ({ selected, tableTitle, onRemoveRecord }) => {
  const classes = useToolbarStyles()
  const numSelected = selected.length

  return (
    <Toolbar
      className={clsx(classes.root, {
        [classes.highlight]: numSelected > 0,
      })}
    >
      {numSelected > 0 ? (
        <Typography
          className={classes.title}
          color="inherit"
          variant="subtitle1"
        >
          {numSelected} selected
        </Typography>
      ) : (
        <Typography className={classes.title} variant="h6" id="tableTitle">
          {tableTitle}
        </Typography>
      )}

      {numSelected > 0 && (
        <Tooltip title="Delete">
          <IconButton
            aria-label="delete"
            onClick={() => onRemoveRecord(selected)}
          >
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      )}
    </Toolbar>
  )
}

TableToolbar.propTypes = {
  numSelected: PropTypes.number.isRequired,
  tableTitle: PropTypes.string,
  onRemoveRecord: PropTypes.func,
}

export default TableToolbar
