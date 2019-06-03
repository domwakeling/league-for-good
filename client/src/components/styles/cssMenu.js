import themes from './themes';

// used for colors common to all themes
const theme = themes.getCurrentThemeProps();

// menu on left side of window
export const cssMenu = {
	drawer: {
		backgroundColor: 'red !important',
		list: {
			marginTop: '70px'
		}
	},
	avatar: {
		backgroundColor: 'none'
	},
	icons: {
		fill: '#555'
	},
	archive: {
		color: '#555'
	}
};
