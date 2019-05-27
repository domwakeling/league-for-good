// adapted from redux-form-material-ui, which does not support MUI above v0.20
// https://www.npmjs.com/package/redux-form-material-ui

import SelectField from '@material-ui/core/SelectField'
import createComponent from './createComponent'
import mapError from './mapError'

export default createComponent(SelectField, ({
    input: { onChange, value, onBlur, ...inputProps },
    onChange: onChangeFromField,
    ...props
}) => ({
    ...mapError(props),
    ...inputProps,
    value: value,
    onChange: (event, index, value) => {
        onChange(value)
        if (onChangeFromField) {
            onChangeFromField(value)
        }
    },
    onBlur: () => onBlur(value)
}))