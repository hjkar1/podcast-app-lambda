import React from 'react';
import { render } from 'utils/unit-test-utils';
import TopNavBar from './TopNavBar';

/* Unit test for the top navigation bar component. */

test('renders its children', () => {
  const childComponent = <div>Test</div>;

  const { getByText } = render(<TopNavBar>{childComponent}</TopNavBar>);

  const element = getByText('Test');

  expect(element).toBeDefined();
});
