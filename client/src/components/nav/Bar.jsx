import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ThemeMenu from './ThemeMenu.jsx';
import { cssAppBar as css } from '../styles';
import PropTypes from 'prop-types';

// Bar goes at the top of the window
// Contains the title, menu toggle and select theme menu
const ThemeIcon = props => {
	return (
		<ThemeMenu
			changeTheme={props.changeTheme}
			themeMenuOpen={props.themeMenuOpen}
			themeMenuToggle={props.themeMenuToggle}
		/>
	);
};

ThemeIcon.propTypes = {
	changeTheme: PropTypes.func,
	themeMenuOpen: PropTypes.bool,
	themeMenuToggle: PropTypes.func
};

const Bar = props => {
	const { toggleMenu, ...iconProps } = props;
	return (
		<AppBar style={css.main}>
			<Toolbar>
				<IconButton
					aria-label='Menu'
					color='inherit'
					edge='start'
					onClick={toggleMenu}
					>
					<MenuIcon style={css.iconStyle}/>
				</IconButton>
				<h3 style={css.text}>League For Good</h3>
				<ThemeMenu {...iconProps} style={css.iconStyle}/>
			</Toolbar>
		</AppBar>
	);
};

Bar.propTypes = {
	toggleMenu: PropTypes.func
};

export default Bar;
