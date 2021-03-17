import React from 'react';
import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import Error from '../error';

describe('Bible page', () => {
  it('matches the snapshot', () => {
    const component = renderer.create(
      <BrowserRouter>
        <Error />
      </BrowserRouter>,
    );
    expect(component).toMatchSnapshot();
  });
});
