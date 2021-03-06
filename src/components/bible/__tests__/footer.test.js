import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import Footer from '../footer';

describe('Footer bible component - ', () => {
  it('matched the snapshot', () => {
    const component = renderer.create(
      <BrowserRouter>
        <Footer id="test id" description="test description" />
      </BrowserRouter>,
    );
    expect(component).toMatchSnapshot();
  });

  it('Renders the footer correctly', () => {
    render(
      <BrowserRouter>
        <Footer id="test id" description="test description" />
      </BrowserRouter>,
    );

    expect(
      screen.getByText((content, element) => (
        element.tagName.toLowerCase() === 'p'
          && content.startsWith('test description')
      )),
    );
    expect(screen.queryByText('some false text')).not.toBeInTheDocument();
  });
});
