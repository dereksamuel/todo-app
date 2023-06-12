import React from "react";
import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";
import { Input } from ".";

describe("Input", () => {
  afterEach(cleanup);

  it("should render a input", () => {
    render(<Input />);
    const $input = screen.getByTestId("input");
    expect($input).toBeInTheDocument();
  });
});
