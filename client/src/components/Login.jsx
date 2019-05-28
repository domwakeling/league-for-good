import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import Button from '@material-ui/core/Button';
import { cssLogin } from './styles';

const UnusedButton = () => (
	<Button
		backgroundColor={cssLogin.raisedButton.backgroundColor}
		href='/auth/google'
		label='Login'
		labelStyle={cssLogin.raisedButton.label}
		style={cssLogin.raisedButton.style}
	/>
);

const LoginModal = () => {
	return (
		<div>
			<Dialog
				actions={<Button />}
				modal={true}
				open={true}
				title='Log in with your Google+ account'
				titleStyle={cssLogin.dialog.title}
			/>

		</div>
	);
};

export default LoginModal;
