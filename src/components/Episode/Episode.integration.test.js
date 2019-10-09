import React from 'react';
import { render, wait, testStore } from 'utils/integration-test-utils';
import Episode from './Episode';

/*
  An integration test for displaying a podcast episode.
*/

// Mock feed.
const mockFeed = {
  items: [
    {
      title: 'Test title 1',
      content: 'Test content 1',
      itunes: { image: null },
      enclosure: { url: 'testurl' }
    },
    {
      title: 'Test title 2',
      content: 'Test content 2',
      itunes: { image: null },
      enclosure: { url: 'testurl' }
    },
    {
      title: 'Test title 3',
      content: 'Test content 3',
      itunes: { image: null },
      enclosure: { url: 'testurl' }
    }
  ]
};

// Mock the episode number URL parameter.
const mockId = { params: { episodeNumber: 1 } };

test('displays the feed', () => {
  // Dispatch mock feed into the empty store.
  testStore.dispatch({
    type: 'GET_FEED_SUCCESS',
    podcastId: 'test',
    feed: mockFeed
  });

  const { getByText } = render(<Episode match={mockId} />);

  const element = getByText('Test title 2');

  expect(element).toBeDefined();
});
