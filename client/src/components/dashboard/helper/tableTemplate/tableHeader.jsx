import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
// import {
// 	TableHeader as MuiTableHeader,
// 	TableHeaderColumn,
// 	TableRow
// } from '@material-ui/core/Table';

// TODO: look at rebuilding ColumnHeaderChild 
// import ColumnHeaderChild from './columnHeaderChild.jsx';
import { cssDashboard } from '../../../styles';

// Header row for the table containing column names
export default class TableHeader extends Component {
	// static muiName = 'TableHeader';


	renderColumns = () => {
		const { onSort, sortColumnIndex, sortDirection } = this.props;
		return this.props.headers.map(function(header, i) {
			return (
				// <TableHeaderColumn
				<TableCell
					colSpan={header.colSpan || 1}
					key={i}
					style={cssDashboard.table.colHeaderStyle}
					>
						{header.label}
					{/* <ColumnHeaderChild
						colIndex={i}
						label={header.label}
						onClick={onSort}
						sortable={header.sortable}
						sortColumnIndex={sortColumnIndex}
						sortDirection={sortDirection}
					/> */}
				{/* </TableHeaderColumn> */}
				</TableCell>
			);
		});
	}
	render() {
		return (
			// <MuiTableHeader
			<TableHead
				adjustForCheckbox={false}
				displaySelectAll={false}
				selectable={false}
				>
				<TableRow>
					{ this.renderColumns()}
				</TableRow>
			{/* </MuiTableHeader> */}
			</TableHead>
		);
	}
}

TableHeader.propTypes = {
	headers: PropTypes.arrayOf(PropTypes.object),
	onSort: PropTypes.func,
	sortColumnIndex: PropTypes.number,
	sortDirection: PropTypes.string
};
