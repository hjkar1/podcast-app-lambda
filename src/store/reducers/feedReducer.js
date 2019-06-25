import * as actionTypes from '../actions/actionTypes';

const initialState = {
  selectedPodcast: null,
  selectedFeed: null,
  loading: false,
  error: false
};

const feedReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_FEED_START:
      return {
        ...state,
        loading: true,
        error: null
      };
    case actionTypes.GET_FEED_SUCCESS:
      return {
        ...state,
        selectedPodcast: action.podcastId,
        selectedFeed: action.feed,
        loading: false,
        error: null
      };
    case actionTypes.GET_FEED_FAIL:
      return {
        ...state,
        loading: false,
        error: action.error
      };
    default:
      return state;
  }
};

export default feedReducer;
