import React from 'react';
import { TextField, Select } from '../../../utils/redux_form_mui/replacement';
import MenuItem from '@material-ui/core/MenuItem';
import PropTypes from 'prop-types';
// was RaisedButton
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import HelpOutline from '@material-ui/icons/HelpOutline';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';

import { addStaffMember, openSnackbar } from '../../../../actions/index';

import { cssContent, cssDashboard } from '../../../styles';
import validate, { uniqueEmailVal } from './utils/addStaffFormValidation';


const AddStaffForm = props => {

	const { handleSubmit, roles } = props;

	return (
		<div style={cssContent.body}>
			<h1 style={cssDashboard.title}>Grant access to a staff member</h1>
			<h6 style={cssDashboard.warning}>*Requires a Gmail Account</h6>
			<form
				onSubmit={ handleSubmit }
				style={cssDashboard.form}
				>
				<IconButton
					style={cssDashboard.settings.forms.add.info}
					tooltip='View Description Of Roles'
					tooltipPosition='top-right'
					touch={true}
					>
					<HelpOutline />
				</IconButton>
				<Field
					component={Select}
					hintText='Choose Role'
					name='role'
					style={cssDashboard.settings.forms.add.Select}
					>
					{
						roles.map((role, i) =>
							<MenuItem key={i} primaryText={role} value={role} />
						)
					}
				</Field>
				<Field
					component={TextField}
					floatingLabelStyle={cssDashboard.formRequired}
					floatingLabelText="User's Gmail Account*"
					hintText='Enter A Gmail Account'
					name='email'
					style={cssDashboard.settings.forms.add.textField}
					validate={uniqueEmailVal.bind(null, props.staff)}
				/>
				<Button
					backgroundColor={cssDashboard.raisedButton.backgroundColor}
					label='Add Staff Member'
					labelStyle={cssDashboard.raisedButton.label}
					style={cssDashboard.raisedButton.style}
					type='submit'
				/>
			</form>
		</div>
	);
};

AddStaffForm.propTypes = {
	handleSubmit: PropTypes.func,
	roles: PropTypes.array,
	staff: PropTypes.arrayOf(PropTypes.object)
};

function mapStateToProps(state) {
	return { roles: state.roles, staff: state.settings.staff };
}

export default connect(mapStateToProps)(reduxForm({
	form: 'AddStaffForm',
	validate,
	onSubmit: addStaffMember,
	onSubmitSuccess: openSnackbar
})( AddStaffForm ));
