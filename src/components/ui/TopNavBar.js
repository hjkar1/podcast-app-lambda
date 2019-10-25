import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { withStyles } from '@material-ui/core/styles';
import { NavLink } from 'react-router-dom';
import Link from '@material-ui/core/Link';
import PropTypes from 'prop-types';

const styles = theme => ({
  root: {
    width: '100%',
    marginBottom: theme.spacing(2)
  },
  navLink: {
    color: 'inherit',
    marginRight: theme.spacing(2),
    marginLeft: theme.spacing(2)
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
        variant="h6"
        component={NavLink}
        to="/"
        exact
      >
        Search podcasts
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

TopNavBar.propTypes = {
  children: PropTypes.node,
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(TopNavBar);
