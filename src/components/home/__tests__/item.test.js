import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import Item from '../item';
import store from '../../../store';

describe('Item Home component - ', () => {
  it('matches the snapshot', () => {
    const component = renderer.create(
      <BrowserRouter>
        <Provider store={store}>
          <Item id="test-id" description="test-description" imageUrl="test-imageUrl" title="test-title" languages={['test-languages-1', 'test-languages-2']} />
        </Provider>
      </BrowserRouter>,
    );
    expect(component).toMatchSnapshot();
  });
  it('Renders the Item component correctly', () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <Item id="test-id" description="test-description" imageUrl="test-imageUrl" title="test-title" languages={['test-languages-1', 'test-languages-2']} />
        </Provider>
      </BrowserRouter>,
    );

    expect(screen.getByAltText('test-title'));

    expect(
      screen.getByText((content, element) => (
        element.tagName.toLowerCase() === 'h4'
          && content.includes('test-title')
      )),
    );

    expect(
      screen.getByText((content, element) => (
        element.tagName.toLowerCase() === 'p'
          && content.includes('test-description')
      )),
    );
  });
});
