import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import 'jest-styled-components';

import { Input } from './index';

describe('<Input />', () => {
  it('should render with style rules.', () => {
    const { container } = render(<Input />);

    const input = pickInputTagFrom(container, '');
    expect(input).toHaveStyleRule('font-size', '16px');
    expect(input).toHaveStyleRule('text-align', 'center');
    expect(input).toHaveStyleRule('width', '100%');
    expect(input).toHaveStyleRule('border-radius', '8px');
    expect(input).toHaveStyleRule('border', '1px solid #BDBDBD');
    expect(input).toHaveStyleRule('outline', 'none');
    expect(input).toHaveStyleRule('padding', '10px');
    expect(input).toHaveStyleRule('margin-right', '10px');
  });

  it('should render input tag that contains its value.', () => {
    const { container } = render(<Input placeholder="This is an Input tag." />);

    const input = pickInputTagFrom(container, '');
    fireEvent.change(input, { target: { value: 'type something' } });
    expect(input.value).toBe('type something');
  });

  it('should render with a props: "placeholder"', () => {
    const { container } = render(<Input placeholder="This is an Input tag." />);
    expect(container).toMatchSnapshot();

    const input = screen.getByPlaceholderText('This is an Input tag.');
    expect(input).toBeInTheDocument();
    expect(input).toMatchSnapshot();
  });
});

const pickInputTagFrom = (container: HTMLElement, defaultValue: string): HTMLInputElement => {
  const inputTags = container.getElementsByTagName('input');
  expect(inputTags).toHaveLength(1);

  const input = inputTags[0];
  expect(input.value).toBe(defaultValue);

  return input;
};
