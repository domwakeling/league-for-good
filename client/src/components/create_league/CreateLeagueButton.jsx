/* eslint-disable react/no-multi-comp */
import React from 'react';
import PropTypes from 'prop-types';
// was FlatButton
import Button from '@material-ui/core/Button';

import { cssCreateLeague } from '../styles';
import CreateLeagueIcon from './CreateLeagueIcon.jsx';

const CreateLeagueButton = (props) => {
	const { active, icon, label, onClick } = props;
	return (
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
			onClick={() => onClick(label)}
			style={cssCreateLeague.sportButton.style}
		/>
	);
};

CreateLeagueButton.propTypes = {
	active: PropTypes.bool,
	icon: PropTypes.string,
	label: PropTypes.string,
	onClick: PropTypes.func
};

export default CreateLeagueButton;
