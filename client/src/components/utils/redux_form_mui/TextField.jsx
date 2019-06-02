// adapted from redux-form-material-ui, which does not support MUI above v0.20
// https://www.npmjs.com/package/redux-form-material-ui

import TextField from '@material-ui/core/TextField';
import createComponent from './createComponent';
import mapError from './mapError';

export default createComponent(TextField, ({ defaultValue, ...props }) =>
    mapError(props)
);
