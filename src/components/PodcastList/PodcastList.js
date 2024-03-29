import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import Link from '@material-ui/core/Link';
import withStyles from '@material-ui/core/styles/withStyles';
import PropTypes from 'prop-types';

const styles = theme => ({
  listContainer: {
    margin: theme.spacing(1)
  },
  podcastLink: {
    display: 'block',
    margin: theme.spacing(1)
  }
});

const PodcastList = ({ podcasts, classes }) => (
  <div className={classes.listContainer}>
    {podcasts.map(podcast => (
      <Link
        className={classes.podcastLink}
        key={podcast.trackId}
        component={RouterLink}
        to={`/podcasts/${podcast.trackId}`}
      >
        {podcast.trackName}
      </Link>
    ))}
  </div>
);

PodcastList.propTypes = {
  podcasts: PropTypes.array.isRequired,
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(PodcastList);
