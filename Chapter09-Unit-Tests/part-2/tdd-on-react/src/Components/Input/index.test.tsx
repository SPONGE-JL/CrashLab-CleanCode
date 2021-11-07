import React from 'react';
import { render, screen } from '@testing-library/react';
import 'jest-styled-components';

import { Input } from './index';

describe('<Input />', () => {
  it('should render its components', () => {
    const { container } = render(<Input placeholder="This is an Input tag." />);
    expect(container).toMatchSnapshot();

    const input = screen.getByPlaceholderText('This is an Input tag.');
    expect(input).toBeInTheDocument();
    expect(input).toMatchSnapshot();
  });
});
