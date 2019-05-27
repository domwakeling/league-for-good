// adapted from redux-form-material-ui, which does not support MUI above v0.20
// https://www.npmjs.com/package/redux-form-material-ui

import { RadioButtonGroup } from '@material-ui/core/RadioButton'
import createComponent from './createComponent'
import mapError from './mapError'

const mapValueToValueSelected = (
    { input: { ...inputProps }, ...props },
    errorProp
) => {
    return mapError(
        {
            ...props,
            input: { ...inputProps, valueSelected: inputProps.value }
        },
        errorProp
    )
}

export default createComponent(RadioButtonGroup, mapValueToValueSelected)
