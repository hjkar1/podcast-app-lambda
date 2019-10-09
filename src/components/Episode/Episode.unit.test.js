import React from 'react';
import { render, mockClasses } from 'utils/unit-test-utils';
import { Episode } from './Episode';

/* Unit tests for Episode component. */

describe('<Episode />', () => {
  const mockEpisode = {
    title: 'title',
    content: 'content',
    itunes: { image: 'image' },
    enclosure: { url: 'url' }
  };

  test('renders the episode title', () => {
    const { getByText } = render(
      <Episode classes={mockClasses} episode={mockEpisode} />
    );
    const element = getByText('title');
    expect(element).toBeDefined();
  });

  test('renders the episode content', () => {
    const { getByText } = render(
      <Episode classes={mockClasses} episode={mockEpisode} />
    );
    const element = getByText('content');
    expect(element).toBeDefined();
  });

  test('Removes html tags from content text', () => {
    const mockEpisodeWithHTMLTags = {
      title: 'title',
      content: 'Some <b>test</b> content',
      itunes: { image: 'image' },
      enclosure: { url: 'url' }
    };
    const { getByText } = render(
      <Episode classes={mockClasses} episode={mockEpisodeWithHTMLTags} />
    );
    const element = getByText('Some test content');
    expect(element).toBeDefined();
  });
});
