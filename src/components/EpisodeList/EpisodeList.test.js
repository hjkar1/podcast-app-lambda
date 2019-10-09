import React from 'react';
import { render } from 'utils/unit-test-utils';
import EpisodeList from './EpisodeList';

/* Unit tests for EpisodeList component. */

describe('<EpisodeList />', () => {
  const mockEpisodes = [
    { title: 'Test 1' },
    { title: 'Test 2' },
    { title: 'Test 3' }
  ];

  test('renders the episode titles', () => {
    const { getByText } = render(
      <EpisodeList episodes={mockEpisodes} podcastId={'test'} />
    );
    const episode1 = getByText('Test 1');
    const episode2 = getByText('Test 2');
    const episode3 = getByText('Test 3');

    expect(episode1).toBeDefined();
    expect(episode2).toBeDefined();
    expect(episode3).toBeDefined();
  });

  test('renders the right amount of episode links', () => {
    const { getAllByRole } = render(
      <EpisodeList episodes={mockEpisodes} podcastId={'test'} />
    );

    const links = getAllByRole('link');

    expect(links).toHaveLength(3);
  });
});
