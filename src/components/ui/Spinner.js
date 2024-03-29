import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  spinnerContainer: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: theme.spacing(10)
  }
});

const Spinner = ({ classes }) => (
  <div className={classes.spinnerContainer}>
    <CircularProgress size={50} thickness={5} data-testid="spinner" />
  </div>
);

export default withStyles(styles)(Spinner);
