import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';

import { submit } from 'redux-form';

import modalMapping from './modalMappings.jsx';
import * as submitActions from '../../actions/index';

import { cssModal } from '../styles';
import { DialogActions } from '@material-ui/core';

class Modal extends Component {

	handleClose = () => {
		this.props.dispatch({type: 'CLOSE_MODAL'});
	};


	getAction = () => {
		const { view, dispatch } = this.props;
		const { onSubmit, reduxFormName } = modalMapping[view];

		// HAndle edge case in which ReduxForm component is being used as
		// child content and needs to be submitted remotely via a modal action
		if ( reduxFormName ) {
			return { handleSubmit: () => dispatch(submit(reduxFormName)) };
		}

		return bindActionCreators({
			// eslint-disable-next-line import/namespace
			handleSubmit: submitActions[onSubmit]
		}, dispatch);
	};

	render() {

		const { view, open, data } = this.props;

		const { title, Children, actionLabel } = modalMapping[view];

		const handleSubmit = this.getAction().handleSubmit;

		// const actions = [
		// 	<Button
		// 		backgroundColor={cssModal.raisedButton.backgroundColor}
		// 		// label={actionLabel || 'Submit'}
		// 		labelStyle={cssModal.raisedButton.label}
		// 		onClick={() => handleSubmit(data)}
		// 		style={cssModal.raisedButton.style}
		// 		>
		// 		{actionLabel || 'Submit'}
		// 	</Button>,
		// 	<Button
		// 		backgroundColor={cssModal.raisedButton.backgroundColor}
		// 		// label='Cancel'
		// 		labelStyle={cssModal.raisedButton.label}
		// 		onClick={this.handleClose}
		// 		style={cssModal.raisedButton.style}
		// 		>
		// 		Cancel
		// 	</Button>
		// ];

		return (
			<div>
				<Dialog
					// actions={actions}
					// bodyStyle={cssModal.dialogBody}
					// contentStyle={cssModal.dialogContent}
					// modal={false}
					// onRequestClose={this.handleClose}
					onClose={this.handleClose}
					open={open}
					// title={title}
					// titleStyle={cssModal.title}
					>
					<DialogTitle style={cssModal.title}>{title}</DialogTitle>
					{Children ? <Children {...data} /> : null}
					<DialogActions>
						<Button
							// backgroundColor={cssModal.raisedButton.backgroundColor}
							// label={actionLabel || 'Submit'}
							// labelStyle={cssModal.raisedButton.label}
							color='primary'
							onClick={() => handleSubmit(data)}
							style={cssModal.raisedButton.style}
							>
							{actionLabel || 'Submit'}
						</Button>
						<Button
							// backgroundColor={cssModal.raisedButton.backgroundColor}
							// label='Cancel'
							// labelStyle={cssModal.raisedButton.label}
							color='primary'
							onClick={this.handleClose}
							style={cssModal.raisedButton.style}
							>
							Cancel
						</Button>
					</DialogActions>
				</Dialog>
			</div>
		);
	}
}

Modal.propTypes = {
	data: PropTypes.object,
	dispatch: PropTypes.func,
	open: PropTypes.bool,
	view: PropTypes.string
};

function mapStateToProps({ modal }) {
	const { open, view, data } = modal;
	return { open, view, data };
}


export default connect(mapStateToProps)(Modal);
