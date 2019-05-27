// adapted from redux-form-material-ui, which does not support MUI above v0.20
// https://www.npmjs.com/package/redux-form-material-ui

const mapError = (
    {
        meta: { touched, error, warning } = {},
        input,
        ...props
    },
    errorProp = 'errorText'
) =>
    (touched && (error || warning)
        ? {
            ...props,
            ...input,
            [errorProp]: error || warning
        }
        : { ...input, ...props });

export default mapError;
