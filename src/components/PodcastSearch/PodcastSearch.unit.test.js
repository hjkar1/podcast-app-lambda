import React from 'react';
import { render } from 'utils/unit-test-utils';
import { PodcastSearch } from './PodcastSearch';

/*
  Unit tests for PodcastSearch component.
*/

test('renders spinner if loading not completed', () => {
  const { getByTestId } = render(
    <PodcastSearch loading={true} searchPodcasts={() => {}} />
  );
  const element = getByTestId('spinner');
  expect(element).toBeDefined();
});

test('renders error text if there is an error', () => {
  const { getByText } = render(
    <PodcastSearch error={'error'} searchPodcasts={() => {}} />
  );

  const element = getByText('error');
  expect(element).toBeDefined();
});
