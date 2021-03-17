import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import renderer from "react-test-renderer";
import About from "../about";
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux';
import store from '../../store'

describe("About page", () => {
  it("matches the snapshot", () => {
    const component = renderer.create(
      <BrowserRouter>
        <Provider store={store}>
          <About history= {{goBack: ()=>"test function"}}/>
        </Provider>
      </BrowserRouter>
    );
    expect(component).toMatchSnapshot();
  });
  it("Renders the About page correctly", () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <About history= {{goBack: ()=>"test function"}}/>
        </Provider>
      </BrowserRouter>
    );
    expect(
      screen.getByText((content, element) => {
        return (
          element.tagName.toLowerCase() === "h2" &&
          content.includes('Bible Hub web application')
        );
      })
    );
    expect(
      screen.getByText((content, element) => {
        return (
          element.tagName.toLowerCase() === "h2" &&
          content.includes('Bible Hub web application')
        );
      })
    );
    expect(
      screen.getByText((content, element) => {
        return (
          element.tagName.toLowerCase() === "p" &&
          content.includes('Created by Bereket A. Beshane')
        );
      })
    );
    expect(
      screen.getByText((content, element) => {
        return (
          element.tagName.toLowerCase() === "p" &&
          content.includes('Content from https://api.biblia.com')
        );
      })
    );

  });
});
