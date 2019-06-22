import React from 'react';
import PropTypes from 'prop-types';
import MenuItem from '@material-ui/core/MenuItem';
import { Field } from 'redux-form';
import { cssDashboard } from '../../../../styles';
import { Select } from '../../../../utils/redux_form_mui/replacement';

const renderTeams = teams =>
	teams.map(team => (
		<MenuItem
			key={team._id}
			primaryText={team.name}
			value={team._id}
		/>
		)
	);


export const TeamDropdowns = props => (
	<div style={cssDashboard.formRow}>
			<Field
				component={Select}
				floatingLabelText='Home Team'
				hintText='Select the home team'
				name='homeTeamId'
				style={cssDashboard.settings.forms.add.selectField}
				>
				{
					renderTeams(props.teams)
				}
			</Field>
			<Field
				component={Select}
				floatingLabelText='Opponent'
				hintText='Select the an opponent'
				name='awayTeamId'
				style={cssDashboard.settings.forms.add.selectField}
				>
				{
					renderTeams(props.teams)
				}
			</Field>
	</div>
);


TeamDropdowns.propTypes = {
	teams: PropTypes.array
};


export default TeamDropdowns;
