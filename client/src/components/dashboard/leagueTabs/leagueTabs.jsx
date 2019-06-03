import React from 'react';
import PropTypes from 'prop-types';

import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { generateLinks } from './tab_navbar/generateLinks.jsx';
import { tabs } from './leagueTabData';
import { cssDashboard } from '../../styles';

import TeamRoutes from '../teams/routes.jsx';
import PlayerRoutes from '../players/routes.jsx';
import SettingsRoutes from '../settings/routes.jsx';
import SeasonRoutes from '../seasons/routes.jsx';

// Routes for each tab tab. Any possible view associated with a tab
const routes = {
	Teams: <TeamRoutes />,
	Players: <PlayerRoutes />,
	Seasons: <SeasonRoutes />,
	Settings: <SettingsRoutes />
};

// Tabs for each section the user can manage
const LeagueTabs = ({history, leagueId}) => {

	const [value, setValue] = React.useState(0);

	function handleChange(e, newValue) {
		setValue(newValue);
		history.push(tabs[newValue].links[0].url);
	}

	return (
		<div>
			<Tabs
				onChange={handleChange}
				style={cssDashboard.tabs.inkBar}
				value={value}
				>
				{
					tabs.map(tab => (
						<Tab
							// key={i}
							label={tab.name}
							// onActive={()=> history.push(tab.links[0].url)}
							style={cssDashboard.tabs.tab}
							>
							{/* {generateLinks(tab.links, leagueId)}
							{routes[tab.name]} */}
						</Tab>
						)
					)
				}
			</Tabs>
			{value === 0 && <TeamRoutes />}
			{/* {value === 1 && <PlayerRoutes />}
			{value === 2 && <SeasonRoutes />}
			{value === 3 && <SettingsRoutes />} */}
		</div>
	);
};

LeagueTabs.propTypes = {
	history: PropTypes.object,
	leagueId: PropTypes.string
};

export default LeagueTabs;
