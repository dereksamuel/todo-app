import React from "react";
import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";
import { Text } from ".";

describe("Text", () => {
  afterEach(cleanup);

  it("should render a heading", () => {
    render(<Text>Hello</Text>);
    const $heading = screen.getByTestId("p");
    expect($heading).toBeInTheDocument();
  });

  it("should let's put him a children", () => {
    render(<Text variant="title">Hola mundo</Text>);
    const $heading = screen.getByTestId("title");
    expect($heading.textContent).toEqual("Hola mundo");
  });

  it("should render a subtitle h2", () => {
    render(<Text variant="subtitle">Hola mundo</Text>);
    const $heading = screen.getByTestId("subtitle");
    expect($heading).toBeInTheDocument();
  });

  it("should render a subtitle h3", () => {
    render(<Text variant="subtitle-filter">Hola mundo</Text>);
    const $heading = screen.getByTestId("subtitle-filter");
    expect($heading).toBeInTheDocument();
  });

  it("should render a small tag", () => {
    render(<Text variant="small">Hola mundo</Text>);
    const $heading = screen.getByTestId("small");
    expect($heading).toBeInTheDocument();
  });
});
