import { render, screen, fireEvent } from '@testing-library/react';
import {Todo, INPUT_PLACEHOLDER} from '../Todo';

test('renders learn react link', () => {
  render(<Todo/>);
  const linkElement = screen.getByText(/Todo 1/i);
  expect(linkElement).toBeInTheDocument();
  const inputElement = screen.getByPlaceholderText(INPUT_PLACEHOLDER);
  fireEvent.change(inputElement, {target : { value: 'Todo 3'}});
  fireEvent.keyDown(inputElement, { key : 'Enter'});
  const todo3 = screen.getByText(/Todo 4/i);
  expect(todo3).toBeInTheDocument();
});
