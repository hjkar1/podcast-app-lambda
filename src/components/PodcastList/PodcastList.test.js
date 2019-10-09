import React from 'react';
import { render } from 'utils/unit-test-utils';
import PodcastList from './PodcastList';

/* Unit tests for PodcastList component. */

describe('<PodcastList />', () => {
  const mockPodcasts = [
    { trackId: '1', trackName: 'Test 1' },
    { trackId: '2', trackName: 'Test 2' },
    { trackId: '3', trackName: 'Test 3' }
  ];

  test('renders the podcast titles', () => {
    const { getByText } = render(<PodcastList podcasts={mockPodcasts} />);
    const podcast1 = getByText('Test 1');
    const podcast2 = getByText('Test 2');
    const podcast3 = getByText('Test 3');

    expect(podcast1).toBeDefined();
    expect(podcast2).toBeDefined();
    expect(podcast3).toBeDefined();
  });

  test('renders the right amount of podcast links', () => {
    const { getAllByRole } = render(<PodcastList podcasts={mockPodcasts} />);

    const links = getAllByRole('link');

    expect(links).toHaveLength(3);
  });
});
