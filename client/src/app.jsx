import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import requireAuth from './hoc/requireAuthentication.jsx';
// higher order components used to bootstrap authentications and loading state

import { ThemeProvider} from '@material-ui/styles/';
import { createMuiTheme } from '@material-ui/core/styles';

import { connect } from 'react-redux';

import Content from './components/Content.jsx';
import Login from './components/Login.jsx';
import themes from './components/styles/themes';

const App = props => {
	const { palette } = props;

	return (
		<ThemeProvider muiTheme={createMuiTheme({ palette })}>
			<Router>
				<div>
					<Route component={requireAuth(Content)} path='/' />
					<Route component={Login} path='/login' />
				</div>
			</Router>
		</ThemeProvider>
	);
};

App.propTypes = {
	palette: PropTypes.object
};


function mapStateToProps(state) {
	const palette = themes.getThemeList()[state.theme];
	return { palette };
}

export default connect(mapStateToProps)(App);
