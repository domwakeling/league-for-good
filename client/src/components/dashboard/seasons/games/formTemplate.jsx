import React from 'react';
import PropTypes from 'prop-types';
import Navigation from '../../helper/NavigationArrow.jsx';

// was a RaisedButton
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import { Field } from 'redux-form';


import { cssContent, cssDashboard } from '../../../styles';


import {
	TextField,
	Select,
	DatePicker
} from '../../../utils/redux_form_mui/replacement';


export default class FormTemplate extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			home: props.initialValues.homeTeamId,
			away: props.initialValues.awayTeamId
		};
	}

	handleHomeTeamSelection(id, newTeamId) {
		const newState = { home: newTeamId };
		this.setState(newState);
	}

	handleAwayTeamSelection(id, newTeamId) {
		const newState = { away: newTeamId };
		this.setState(newState);
	}

	render() {
		const { handleSubmit, teams, title, reset } = this.props;
		this.handleHomeTeamSelection = this.handleHomeTeamSelection.bind(this);
		this.handleAwayTeamSelection = this.handleAwayTeamSelection.bind(this);
		return (
			<div style={cssContent.body}>
				<Navigation tooltip='Go Back'>
					<h3>{title}</h3>
				</Navigation>
				<form
					onSubmit={ handleSubmit }
					style={cssDashboard.form}
					>
					<div style={cssDashboard.formRow}>
						<Field
							autoOk={true}
							component={DatePicker}
							floatingLabelStyle={cssDashboard.formRequired}
							floatingLabelText='Game Date'
							format={v => v ? new Date(v) : null}
							formatDate={d => d.toDateString()}
							name='datePlayed'
						/>
						<Field
							component={TextField}
							floatingLabelText='Venue'
							name='venue'
						/>
					</div>
					<br/>
					<div style={cssDashboard.formRow}>
						<Field
							component={Select}
							floatingLabelText='Home Team'
							hintText='Select the home team'
							name='homeTeamId'
							onChange={this.handleHomeTeamSelection}
							style={cssDashboard.settings.forms.add.selectField}
							>
							{teams.filter(team => team._id !== this.state.away)
								.map(team => (
									<MenuItem
										key={team._id}
										primaryText={team.name}
										value={team._id}
									/>
								))
							}
						</Field>
						<Field
							component={Select}
							floatingLabelText='Opponent'
							hintText='Select the an opponent'
							name='awayTeamId'
							onChange={this.handleAwayTeamSelection}
							style={cssDashboard.settings.forms.add.selectField}
							>
							{teams.filter(team => team._id !== this.state.home)
								.map(team => (
									<MenuItem
										key={team._id}
										primaryText={team.name}
										value={team._id}
									/>
								))
							}
						</Field>
					</div>
					<Button
						label='Submit'
						primary={true}
						style={{marginRight: 5}}
						type='submit'
					/>
					<Button
						label='Reset'
						onClick={reset}
						secondary={true}
					/>
				</form>
			</div>
		);
	}
}

FormTemplate.propTypes = {
	handleSubmit: PropTypes.func,
	initialValues: PropTypes.object,
	reset: PropTypes.func,
	teams: PropTypes.array,
	title: PropTypes.string
};
