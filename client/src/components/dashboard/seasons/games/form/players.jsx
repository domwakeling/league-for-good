import React from 'react';
import propTypes from 'prop-types';
import { Field } from 'redux-form';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListSubheader from '@material-ui/core/ListSubheader';
import { Checkbox } from '../../../../utils/redux_form_mui/replacement';

const PlayerList = ({ teamName, players }) => (
	<List subheader={teamName}>
		<ListSubheader>{teamName}</ListSubheader>
		{
			players.map((player, i) => (
				<ListItem
					key={player._id}
					leftCheckbox={
						<Field
							component={Checkbox}
							name={`rosters.${teamName.toLowerCase()}[${i}].checked`}
						/>
					}
					primaryText={player.fullName}
				/>
			))
		}
	</List>
);

PlayerList.propTypes = {
	players: propTypes.array,
	teamName: propTypes.string
};

export default PlayerList;
