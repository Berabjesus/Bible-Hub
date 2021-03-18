import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import ToolTip from '../tooltip';
import store from '../../../store';

describe('ToolTip read component - ', () => {
  it('matches the snapshot', () => {
    const component = renderer.create(
      <BrowserRouter>
        <Provider store={store}>
          <ToolTip style={{ color: 'white' }} />
        </Provider>
      </BrowserRouter>,
    );
    expect(component).toMatchSnapshot();
  });
  it('Renders the ToolTip component correctly', () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <ToolTip style={{ color: 'white' }} />
        </Provider>
      </BrowserRouter>,
    );
    expect(
      screen.getByText((content, element) => (
        element.tagName.toLowerCase() === 'p'
          && content.includes('favorites')
      )),
    );
  });
});
