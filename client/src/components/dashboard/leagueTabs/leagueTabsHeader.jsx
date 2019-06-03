import React from 'react';
import PropTypes from 'prop-types';
import Toolbar from '@material-ui/core/Toolbar';
import { cssDashboard } from '../../styles';


const Header = ({league}) => (
	<Toolbar style={cssDashboard.toolbar.title}>
			<p>{league.name}</p>
			<span style={cssDashboard.toolbar.separator} />
			<em style={cssDashboard.toolbar.subtitle}>
				{`${league.sportType} League`}
			</em>
	</Toolbar>
);

Header.propTypes = {
	league: PropTypes.object
};

export default Header;
