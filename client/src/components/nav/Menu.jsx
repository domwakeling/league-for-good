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

import { cssMenu as css} from '../styles';

const Menu = (props) => {
	const { open, leagues, selectLeague, openModal } = props;
	const [openArchive, setOpen] = React.useState(true);
	const activeLeagues = leagues.filter(league => league.archived === false);
	const archivedLeagues = leagues.filter(league => league.archived === true);

	function handleClick(e) {
		e.preventDefault();
		setOpen(!openArchive);
	}

	// use React hook to replace componentDidMount, pass empty array to prevent
	// the effect from continuing to fire whenever an update takes place
	React.useEffect(() => {
		setOpen(false);
	}, []);

	return (
		<Drawer open={open} style={css.drawer} variant='persistent' width={'15%'}>
			<List style={css.drawer.list}>
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
							style={css.archive}
							>
							<ListItemIcon>
								<ArchiveIcon style={css.icons} />
							</ListItemIcon>
							<ListItemText primary='Archive' />
							{openArchive ? <ExpandLess /> : <ExpandMore />}
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
					icon={<AddCircle style={css.icons} />}
					primary='Create League'
					to='/create'
				/>
				<ListItemLink
					icon={<Help style={css.icons} />}
					primary='Help'
					to='/help'
				/>
				<ListItem button={true} onClick={() => openModal('logout')}>
					<ListItemIcon>
						<LogOutIcon style={css.icons} />
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
