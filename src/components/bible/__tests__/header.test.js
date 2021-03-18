import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import Header from '../header';

describe('Header bible component - ', () => {
  it('matches the snapshot', () => {
    const component = renderer.create(
      <BrowserRouter>
        <Header title="test title" languages={['test language1', 'test languages 2']} />
      </BrowserRouter>,
    );
    expect(component).toMatchSnapshot();
  });

  it('Renders the Header correctly', () => {
    render(
      <BrowserRouter>
        <Header title="test title" languages={['test language1', 'test languages 2']} />
      </BrowserRouter>,
    );

    expect(
      screen.getByText((content, element) => (
        element.tagName.toLowerCase() === 'strong'
          && content.includes('test title')
      )),
    );

    expect(
      screen.getByText((content, element) => (
        element.tagName.toLowerCase() === 'strong'
          && content.includes('test language1')
      )),
    );
  });
});
