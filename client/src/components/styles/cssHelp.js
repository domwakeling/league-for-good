import themes from './themes';

// used for colors common to all themes
const theme = themes.getCurrentThemeProps();

// is rendered inside cssContent
export const cssHelp = {
	container: {
		backgroundColor: theme.primary.light,
		padding: '40px',
		textAlign: 'left'
	},
	title: {
		textAlign: 'center',
		marginBottom: '30px'
	},
	sectionHeader: {
		marginTop: '10px',
		marginBottom: '10px'
	},
	section: {
		marginLeft: '25px'
	},
	ul: {
		width: '75%',
		height: 'auto',
		padding: '20px',
		margin: '0px auto',
		marginBottom: '40px',
		color: theme.text.secondary,
		backgroundColor: theme.primary.main,
		border: '2px dotted ' + theme.borderColor
	},
	li: {
		marginLeft: '20px'
	}
};
