import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import HomePage from '../components/HomePage';
// import AboutPage from '../components/AboutPage';
// import ContactPage from '../components/ContactPage';
// import FAQPage from '../components/FAQPage';
// import NotFoundPage from '../components/NotFoundPage';
// import ServicesPage from '../components/ServicesPage';
import HeaderAppBar from '../components/Header';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  root: {
  	flexGrow: 1,
  },
};

const AppRouter = () => (
	<BrowserRouter>
		<div>
			<HeaderAppBar />
			<Switch>
				<Route path="/" component={HomePage} exact={true} />
			</Switch>
		</div>
	</BrowserRouter>
);
export default withStyles(styles)(AppRouter);

	
	// <Route path="/about" component={AboutPage} />
	// <Route path="/contact" component={ContactPage} />
	// <Route path="/FAQ" component={FAQPage} />
	// <Route path="/services" component={ServicesPage} />
	// <Route component={NotFoundPage} />