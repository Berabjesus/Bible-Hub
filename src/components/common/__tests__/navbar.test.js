import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import Navbar from '../navbar';
import store from '../../../store';

describe('Navbar common component', () => {
  it('matches the snapshot', () => {
    const component = renderer.create(
      <BrowserRouter>
        <Provider store={store}>
          <Navbar />
        </Provider>
      </BrowserRouter>,
    );
    expect(component).toMatchSnapshot();
  });
  it('Renders the Navbar correctly', () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <Navbar />
        </Provider>
      </BrowserRouter>,
    );

    expect(
      screen.getByText((content, element) => (
        element.tagName.toLowerCase() === 'p'
          && content.includes('Bible Hub')
      )),
    );
  });
});
