import { render, screen } from '@testing-library/react';
import {TodoList} from '../TodoList';

test('renders learn react link', () => {
  render(<TodoList todos={[{id: 1, text: 'Todo 1'}]}/>);
  const linkElement = screen.getByText(/Todo 1/i);
  expect(linkElement).toBeInTheDocument();
});
