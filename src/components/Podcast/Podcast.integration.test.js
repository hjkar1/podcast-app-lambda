import React from 'react';
import { render, wait, testStore } from 'utils/integration-test-utils';
import Podcast from './Podcast';

/*
  An integration test for displaying podcast episodes using mock API response.
  Episodes are stored into the Redux store and displayed in the UI.
*/

// Dispatch mock state (search result) into the empty store.
testStore.dispatch({
  type: 'SEARCH_PODCASTS_SUCCESS',
  searchResult: [{ trackId: 'test', trackName: '' }]
});

// Mock response feed.
const mockFeed = {
  items: [{ title: 'Testing' }]
};

// Mock podcast id URL parameter that matches the one in the store.
const mockId = { params: { podcastId: 'test' } };

test('displays the feed', async () => {
  fetch.mockResponseOnce(JSON.stringify(mockFeed));
  const { getByText } = render(<Podcast match={mockId} />);

  await wait(() => {
    element = getByText('Testing');
    expect(element).toBeDefined();
  });
});
