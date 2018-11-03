import React from 'react';
import HomePage from './components/HomePage';
// import AboutPage from '../components/AboutPage';
// import ContactPage from '../components/ContactPage';
// import FAQPage from '../components/FAQPage';
// import NotFoundPage from '../components/NotFoundPage';
// import ServicesPage from '../components/ServicesPage';
import HeaderAppBar from './components/Header';
import { withStyles } from '@material-ui/core/styles';
import {MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
});

const styles = theme=> ({
    root:{
    },
})

const App = () => (
	<MuiThemeProvider theme={theme}>
		<div>
			<HeaderAppBar />
			<HomePage />
		</div>
	</MuiThemeProvider>
);
export default withStyles(styles)(App);


// import HeaderAppBar from './components/Header';
// import AppRouter from './routers/AppRouter';
// // import './styles/styles.css'
// ;



// const App = () => (

// );


	
	// <Route path="/about" component={AboutPage} />
	// <Route path="/contact" component={ContactPage} />
	// <Route path="/FAQ" component={FAQPage} />
	// <Route path="/services" component={ServicesPage} />
	// <Route component={NotFoundPage} />