import React from 'react';
import propTypes from 'prop-types';
import { Field } from 'redux-form';
import {List, ListItem} from '@material-ui/core/List';
import { Checkbox } from '../../../../redux_form_mui/replacement';

const PlayerList = ({ teamName, players }) => (
	<List subheader={teamName}>
		{/* <Subheader>{teamName}</Subheader> */}
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
				)
			)
		}
	</List>
);

PlayerList.propTypes = {
	players: propTypes.array,
	teamName: propTypes.string
};

export default PlayerList;
