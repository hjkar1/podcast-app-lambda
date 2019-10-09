import React, { Fragment } from 'react';
import InputBase from '@material-ui/core/InputBase';
import { fade } from '@material-ui/core/styles/colorManipulator';
import { withStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import PropTypes from 'prop-types';

const styles = theme => ({
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25)
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
      marginRight: theme.spacing(5)
    }
  },
  searchIcon: {
    width: theme.spacing(9),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  inputRoot: {
    color: 'inherit',
    width: '100%'
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 10),
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: 120,
      '&:focus': {
        width: 200
      }
    }
  }
});

const SearchBar = ({
  searchTerms,
  handleChange,
  handleSearchSubmit,
  classes
}) => (
  <Fragment>
    <div className={classes.search}>
      <div className={classes.searchIcon}>
        <SearchIcon />
      </div>
      <form onSubmit={handleSearchSubmit}>
        <InputBase
          id="search"
          placeholder="Search"
          classes={{
            root: classes.inputRoot,
            input: classes.inputInput
          }}
          value={searchTerms}
          onChange={handleChange}
        />
      </form>
    </div>
  </Fragment>
);

SearchBar.propTypes = {
  searchTerms: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleSearchSubmit: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SearchBar);
