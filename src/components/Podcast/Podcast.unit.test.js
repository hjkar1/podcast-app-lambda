import React from 'react';
import {
  render,
  fireEvent,
  mockClasses,
  mockEpisodes
} from 'utils/unit-test-utils';
import { Podcast } from './Podcast';

/*
  Unit tests for Podcast component.
*/

// Mock podcast id URL parameter.
const mockId = { params: { podcastId: 'test' } };

// Mock podcast.
const mockPodcast = { trackName: 'Test' };

test('renders 20 episodes', () => {
  const { getAllByText } = render(
    <Podcast
      podcast={mockPodcast}
      episodes={mockEpisodes}
      selectedPodcast="test"
      match={mockId}
      getFeed={() => {}}
      classes={mockClasses}
    />
  );

  const elements = getAllByText('Testing');
  expect(elements).toHaveLength(20);
});

test('displays the show more button if there is more than 20 episodes', () => {
  const { getByText } = render(
    <Podcast
      podcast={mockPodcast}
      episodes={mockEpisodes}
      selectedPodcast="test"
      match={mockId}
      getFeed={() => {}}
      classes={mockClasses}
    />
  );

  const showMore = getByText('Show more');
  expect(showMore).toBeDefined();
});

test('hides the show more button if there is less than 21 episodes', () => {
  const shortEpisodeList = mockEpisodes.slice(0, mockEpisodes.length - 1);

  const { queryByText } = render(
    <Podcast
      podcast={mockPodcast}
      episodes={shortEpisodeList}
      selectedPodcast="test"
      match={mockId}
      getFeed={() => {}}
      classes={mockClasses}
    />
  );

  const showMore = queryByText('Show more');
  expect(showMore).toBeNull();
});

test('shows more episodes when the show more button is clicked', () => {
  const { getByText, getAllByText } = render(
    <Podcast
      podcast={mockPodcast}
      episodes={mockEpisodes}
      selectedPodcast="test"
      match={mockId}
      getFeed={() => {}}
      classes={mockClasses}
    />
  );

  const showMore = getByText('Show more');
  fireEvent.click(showMore);

  const elements = getAllByText('Testing');
  expect(elements).toHaveLength(21);
});

test('renders spinner if loading not completed', () => {
  const { getByTestId } = render(
    <Podcast
      loading={true}
      match={mockId}
      getFeed={() => {}}
      classes={mockClasses}
    />
  );
  const element = getByTestId('spinner');
  expect(element).toBeDefined();
});

test('renders error text if there is an error', () => {
  const { getByText } = render(
    <Podcast
      error={'error'}
      match={mockId}
      getFeed={() => {}}
      classes={mockClasses}
    />
  );

  const element = getByText('error');
  expect(element).toBeDefined();
});
