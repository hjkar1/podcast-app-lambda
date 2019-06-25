import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import Link from '@material-ui/core/Link';
import withStyles from '@material-ui/core/styles/withStyles';

const styles = theme => ({
  listContainer: {
    margin: theme.spacing.unit
  },
  podcastLink: {
    display: 'block',
    margin: theme.spacing.unit
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

export default withStyles(styles)(PodcastList);
