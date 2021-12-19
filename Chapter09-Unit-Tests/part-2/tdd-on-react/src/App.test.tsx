import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import 'jest-styled-components';

import { pickInputTagFrom } from 'Components/Input/index.test';

import App from './App';

describe('<App />', () => {
  it('should render its components.', () => {
    const { container } = render(<App />);

    // Exist Input Box
    const input = pickInputTagFrom(container, '');
    expect(input).toBeInTheDocument();
    const addButton = screen.getByText('Add').parentElement as HTMLElement;
    expect(addButton).toBeInTheDocument();

    expect(container).toMatchSnapshot();
  });

  it('should handle state: "todo" - it makes the input tag clean after click the "Add button".', () => {
    const { container } = render(<App />);

    // Typing in input tag
    const input = pickInputTagFrom(container, '');
    fireEvent.change(input, { target: { value: 'type something' } });
    expect(input.value).toBe('type something');
    expect(container).toMatchSnapshot();

    // Click the Add Button
    const addButton = screen.getByText('Add').parentElement as HTMLElement;
    fireEvent.click(addButton);
    expect(input.value).toBe('');
    expect(container).toMatchSnapshot();
  });
});
