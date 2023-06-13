import React from "react";
import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import { Modal } from ".";

describe("Modal", () => {
  afterEach(cleanup);

  beforeEach(() => {
    render(<Modal title="Hello">Hello</Modal>);
  });

  it("should render a Modal", () => {
    const $modal = screen.getByTestId("modal");
    expect($modal).toBeInTheDocument();
  });

  // it("should render always a button", () => {
  //   const $mainButton = screen.getByTestId("main-button");
  //   expect($mainButton).toBeInTheDocument();
  // });

  // it("should render always a button", () => {
  //   const $closeButton = screen.getByTestId("close-button");
  //   expect($closeButton).toBeInTheDocument();
  // });
});
