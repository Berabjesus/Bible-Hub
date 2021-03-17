import React from "react";
import "@testing-library/jest-dom";
import renderer from "react-test-renderer";
import Footer from "../footer";
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux';
import store from '../../../store'

describe("Footer read component", () => {
  it("matches the snapshot", () => {
    const component = renderer.create(
      <BrowserRouter>
        <Provider store={store}>
          <Footer />
        </Provider>
      </BrowserRouter>
    );
    expect(component).toMatchSnapshot();
  });
});
