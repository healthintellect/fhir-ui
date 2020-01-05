import React from 'react'
import { Typography, Container } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  tableNoData: {
    display: 'flex',
    paddingTop: 32,
    paddingBottom: 32,
    textAlign: 'center',
  },
})

const TableNoData = () => {
  const classes = useStyles()
  return (
    <Container className={classes.tableNoData}>
      <Typography variant="subtitle1">No data.</Typography>
      <Typography variant="subtitle1">
        Are you sure you're logged in?
      </Typography>
      <Typography variant="subtitle1">Do you have an access token?</Typography>
      <Typography variant="subtitle1">
        Is your search a wide enough scope?
      </Typography>
      <Typography variant="subtitle1">
        Are you subscribed to this resource?
      </Typography>
    </Container>
  )
}

export default TableNoData
