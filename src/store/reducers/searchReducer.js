import * as actionTypes from '../actions/actionTypes';

const initialState = { searchResult: null, loading: false, error: null };

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SEARCH_PODCASTS_START:
      return {
        ...state,
        loading: true,
        error: null
      };
    case actionTypes.SEARCH_PODCASTS_SUCCESS:
      return {
        ...state,
        searchResult: action.searchResult,
        loading: false,
        error: null
      };
    case actionTypes.SEARCH_PODCASTS_FAIL:
      return {
        ...state,
        loading: false,
        error: action.error
      };
    default:
      return state;
  }
};

export default searchReducer;
