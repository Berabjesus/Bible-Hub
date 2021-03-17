import React from 'react';
import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import Favorites from '../favorites';

describe('Bible page', () => {
  it('matches the snapshot', () => {
    const component = renderer.create(
      <BrowserRouter>
        <Favorites history={{ goBack: () => 'test function' }} />
      </BrowserRouter>,
    );
    expect(component).toMatchSnapshot();
  });
});
