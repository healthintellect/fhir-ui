import React from 'react'
import PropTypes from 'prop-types'
import { KeyboardDatePicker } from '@material-ui/pickers'
import moment from 'moment'

const CustomDatePicker = ({
  displayDatePicker,
  date,
  changeState,
  name,
  label,
  fieldVariant,
  className,
}) => {
  if (displayDatePicker) {
    let momentDate

    if (typeof date === 'string') {
      momentDate = moment(date)
    } else {
      momentDate = date
    }

    return (
      <KeyboardDatePicker
        name={name}
        label={label}
        format="MM/DD/YYYY"
        value={momentDate || {}}
        onChange={changeState}
        fullWidth
        margin="normal"
        className={className}
        inputVariant={fieldVariant || 'standard'}
        size="small"
        InputLabelProps={{
          shrink: true,
        }}
      />
    )
  }
}

CustomDatePicker.propTypes = {
  displayDatePicker: PropTypes.bool,
  date: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  changeState: PropTypes.func,
  name: PropTypes.string,
  label: PropTypes.string,
}
export default CustomDatePicker
