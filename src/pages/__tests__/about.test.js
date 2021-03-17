import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import renderer from "react-test-renderer";
import About from "../about";
import { BrowserRouter } from "react-router-dom";

describe("About page", () => {
  it("matches the snapshot", () => {
    const component = renderer.create(
      <BrowserRouter>
          <About history= {{goBack: ()=>"test function"}}/>
      </BrowserRouter>
    );
    expect(component).toMatchSnapshot();
  });
  it("Renders the About page correctly", () => {
    render(
      <BrowserRouter>
          <About history= {{goBack: ()=>"test function"}}/>
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
