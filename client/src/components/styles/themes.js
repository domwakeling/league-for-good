// import { darkBlack, fullBlack } from '@material-ui/core/colors';
import { fade } from '@material-ui/core/styles/colorManipulator';

// Previosuly imported from MaterialUI, but deprecated since
const darkBlack = 'rgba(0, 0, 0, 0.87)';
const fullBlack = 'rgba(0, 0, 0, 1)';

//* ***************************************************************************
//* ***************************** Theme Colors ********************************
//* ***************************************************************************

// These theme values are only used as main colors in components
// Accent colors remain the same for smaller components
// - primary
//   - main, dark, light
// - primary1Color = should be the same as primary.main

const themeValues = {
	lightgreen: {
		primary1Color: '#8BC34A',
		// primary2Color: '#689F38',
		// primary3Color: '#DCEDC8',
		// pickerHeaderColor: '#8BC34A',
		// canvasColor: '#DCEDC8',
		primary: {
			main: '#8BC34A',
			dark: '#689F38',
			light: '#DCEDC8'
			// pickerHeaderColor: '#8BC34A',
			// canvasColor: '#DCEDC8'
		}
	},

	teal: {
		primary1Color: '#009688',
		// primary2Color: '#00796B',
		// primary3Color: '#B2DFDB',
		// pickerHeaderColor: '#009688',
		// canvasColor: '#B2DFDB',
		primary: {
			main: '#009688',
			dark: '#00796B',
			light: '#B2DFDB'
			// pickerHeaderColor: '#009688',
			// canvasColor: '#B2DFDB'
		}
	},

	lightblue: {
		primary1Color: '#03A9F4',
		// primary2Color: '#0288D1',
		// primary3Color: '#B3E5FC',
		// pickerHeaderColor: '#03A9F4',
		// canvasColor: '#B3E5FC',
		primary: {
			main: '#03A9F4',
			dark: '#0288D1',
			light: '#B3E5FC'
			// pickerHeaderColor: '#03A9F4',
			// canvasColor: '#B3E5FC'
		}
	}
};

// if user has no saved theme, default to this
const defaultTheme = 'lightblue';

const textMixin = {
	// textColor: '#000000',
	// alternateTextColor: '#ffffff'
	text: {
		primary: '#000000',
		secondary: '#ffffff'
	}
};

// - accent1Color = default
// - accent2Color = dark
// - accent3Color = light
const accentMixin = {
	accent1Color: '#455a64',
	accent2Color: '#1c313a',
	accent3Color: '#718792'
};

// extra colors required for the palette
const miscMixin = {
	borderColor: '#bdbdbd',
	disabledColor: `${fade(darkBlack, 0.3)}`,
	clockCircleColor: `${fade(darkBlack, 0.07)}`,
	shadowColor: fullBlack
};

// mixin for warning color to the user
const warningMixin = {
	warning: 'red'
};

const infoMixin = {
	// info: '#a9a9a9'
	text: {
		hint: '#a9a9a9'
	}
};

const themes = (function(themeValues, defaultTheme, ...mixins) {
	// add all the mixins to each theme
	mixins.forEach(mixin => {
		Object.keys(themeValues).forEach(themeName => {
			themeValues[themeName] =
				Object.assign(themeValues[themeName], mixin);
		});
	});

	let currentTheme = themeValues[defaultTheme];
	let currentThemeName = defaultTheme;

	return {
		// set theme properties to a different theme
		// @newTheme(String) - new theme to set to
		setCurrentTheme(newTheme) {
			currentThemeName = newTheme;
			currentTheme = themeValues[newTheme];
		},
		// Retrieves the name of the currently active theme
		getCurrentThemeName() {
			return currentThemeName;
		},
		// Retrieves the property of the currently active theme
		getCurrentThemeProps() {
			return currentTheme;
		},
		// Retrieves a list of all theme names
		getThemeNames() {
			return Object.keys(themeValues);
		},
		// Retrieves a list of all theme properties
		getThemeList: function() {
			return themeValues;
		}
	};
})(
	themeValues,
	defaultTheme,
	accentMixin,
	textMixin,
	miscMixin,
	warningMixin,
	infoMixin
);

export default themes;
