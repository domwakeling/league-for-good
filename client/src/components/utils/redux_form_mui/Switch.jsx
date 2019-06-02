// adapted from redux-form-material-ui, which does not support MUI above v0.20
// https://www.npmjs.com/package/redux-form-material-ui

import Switch from '@material-ui/core/Switch';
import createComponent from './createComponent';

export default createComponent(Switch, ({
    input: { onChange, value, ...inputProps },
    defaultToggled,
    meta,
    ...props
}) => ({
    ...inputProps,
    ...props,
    onToggle: onChange,
    toggled: !!value
}));
