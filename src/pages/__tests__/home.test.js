import React from "react";
import "@testing-library/jest-dom";
import renderer from "react-test-renderer";
import Home from "../home";
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux';
import store from '../../store'

describe("Bible page", () => {
  it("matches the snapshot", () => {
    const component = renderer.create(
      <BrowserRouter>
        <Provider store={store}>
            <Home />
        </ Provider>
      </BrowserRouter>
    );
    expect(component).toMatchSnapshot();
  });
});