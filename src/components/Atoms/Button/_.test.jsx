import React from "react";
import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import { Button } from ".";

describe("Button", () => {
  afterEach(cleanup);

  beforeEach(() => {
    render(<Button>Hola mundo</Button>);
  });

  it("should render a button", () => {
    const $button = screen.getByRole("button");
    expect($button).toBeInTheDocument();
  });

  it("should let's put him a children", () => {
    const $button = screen.getByRole("button");
    expect($button.textContent).toEqual("Hola mundo");
  });
});
