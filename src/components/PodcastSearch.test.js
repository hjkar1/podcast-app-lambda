import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { render, fireEvent, wait } from '@testing-library/react';
import PodcastSearch from './PodcastSearch';
import searchReducer from '../store/reducers/searchReducer';
import feedReducer from '../store/reducers/feedReducer';

// Use BrowserRouter to prevent errors caused by the usage of NavLink
// outside of its normal context.
import { BrowserRouter } from 'react-router-dom';

/*
  An integration test for searching podcasts using mock API response.
  Search results are stored into the Redux store and displayed in the UI.
*/

const reducer = combineReducers({
  feed: feedReducer,
  search: searchReducer
});

const store = createStore(reducer, applyMiddleware(thunk));

const mockSearchResult = {
  results: [{ trackId: 0, trackName: 'Testing' }]
};

test('displays search result', async () => {
  fetch.mockResponseOnce(JSON.stringify(mockSearchResult));
  const { container } = render(
    <Provider store={store}>
      <BrowserRouter>
        <PodcastSearch />
      </BrowserRouter>
    </Provider>
  );

  const searchInput = container.querySelector('#search');
  const searchForm = container.querySelector('form');
  fireEvent.change(searchInput, { target: { value: 'testing' } });
  fireEvent.submit(searchForm);

  await wait(() => {
    expect(container).toHaveTextContent('Testing');
  });
});
