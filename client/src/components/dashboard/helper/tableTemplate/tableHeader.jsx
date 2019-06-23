import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import { cssDashboard } from '../../../styles';

// Header row for the table containing column names
export default class TableHeader extends Component {

	renderColumns = () => {
		const { onSort, sortColumnIndex, sortDirection } = this.props;
		return this.props.headers.map(function(header, i) {
			return (
				<TableCell
					colSpan={header.colSpan || 1}
					key={i}
					style={cssDashboard.table.colHeaderStyle}
					>
						{
							header.sortable ? (
								<TableSortLabel
									active={i === sortColumnIndex}
									direction={sortDirection}
									hideSortIcon={!header.sortable}
									onClick={(e) => {onSort(e, i);}}
									>
									{header.label}
								</TableSortLabel>
							) : (
								header.label
							)
						}
				</TableCell>
			);
		});
	}
	render() {
		return (
			<TableHead>
				<TableRow>
					{ this.renderColumns()}
				</TableRow>
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
