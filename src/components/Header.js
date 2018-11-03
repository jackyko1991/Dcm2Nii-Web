import React from 'react';
import {AppBar, Toolbar, Typography} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  root: {
  	flexGrow: 1,
  },
};

class HeaderAppBar extends React.Component{
	constructor(props) {
		super(props);
		this.state = {
		};
	};

	render() {
		const { classes, theme } = this.props;
    	const { open } = this.state;

		return (
			<div className={classes.root}>
				<AppBar position="static">
					<Toolbar>
						<Typography variant="h6" color="inherit">
				           Dcm2Nii Web
				        </Typography>
					</Toolbar>
				</AppBar>
			</div>
		);
	};
}

export default withStyles(styles)(HeaderAppBar)