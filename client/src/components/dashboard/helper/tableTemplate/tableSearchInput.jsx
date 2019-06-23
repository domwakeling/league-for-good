import React from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import SearchIcon from '@material-ui/icons/Search';
import InputAdornment from '@material-ui/core/InputAdornment';
import { cssDashboard } from '../../../styles';

// Optional search for the table template
const SearchTable = props => {
	return (
		<TextField
			// floatingLabelFixed={true}
			// floatingLabelText={'Search ' + props.searchLabel}
			// helperText={<SearchIcon />}
			InputProps={{
				startAdornment: (
					<InputAdornment position='start'>
						<SearchIcon />
					</InputAdornment>
				)
			}}
			label={'Search ' + props.searchLabel}
			onChange={props.onSearch}
			style={cssDashboard.table.search}
			// underlineFocusStyle={cssDashboard.table.searchUnderline}
		/>
	);
};

SearchTable.propTypes = {
	onSearch: PropTypes.func,
	searchLabel: PropTypes.string
};

export default SearchTable;
