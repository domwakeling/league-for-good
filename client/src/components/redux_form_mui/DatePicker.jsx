// adapted from redux-form-material-ui, which does not support MUI above v0.20
// https://www.npmjs.com/package/redux-form-material-ui

import DatePicker from '@material-ui/core/DatePicker'
import createComponent from './createComponent'
import mapError from './mapError'

export default createComponent(DatePicker, ({
    input: { onBlur, ...inputProps },
    defaultDate,
    onChange,
    ...props
}) => ({
    ...inputProps,
    ...mapError(props),
    onChange: (event, value) => {
        inputProps.onChange(value)
        if (onChange) {
            onChange(value)
        }
    }
}))