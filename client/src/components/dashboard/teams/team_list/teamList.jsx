import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { cssContent, cssDashboard } from '../../../styles';
import TableTemplate from '../../helper/tableTemplate/tableTemplate.jsx';
import MenuItem from '@material-ui/core/MenuItem';
// TODO: this used to be a DropDownMenu, check it still works
import Popper from '@material-ui/core/Popper';

import { configTeamForTable } from './teamData';

// Table that lists all the teams and the ability to edit or delete each team
// Can also view the roster of each team
class TeamTable extends Component {
	constructor(props) {
		super(props);

		this.state = {
			filterValue: 'all'
		};
	}

	handleChange = (e, i, filterValue) => {
		this.setState({ filterValue });
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
				<Popper
					onChange={this.handleChange}
					style={cssDashboard.table.teams.dropdown}
					value={this.state.filterValue}
					>
					<MenuItem primaryText='All Teams' value='all' />
					<MenuItem primaryText='Active Teams' value='active' />
					<MenuItem primaryText='Archived Teams' value='archived' />
				</Popper>
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


