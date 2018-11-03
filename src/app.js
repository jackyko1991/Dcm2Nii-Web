import React from 'react';
import {render} from 'react-dom';
import {MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
// import HeaderAppBar from './components/Header';
import AppRouter from './routers/AppRouter';
// import './styles/styles.css'
;

const theme = createMuiTheme({
});

const App = () => (
	<MuiThemeProvider theme={theme}>
		<AppRouter />
	</MuiThemeProvider>
);

render(<App />, document.getElementById('app'));