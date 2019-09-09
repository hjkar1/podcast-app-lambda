import * as actionTypes from './actionTypes';

export const searchPodcasts = terms => async dispatch => {
  dispatch(searchPodcastsStart());
  const searchUrl = `https://itunes.apple.com/search?media=podcast&term=${terms}`;
  try {
    const result = await fetch(searchUrl);
    const json = await result.json();
    const podcasts = json.results;
    dispatch(searchPodcastsSuccess(podcasts));
  } catch (error) {
    dispatch(searchPodcastsFail('Something went wrong.'));
  }
};

const searchPodcastsStart = () => ({
  type: actionTypes.SEARCH_PODCASTS_START
});

const searchPodcastsSuccess = searchResult => ({
  type: actionTypes.SEARCH_PODCASTS_SUCCESS,
  searchResult
});

const searchPodcastsFail = error => ({
  type: actionTypes.SEARCH_PODCASTS_FAIL,
  error
});

export const getFeed = podcast => async dispatch => {
  dispatch(getFeedStart());

  // Avoid any possible CORS errors (and the need for an external CORS proxy) by doing
  // the feed fetching and parsing in the backend (in this case a serverless lambda function).
  try {
    const result = await fetch('/.netlify/functions/fetch-feed', {
      body: JSON.stringify(podcast.feedUrl),
      method: 'POST'
    });
    const feed = await result.json();

    // Some trackIds might be numbers -> convert to string.
    const podcastId = podcast.trackId.toString();
    dispatch(getFeedSuccess(podcastId, feed));
  } catch (error) {
    dispatch(getFeedFail('Something went wrong.'));
  }
};

const getFeedStart = () => ({
  type: actionTypes.GET_FEED_START
});

const getFeedSuccess = (podcastId, feed) => ({
  type: actionTypes.GET_FEED_SUCCESS,
  feed,
  podcastId
});

const getFeedFail = error => ({
  type: actionTypes.GET_FEED_FAIL,
  error
});
