import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import Button from '@material-ui/core/Button';
import { cssLogin } from './styles';
import { DialogTitle, DialogContent, DialogActions } from '@material-ui/core';

const LoginModal = () => {
	return (
		<div>
			<Dialog open={true}>
				<DialogTitle>
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
