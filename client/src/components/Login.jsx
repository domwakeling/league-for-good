import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar'
import { cssAppBar, cssLogin, cssModal } from './styles';
import { DialogTitle, DialogContent, DialogActions } from '@material-ui/core';

const LoginModal = () => {
	return (
		<div>
			<AppBar style={cssAppBar.main}>
				<Toolbar>
					<p style={cssAppBar.text}>League For Good</p>
				</Toolbar>
			</AppBar>
			<Dialog open={true}>
				<DialogTitle style={cssModal.title}>
					Log in with your Google+ account
				</DialogTitle>
				<DialogContent>
					Log in using your Google+ account; if your account is not
					authenticated you will be asked to do so.
				</DialogContent>
				<DialogActions>
					<Button
						// backgroundColor={cssLogin.raisedButton.backgroundColor}
						color='primary'
						href='/auth/google'
						style={cssLogin.raisedButton.style}
						>
						Login
					</Button>
				</DialogActions>
			</Dialog>

		</div>
	);
};

export default LoginModal;
