// TODO: remove 'selectable' below
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

export default class CustomTableBody extends Component {

	renderBody = rows => rows.map((row, i) => (
		<TableRow
			key={i}
			// selectable={false}
			>
			{
				row.map(({colSpan, value}, i) => (
					<TableCell
						colSpan={colSpan}
						key={i}
						>
						{ i === 0 ? <b>{value}</b> : <span>{value}</span> }
					</TableCell>
				))
			}
		</TableRow>)
	)

	render() {
		return (
			<TableBody>
				{this.renderBody(this.props.rows)}
			</TableBody>
		);
	}
}

CustomTableBody.propTypes = {
	rows: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.object))
};
