import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import renderer from "react-test-renderer";
import Image from "../image";
import { BrowserRouter } from "react-router-dom";

describe("Image bible component", () => {
  it("matches the snapshot", () => {
    const component = renderer.create(
      <BrowserRouter>
        <Image image={"www.testimage.com"} title={"test title"} />
      </BrowserRouter>
    );
    expect(component).toMatchSnapshot();
  });

  it("Renders the Image correctly", () => {
    render(
      <BrowserRouter>
        <Image image={"www.testimage.com"} title={"test title"} />
      </BrowserRouter>
    );

    expect(screen.getByAltText('test title'));
  });
});
