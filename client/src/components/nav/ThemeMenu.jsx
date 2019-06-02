import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import Brush from '@material-ui/icons/Brush';
import themes from '../styles/themes';
import { cssAppBar as css } from '../styles';
import PropTypes from 'prop-types';

// Generates the theme icons when the user clicks a theme
// @themeList(Object) - a list of all current themes in an object uses the theme
//						name as a key and the value is an object with all the theme props
// @themeNames([String]) - an array of the theme names as strings
// @changeTheme(function) - a function that changes the app's theme
//
// return: an array of components representing each theme as an icon
function generateThemeIcons(themeList, themeNames, changeTheme) {
	return themeNames.map((themeName, i) => {
		return (
			<i
				key={i}
				onClick={changeTheme.bind(null, themeName)}
				style={({
					...css.themeMenuItem,
					...{
						backgroundColor: themeList[themeName].primary.main,
						border: '2px solid ' + themeList[themeName].secondary.main
					}})
				}
			/>
		);
	});
}

// Theme menu to allow users to switch themes
const ThemeMenu = (props) => {
	return (
		<div>
			{
				props.themeMenuOpen &&
				generateThemeIcons(
					themes.getThemeList(), themes.getThemeNames(), props.changeTheme)
			}
			<IconButton
				disableTouchRipple={true}
				onClick={props.themeMenuToggle}
				style={css.iconStyle}
				>
				<Brush />
			</IconButton>
		</div>
	);
};

ThemeMenu.propTypes = {
	changeTheme: PropTypes.func,
	themeMenuOpen: PropTypes.bool,
	themeMenuToggle: PropTypes.func
};

export default ThemeMenu;
