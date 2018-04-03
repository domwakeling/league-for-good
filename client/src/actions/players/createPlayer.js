import axios from 'axios';
import { ADD_PLAYER, OPEN_SNACKBAR, EDIT_LEAGUE } from '../types';
import { ROOT_URL } from '../../../globals';
import { openSnackbar } from '../index';


// Add a new player to DB,
export function createPlayer(form, dispatch, props) {
	const { teams, isAdmin } = props;
	const { team, ...player } = form;
	player.pending = isAdmin ? false : true;

	// format the request body to match the format of player model
	const reqBody = { ...player, teams: [team] };

	if (team && team.teamId) {
		const match = teams.find(t => t._id === team.teamId);
		team.seasonId = match.seasonId;
	}

	axios.post(`${ROOT_URL}/player/add`, reqBody)
		.then(({data}) => {
			// successful message
			openSnackbar(form, dispatch, props);

			// Send new player to the playersReducer to be appended to the list
			dispatch({ type: ADD_PLAYER, payload: data });

			// send newly created player to team if team was selected
			if ( team && team.teamId ) {
				const leagueID = data.leagueId;
				axios.get(`${ROOT_URL}/league/fetch/${leagueID}`)
					.then(leagueData => {
						console.log(leagueData.data);
						dispatch({
							type: EDIT_LEAGUE,
							payload: {...leagueData.data}
						});
					});
			}
		})
		.catch(error => {
			// display error message
			dispatch({ type: OPEN_SNACKBAR, message: error.response.data.message });
		});
}
