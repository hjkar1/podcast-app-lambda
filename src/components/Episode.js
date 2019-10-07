import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import withStyles from '@material-ui/core/styles/withStyles';
import TopNavBar from './ui/TopNavBar';

const styles = theme => ({
  episodeContainer: {
    margin: theme.spacing(1)
  },
  episodeTitle: {
    margin: theme.spacing(2)
  },
  image: {
    maxWidth: '300px',
    maxHeight: '300px',
    width: 'auto',
    height: 'auto',
    margin: theme.spacing(1)
  },
  player: {
    margin: theme.spacing(2)
  },
  description: {
    lineHeight: '1.5',
    margin: theme.spacing(2)
  }
});

// Use named export for unconnected component (for unit testing).
export class Episode extends Component {
  render() {
    if (!this.props.episode) {
      return null;
    }

    const {
      title,
      content,
      itunes: { image },
      enclosure: { url }
    } = this.props.episode;

    const { classes } = this.props;

    // Remove any possible html tags.
    const descriptionText = content ? content.replace(/<[^>]+>/g, '') : null;

    const podcastLogo = image ? (
      <img src={image} alt="Podcast logo" className={classes.image} />
    ) : null;

    return (
      <Fragment>
        <TopNavBar />
        <div className={classes.episodeContainer}>
          <h1 className={classes.episodeTitle}>{title}</h1>
          {podcastLogo}
          <div className={classes.player}>
            <audio src={url} controls />
          </div>
          <p className={classes.description}>{descriptionText}</p>
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = (
  {
    feed: {
      selectedFeed: { items }
    }
  },
  ownProps
) => {
  const { episodeNumber } = ownProps.match.params;
  const episode = items[episodeNumber];
  return {
    episode
  };
};

export default withStyles(styles)(connect(mapStateToProps)(Episode));
