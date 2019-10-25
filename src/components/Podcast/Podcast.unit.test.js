import React from 'react';
import { render, mockClasses } from 'utils/unit-test-utils';
import { Podcast } from './Podcast';

/*
  Unit tests for Podcast component.
*/

// Mock podcast id URL parameter.
const mockId = { params: { podcastId: 'test' } };

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
