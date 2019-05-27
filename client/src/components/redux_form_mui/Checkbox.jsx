// adapted from redux-form-material-ui, which does not support MUI above v0.20
// https://www.npmjs.com/package/redux-form-material-ui

import Checkbox from '@material-ui/core/Checkbox'
import createComponent from './createComponent'

export default createComponent(Checkbox, ({
    input: { onChange, value, ...inputProps },
    meta,
    onCheck,
    defaultChecked,
    ...props
}) => ({
    ...inputProps,
    ...props,
    checked: value ? true : false,
    onCheck: (event, isInputChecked) => {
        onChange(isInputChecked)
        if (onCheck) {
            onCheck(isInputChecked)
        }
    }
}))