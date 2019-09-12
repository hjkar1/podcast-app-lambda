import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { Episode } from './Episode';

// Use BrowserRouter to prevent errors caused by the usage of NavLink
// in the tested component outside of its normal context.
import { BrowserRouter } from 'react-router-dom';

describe('<Episode />', () => {
  // Mock Material-UI classes (HOC -> not included in the export used in this test).
  const mockClasses = {
    episodeContainer: {},
    episodeTitle: {},
    image: {},
    player: {},
    description: {}
  };

  const mockEpisode = {
    title: 'title',
    content: 'content',
    itunes: { image: 'image' },
    enclosure: { url: 'url' }
  };

  let component;

  beforeEach(() => {
    component = render(
      <BrowserRouter>
        <Episode classes={mockClasses} episode={mockEpisode} />
      </BrowserRouter>
    );
  });

  test('renders the episode title', () => {
    const element = component.getByText('title');
    expect(element).toBeDefined();
  });

  test('renders the episode content', () => {
    const element = component.getByText('content');
    expect(element).toBeDefined();
  });

  test('Removes html tags from content text', () => {
    const mockEpisodeWithHTMLTags = {
      title: 'title',
      content: 'Some <b>test</b> content',
      itunes: { image: 'image' },
      enclosure: { url: 'url' }
    };
    const componentWithHTMLTags = render(
      <BrowserRouter>
        <Episode classes={mockClasses} episode={mockEpisodeWithHTMLTags} />
      </BrowserRouter>
    );
    const element = componentWithHTMLTags.getByText('Some test content');
    expect(element).toBeDefined();
  });
});
