import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import Link from '@material-ui/core/Link';
import withStyles from '@material-ui/core/styles/withStyles';
import PropTypes from 'prop-types';

const styles = theme => ({
  listContainer: {
    margin: theme.spacing(2)
  },
  episodeLink: {
    display: 'block',
    margin: theme.spacing(1)
  }
});

const EpisodeList = ({ episodes, podcastId, classes }) => (
  <div className={classes.listContainer}>
    {episodes.map((episode, index) => (
      <div key={index} className={classes.episodeLink}>
        <Link to={`/podcasts/${podcastId}/${index}`} component={RouterLink}>
          {episode.title}
        </Link>
      </div>
    ))}
  </div>
);

EpisodeList.propTypes = {
  episodes: PropTypes.array,
  podcastId: PropTypes.string,
  classes: PropTypes.object
};

export default withStyles(styles)(EpisodeList);
