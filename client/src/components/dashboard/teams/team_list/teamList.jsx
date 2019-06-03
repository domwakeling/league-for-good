import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { cssContent, cssDashboard } from '../../../styles';
import TableTemplate from '../../helper/tableTemplate/tableTemplate.jsx';
// TODO: this used to be a DropDownMenu, check it still works
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

import { configTeamForTable } from './teamData';

// Table that lists all the teams and the ability to edit or delete each team
// Can also view the roster of each team
class TeamTable extends Component {
	constructor(props) {
		super(props);

		this.state = {
			filterValue: 'all',
			anchorEl: null
		};
	}

	handleChange = (e, i, filterValue) => {
		this.setState({ filterValue, anchorEl: e.currentTarget });
	}

    // Filter the team list array with params in state
	filterTeams() {
		const { filterValue } = this.state;
		let teams = this.props.rows;

		return teams.filter(team => {
			let filterFlag;

			if (filterValue === 'all') {
				filterFlag = true;
			} else if (filterValue === 'active') {
				filterFlag = !team.currentlyActive;
			} else {
				filterFlag = team.currentlyActive;
			}

			return filterFlag;
		});
	}

	render() {

		return (
			<div style={cssContent.body}>
				<Menu
					onChange={this.handleChange}
					open={false}
					style={cssDashboard.table.teams.dropdown}
					value={this.state.filterValue}
					>
					<MenuItem value='all'>All Teams</MenuItem>
					<MenuItem value='active'>Active Teams</MenuItem>
					<MenuItem value='archived'>Archived Teams</MenuItem>
				</Menu>
				<TableTemplate
					headers={this.props.headers}
					rows={this.filterTeams()}
				/>
			</div>
		);
	}
}
const configTable = configTeamForTable();

TeamTable.propTypes = {
	headers: PropTypes.arrayOf(PropTypes.object),
	rows: PropTypes.arrayOf(PropTypes.array)
};

function mapStateToProps(state) {
	const { headers, rows } = configTable(state);
	return { headers, rows };
}

export default connect(mapStateToProps)(TeamTable);


