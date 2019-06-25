import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { withStyles } from '@material-ui/core/styles';
import { NavLink } from 'react-router-dom';
import Link from '@material-ui/core/Link';

const styles = theme => ({
  root: {
    width: '100%',
    marginBottom: theme.spacing.unit * 2
  },
  navLink: {
    color: 'inherit',
    marginRight: theme.spacing.unit * 2,
    marginLeft: theme.spacing.unit * 2
  },
  grow: {
    flexGrow: 1
  },
  active: {
    cursor: 'default',
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block'
    }
  }
});

class TopNavBar extends Component {
  render() {
    const { children, classes } = this.props;

    const homepageLink = (
      <Link
        activeClassName={classes.active}
        underline="none"
        color="inherit"
        variant="title"
        component={NavLink}
        to="/"
        exact
      >
        Search podcasts from iTunes
      </Link>
    );

    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            {homepageLink}
            <div className={classes.grow} />
            {children}
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default withStyles(styles)(TopNavBar);
