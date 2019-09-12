import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import '@testing-library/jest-dom/extend-expect';
import { render, wait } from '@testing-library/react';
import Podcast from './Podcast';
import searchReducer from '../store/reducers/searchReducer';
import feedReducer from '../store/reducers/feedReducer';

// Use BrowserRouter to prevent errors caused by the usage of NavLink
// in the tested component outside of its normal context.
import { BrowserRouter } from 'react-router-dom';

/*
  An integration test for displaying podcast episodes using mock API response.
  Episodes are stored into the Redux store and displayed in the UI.
*/

const reducer = combineReducers({
  feed: feedReducer,
  search: searchReducer
});

const store = createStore(reducer, applyMiddleware(thunk));

// Dispatch mock state (search result) into the empty store.
store.dispatch({
  type: 'SEARCH_PODCASTS_SUCCESS',
  searchResult: [{ trackId: 'test', trackName: '' }]
});

// Mock response feed.
const mockFeed = {
  items: [{ title: 'Testing' }]
};

// Mock podcast id URL parameter that matches the one in the store.
const mockId = { params: { podcastId: 'test' } };

it('displays the feed', async () => {
  fetch.mockResponseOnce(JSON.stringify(mockFeed));
  const { container } = render(
    <Provider store={store}>
      <BrowserRouter>
        <Podcast match={mockId} />
      </BrowserRouter>
    </Provider>
  );

  await wait(() => {
    expect(container).toHaveTextContent('Testing');
  });
});
