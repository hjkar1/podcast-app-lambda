import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import SearchBar from './SearchBar';

/* Unit test for the search bar component. */

// A helper component that renders the tested component
// and keeps the text entered to the tested component in its state.
const Wrapper = props => {
  const onChange = event => {
    props.state.value = event.target.value;
  };

  return (
    <SearchBar
      searchTerms={props.state.value}
      handleSearchSubmit={props.onSubmit}
      handleChange={onChange}
    />
  );
};

test('forwards the entered search term to parent component', () => {
  const onSubmit = jest.fn();
  const state = {
    value: ''
  };

  const { getByPlaceholderText, getByRole } = render(
    <Wrapper onSubmit={onSubmit} state={state} />
  );

  const input = getByPlaceholderText('Search podcasts');
  const form = getByRole('form');

  fireEvent.change(input, {
    target: { value: 'testing' }
  });
  fireEvent.submit(form);

  expect(onSubmit.mock.calls.length).toBe(1);
  expect(state.value).toBe('testing');
});
