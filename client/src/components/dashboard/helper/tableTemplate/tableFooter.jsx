import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TableFooter as MuiTableFooter } from '@material-ui/core/TableFooter';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
// import {
// 	TableFooter as MuiTableFooter,
// 	TableRowColumn,
// 	TableRow
// } from '@material-ui/core/Table';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';

const footerTextStyle = {
	float: 'right',
	height: 16,
	paddingTop: 16
};

// footer for the TableTemplate that handles pagination
export default class TableFooter extends Component {
	static muiName = 'TableFooter';

	renderText = () => {
		const { page, rowsPerPage, total } = this.props;
		const start = page * rowsPerPage + 1;
		const end = Math.min(((page + 1) * rowsPerPage), total);
		return `${start} - ${end} of ${total}`;
	}

	render() {
		const { onClick, page, rowsPerPage, total } = this.props;
		return (
			<MuiTableFooter>
				<TableRow>
					{/* <TableRowColumn style={{float: 'right'}}> */}
					<TableCell style={{float: 'right'}}>
						<IconButton
							disabled={page === 0}
							onClick={()=> onClick(-1)}
							>
							<ChevronLeft/>
						</IconButton>
						<IconButton
							disabled={(page + 1) * rowsPerPage >= total}
							onClick={()=> onClick(1)}
							>
							<ChevronRight/>
						</IconButton>
					</TableCell>
					{/* </TableRowColumn> */}
					{/* <TableRowColumn style={footerTextStyle}> */}
					<TableCell style={footerTextStyle}>
						{this.renderText()}
					</TableCell>
					{/* </TableRowColumn> */}
				</TableRow>
			</MuiTableFooter>
		);
	}
}

TableFooter.propTypes = {
	onClick: PropTypes.func,
	page: PropTypes.number,
	rowsPerPage: PropTypes.number,
	total: PropTypes.number
};
