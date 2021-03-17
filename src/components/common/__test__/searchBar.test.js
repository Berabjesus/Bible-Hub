import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import renderer from "react-test-renderer";
import SearchBar from "../searchBar";
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux';
import store from '../../../store'

describe("Search bar common component", () => {
  it("matches the snapshot", () => {
    const component = renderer.create(
      <BrowserRouter>
        <Provider store={store}>
          <SearchBar ShowHide ={'test-class'}/>
        </Provider>
      </BrowserRouter>
    );
    expect(component).toMatchSnapshot();
  });
  it("Renders the search bar correctly", () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <SearchBar ShowHide ={'test-class'}/>
        </Provider>
      </BrowserRouter>
    );

    expect(
      screen.getByPlaceholderText((content, element) => {
        return (
          element.tagName.toLowerCase() === "input" &&
          content.includes('Search for a version')
        );
      })
    );
  });
});
