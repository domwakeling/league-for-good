// A template helper class to generate new links for panels under tabs
import React from 'react';
import PropTypes from 'prop-types';

import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import { cssContent } from '../../../styles';
import { Link, withRouter } from 'react-router-dom';

const LinkTemplate = props => {

	const { description, url, leagueId, icon, location: {pathname}} = props;

	const { iconNavbar: { iconButton }} = cssContent;

	const linkIsActive = url && pathname.match(url) && pathname !== '/dashboard';
		// In progress..... Checks if icon should be highlighted

	return (
		<Link to={{ pathname: url, state: {leagueId} }}>
			<Tooltip placement='bottom-start' title={description}>
				<IconButton
					// hoveredStyle={iconButton.hoveredStyle}
					// iconStyle={ linkIsActive ?
					// 	iconButton.iconStyleActive :
					// 	iconButton.iconStyle
					// }
					color={linkIsActive ? 'primary' : 'secondary'}
					style={iconButton.style}
					// tooltip={description}
					// tooltipPosition='bottom-right'
					// touch={true}
					>
					{icon}
				</IconButton>
			</Tooltip>
		</Link>
	);
};

LinkTemplate.propTypes = {
	description: PropTypes.string,
	icon: PropTypes.object,
	leagueId: PropTypes.string,
	location: PropTypes.object,
	url: PropTypes.string
};

export default withRouter(LinkTemplate);


