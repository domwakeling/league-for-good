import React from 'react';
import PropTypes from 'prop-types';
// was FlatButton
import Button from '@material-ui/core/Button';

import { cssCreateLeague } from '../styles';

// Icon Component for the button
export const CreateLeagueIcon = ({icon}) => (
	<img src={icon} style={cssCreateLeague.sportIcon} />
);

CreateLeagueIcon.propTypes = {
	icon: PropTypes.string
};

CreateLeagueIcon.defaultProps = {
	icon: ''
};

// League Button with icon for create league form
export const CreateLeagueButton = ({active, icon, label, onClick}) => (
	<Button
		backgroundColor={active ?
			cssCreateLeague.sportButton.active :
			cssCreateLeague.sportButton.inactive}
		disableTouchRipple={true}
		hoverColor={active ?
			cssCreateLeague.sportButton.active :
			cssCreateLeague.sportButton.hover}
		icon={<CreateLeagueIcon icon={icon} />}
		label={label}
		onTouchTap={() => onClick(label)}
		style={cssCreateLeague.sportButton.style}
	/>
);

CreateLeagueButton.propTypes = {
	active: PropTypes.bool,
	icon: PropTypes.string,
	label: PropTypes.string,
	onClick: PropTypes.func
};

export default CreateLeagueButton;
