import React from 'react';
import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import Bible from '../bible';

describe('Bible page', () => {
  it('matches the snapshot', () => {
    const location = {
      state: {
        id: 'test', description: 'test', image: 'test', title: 'test', languages: ['test'],
      },
    };
    const component = renderer.create(
      <BrowserRouter>
        <Bible location={location} />
      </BrowserRouter>,
    );
    expect(component).toMatchSnapshot();
  });
});
