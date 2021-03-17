import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import Image from '../image';

describe('Image bible component', () => {
  it('matches the snapshot', () => {
    const component = renderer.create(
      <BrowserRouter>
        <Image image="www.testimage.com" title="test title" />
      </BrowserRouter>,
    );
    expect(component).toMatchSnapshot();
  });

  it('Renders the Image correctly', () => {
    render(
      <BrowserRouter>
        <Image image="www.testimage.com" title="test title" />
      </BrowserRouter>,
    );

    expect(screen.getByAltText('test title'));
  });
});
