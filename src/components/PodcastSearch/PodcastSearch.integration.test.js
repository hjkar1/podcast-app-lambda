import React from 'react';
import { render, fireEvent, wait } from 'utils/integration-test-utils';
import PodcastSearch from './PodcastSearch';

/*
  An integration test for searching podcasts using mock API response.
  Search results are stored into the Redux store and displayed in the UI.
*/

const mockSearchResult = {
  results: [{ trackId: 0, trackName: 'Test result' }]
};

test('displays search result', async () => {
  fetch.mockResponseOnce(JSON.stringify(mockSearchResult));
  const { getByPlaceholderText, getByRole, getByText } = render(
    <PodcastSearch />
  );

  const searchInput = getByPlaceholderText('Search podcasts');
  const searchForm = getByRole('form');
  fireEvent.change(searchInput, { target: { value: 'testing' } });
  fireEvent.submit(searchForm);

  await wait(() => {
    const element = getByText('Test result');
    expect(element).toBeDefined();
  });
});
