import React from "react";
import "@testing-library/jest-dom";
import renderer from "react-test-renderer";
import Sidebar from "../sidebar";
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux';
import store from '../../../store'

describe("Sidebar read component", () => {
  it("matches the snapshot", () => {
    const component = renderer.create(
      <BrowserRouter>
        <Provider store={store}>
          <Sidebar id ={'test-id'} setInfo={()=> "test function"} />
        </Provider>
      </BrowserRouter>
    );
    expect(component).toMatchSnapshot();
  });
});