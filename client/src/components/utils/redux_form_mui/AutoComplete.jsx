// adapted from redux-form-material-ui, which does not support MUI above v0.20
// https://www.npmjs.com/package/redux-form-material-ui

// TODO: fix AUtoComplete
import { TextField } from '@material-ui/core';
import createComponent from './createComponent';
import mapError from './mapError';

export default createComponent(TextField, ({
    input: { onChange, value },
    onNewRequest,
    dataSourceConfig,
    dataSource,
    ...props
}) => ({
    ...mapError(props),
    dataSourceConfig,
    dataSource,
    searchText: dataSourceConfig && dataSource ? (dataSource.find((item) => item[dataSourceConfig.value] === value) || {})[dataSourceConfig.text] : value,
    onNewRequest: (value, index) => {
        onChange(
            typeof value === 'object' && dataSourceConfig
                ? value[dataSourceConfig.value]
                : value
        );
        if (onNewRequest) {
            onNewRequest(value, index);
        }
    },
    onUpdateInput: value => {
        if (!dataSourceConfig) {
            onChange(value);
        }
    }
}));
