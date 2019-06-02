import React from 'react';
import PropTypes from 'prop-types';
import ListItemLink from '../utils/ListItemLink.jsx';
import * as Links from '../routes';

import Avatar from '@material-ui/core/Avatar';

import { SportsIcons } from '../sports';
import { cssMenu } from '../styles';

const MenuLeagueItem = props => {
    const { league, selectLeague } = props;
    const bgCol = cssMenu.avatar.backgroundColor;

    return (
        <ListItemLink
            icon={
                <Avatar
                    src={SportsIcons[league.sportType]}
                    style={ {backgroundColor: bgCol } }
                />
            }
            onClick={() => selectLeague(league)}
            primary={league.name}
            to={Links.TEAM_LIST}
        />
    );
};

MenuLeagueItem.propTypes = {
    league: PropTypes.object,
    selectLeague: PropTypes.func
};

export default MenuLeagueItem;
