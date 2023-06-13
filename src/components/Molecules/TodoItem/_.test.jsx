import React from "react";
import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import { TodoItem } from ".";

describe("TodoItem", () => {
  afterEach(cleanup);

  beforeEach(() => {
    render(<TodoItem title="My TODO">Hello</TodoItem>);
  });

  it("should render a TodoItem", () => {
    const $todoItem = screen.getByTestId("todo-item");
    expect($todoItem).toBeInTheDocument();
  });

  it("should render two atom Text", () => {
    const $subtitle = screen.getByTestId("subtitle");
    const $p = screen.getByTestId("p");

    expect($subtitle).toBeInTheDocument($subtitle);
    expect($p).toBeInTheDocument($p);
  });

  it("should render one Input atom", () => {
    const $input = screen.getByTestId("input");

    expect($input).toBeInTheDocument($input);
  });

  it("should render two button atoms", () => {
    const $button = screen.getAllByRole("button");

    expect($button.length).toEqual(2);
  });
});
