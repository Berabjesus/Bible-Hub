import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import renderer from "react-test-renderer";
import Item from "../item";
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux';
import store from '../../../store'

describe("Item Home component", () => {
  it("matches the snapshot", () => {
    const component = renderer.create(
      <BrowserRouter>
        <Provider store={store}>
          <Item id ={'test-id'} description={'test-description'} image={'test-image'} title={'test-title'} languages={['test-languages-1', 'test-languages-2']}/>
        </Provider>
      </BrowserRouter>
    );
    expect(component).toMatchSnapshot();
  });
  it("Renders the Item component correctly", () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <Item id ={'test-id'} description={'test-description'} image={'test-image'} title={'test-title'} languages={['test-languages-1', 'test-languages-2']}/>
        </Provider>
      </BrowserRouter>
    );

    expect(screen.getByAltText('test-title'));

    expect(
      screen.getByText((content, element) => {
        return (
          element.tagName.toLowerCase() === "h4" &&
          content.includes('test-title')
        );
      })
    );

    expect(
      screen.getByText((content, element) => {
        return (
          element.tagName.toLowerCase() === "p" &&
          content.includes('test-description')
        );
      })
    );
  });
});
