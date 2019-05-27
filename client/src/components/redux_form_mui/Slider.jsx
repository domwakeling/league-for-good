// adapted from redux-form-material-ui, which does not support MUI above v0.20
// https://www.npmjs.com/package/redux-form-material-ui

import Slider from '@material-ui/core/Slider'
import createComponent from './createComponent'

export default createComponent(
    Slider,
    ({
        input: { onDragStart, onChange, name, value },
        onChange: onChangeFromField,
        defaultValue,
        meta,
        ...props
    }) => ({
        // eslint-disable-line no-unused-vars
        ...props,
        name,
        value,
        onChange: (event, value) => {
            onChange(value)
            if (onChangeFromField) {
                onChangeFromField(value)
            }
        }
    })
)