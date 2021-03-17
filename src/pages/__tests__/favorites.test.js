import React from "react";
import "@testing-library/jest-dom";
import renderer from "react-test-renderer";
import Favorites from "../favorites";
import { BrowserRouter } from "react-router-dom";

describe("Bible page", () => {
  it("matches the snapshot", () => {
    const component = renderer.create(
      <BrowserRouter>
          <Favorites  history= {{goBack: ()=>"test function"}}/>
      </BrowserRouter>
    );
    expect(component).toMatchSnapshot();
  });
});