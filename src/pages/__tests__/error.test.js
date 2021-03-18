import React from 'react';
import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import Error from '../error';

describe('Error page', () => {
  it('matches the snapshot', () => {
    const component = renderer.create(
      <BrowserRouter>
        <Error history={{ goBack: () => 'test function' }} />
      </BrowserRouter>,
    );
    expect(component).toMatchSnapshot();
  });
});
