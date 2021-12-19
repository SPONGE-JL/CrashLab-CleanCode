import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// Mocks react-dom and its render method, so that we can assert
// that render is called with <App /> and HTML element with id = root
jest.mock('react-dom', () => ({ render: jest.fn() }));

describe('ReactDOM', () => {
  it('renders with App and root div', () => {
    // Create and append to document body and HTML element with id = root
    const root = document.createElement('div');
    root.id = 'root';
    document.body.appendChild(root);

    // Requires index.tsx so that react-dom render method is called
    require('./index.tsx');

    // Asserts render was called with <App /> and HTML element with id = root
    expect(ReactDOM.render).toHaveBeenCalledWith(
      <React.StrictMode>
        <App />
      </React.StrictMode>,
      root,
    );
  });
});
