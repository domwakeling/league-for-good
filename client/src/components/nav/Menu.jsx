import React from 'react';
import PropTypes from 'prop-types';

import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import AddCircle from '@material-ui/icons/AddCircleRounded';
import Help from '@material-ui/icons/Help';
import ArchiveIcon from '@material-ui/icons/Archive';
import LogOutIcon from '@material-ui/icons/ExitToApp';

import ListItemLink from '../utils/ListItemLink.jsx';
import MenuLeagueItem from './MenuLeagueItem.jsx';

import { cssMenu } from '../styles';

const Menu = (props) => {
	const { open, leagues, selectLeague, openModal } = props;
	const [openArchive, setOpen] = React.useState(true);
	const activeLeagues = leagues.filter(league => league.archived === false);
	const archivedLeagues = leagues.filter(league => league.archived === true);

	function handleClick(e) {
		e.preventDefault();
		console.log('Click');
		setOpen(!openArchive);
	}

	return (
		<Drawer open={open} variant='persistent' width={'15%'}>
			<List style={cssMenu.drawer.list}>
				{activeLeagues.length > 0 ? (
					<div>
						{activeLeagues.map((league, i) => (
							<MenuLeagueItem
								key={i}
								league={league}
								selectLeague={selectLeague}
							/>
							)
						)}
						< Divider />
					</div>) : <noscript />
				}
				{archivedLeagues.length > 0 ? (
					<div>
						<ListItem
							button={true}
							onClick={handleClick}
							style={cssMenu.archive}
							>
							<ListItemIcon>
								<ArchiveIcon style={cssMenu.icons} />
							</ListItemIcon>
							<ListItemText primary='Archive' />
							{open ? <ExpandLess /> : <ExpandMore />}
						</ListItem>
						<Collapse in={openArchive} timeout='auto' unmountOnExit={true}>
							<List>
								{archivedLeagues.map((league, i) => (
									<MenuLeagueItem
										key={i}
										league={league}
										selectLeague={selectLeague}
									/>
									)
								)}
							</List>
						</Collapse>
						< Divider />
					</div>) : <noscript />
				}
				<ListItemLink
					icon={<AddCircle style={cssMenu.icons} />}
					primary='Create League'
					to='/create'
				/>
				<ListItemLink
					icon={<Help style={cssMenu.icons} />}
					primary='Help'
					to='/help'
				/>
				<ListItem onClick={() => openModal('logout')}>
					<ListItemIcon>
						<LogOutIcon style={cssMenu.icons} />
					</ListItemIcon>
					<ListItemText primary='Log out' />
				</ListItem>
			</List>
		</Drawer>
	);
};

Menu.propTypes = {
	leagues: PropTypes.arrayOf(PropTypes.object),
	open: PropTypes.bool,
	openModal: PropTypes.func,
	selectLeague: PropTypes.func
};

export default Menu;
