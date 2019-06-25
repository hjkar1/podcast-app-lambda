import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import withStyles from '@material-ui/core/styles/withStyles';
import { getFeed } from '../store/actions/actionCreators';
import TopNavBar from './ui/TopNavBar';
import EpisodeList from './EpisodeList';
import Spinner from './ui/Spinner';

const styles = theme => ({
  podcastContainer: {
    margin: theme.spacing.unit
  },
  podcastName: {
    margin: theme.spacing.unit * 2
  },
  image: {
    width: 'auto',
    height: 'auto',
    margin: theme.spacing.unit
  },
  error: {
    margin: theme.spacing.unit * 2
  }
});

class Podcast extends Component {
  componentDidMount() {
    const {
      selectedPodcast,
      episodes,
      podcast,
      match: {
        params: { podcastId }
      },
      getFeed
    } = this.props;

    // The feed is fetched only when there is no feed in the state
    // or if the user selects another podcast.
    if (!episodes || selectedPodcast.toString() !== podcastId) {
      getFeed(podcast);
    }
  }

  render() {
    const {
      loading,
      error,
      match: {
        params: { podcastId }
      },
      episodes,
      podcast,
      classes
    } = this.props;

    if (loading) {
      return <Spinner />;
    }

    const podcastLogo = podcast.artworkUrl100 ? (
      <img
        src={podcast.artworkUrl100}
        alt="Podcast logo"
        className={classes.image}
      />
    ) : null;

    return (
      <Fragment>
        <TopNavBar />
        {episodes ? (
          <div className={classes.podcastContainer}>
            <h1 className={classes.podcastName}>{podcast.trackName}</h1>
            {podcastLogo}
            <EpisodeList episodes={episodes} podcastId={podcastId} />
          </div>
        ) : (
          'No episodes found :('
        )}
        <div className={classes.error}>{error}</div>
      </Fragment>
    );
  }
}

const getPodcast = (podcastId, podcasts) => {
  if (podcasts) {
    // Some trackIds might be numbers -> convert to string.
    return podcasts.find(podcast => podcast.trackId.toString() === podcastId);
  }
  return null;
};

const mapStateToProps = (
  {
    search: { searchResult },
    feed: { selectedPodcast, selectedFeed, loading, error }
  },
  ownProps
) => {
  // Get the podcast from the search results.
  const { podcastId } = ownProps.match.params;
  const podcast = getPodcast(podcastId, searchResult);

  const episodes = selectedFeed ? selectedFeed.items : null;

  return {
    podcast,
    selectedPodcast,
    episodes,
    loading,
    error
  };
};

export default withStyles(styles)(
  connect(
    mapStateToProps,
    { getFeed }
  )(Podcast)
);
