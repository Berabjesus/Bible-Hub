import React from "react";
import "@testing-library/jest-dom";
import renderer from "react-test-renderer";
import Read from "../read";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../../store";

describe("Bible page", () => {
  it("matches the snapshot", () => {
    const location = {
      state: {
        id: "test",
      },
    };
    const component = renderer.create(
      <BrowserRouter>
        <Provider store={store}>
          <Read location={location} />
        </Provider>
      </BrowserRouter>
    );
    expect(component).toMatchSnapshot();
  });
});
