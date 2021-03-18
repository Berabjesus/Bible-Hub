import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import SideBar from '../sideBar';
import store from '../../../store';

describe('Side bar common component - ', () => {
  it('matches the snapshot', () => {
    const component = renderer.create(
      <BrowserRouter>
        <Provider store={store}>
          <SideBar slide="test-class" />
        </Provider>
      </BrowserRouter>,
    );
    expect(component).toMatchSnapshot();
  });
  it('Renders the side bar correctly', () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <SideBar slide="test-class" />
        </Provider>
      </BrowserRouter>,
    );

    expect(
      screen.getByText((content, element) => (
        element.tagName.toLowerCase() === 'p'
          && content.includes('Settings')
      )),
    );

    expect(
      screen.getByText((content, element) => (
        element.tagName.toLowerCase() === 'span'
          && content.includes('Dark Mode')
      )),
    );

    expect(
      screen.getByText((content, element) => (
        element.tagName.toLowerCase() === 'a'
          && content.includes('Home')
      )),
    );

    expect(
      screen.getByText((content, element) => (
        element.tagName.toLowerCase() === 'a'
          && content.includes('Favorites')
      )),
    );

    expect(
      screen.getByText((content, element) => (
        element.tagName.toLowerCase() === 'a'
          && content.includes('About')
      )),
    );
  });
});
