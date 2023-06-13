import React from "react";
import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it } from "vitest";

import { FilterSection } from ".";
import { TodosProvider } from "@/context/todos";

describe("FilterSection", () => {
  afterEach(cleanup);

  beforeEach(() => {
    render(
      <TodosProvider>
        <FilterSection></FilterSection>
      </TodosProvider>,
    );
  });

  it("should render the element", () => {
    const $filterSection = screen.getByTestId("filter-section");
    expect($filterSection).toBeInTheDocument();
  });

  it("should render a Input Search atom", () => {
    const $inputSearch = screen.getByTestId("input");
    expect($inputSearch).toBeInTheDocument();
  });

  it("should render the Texts", () => {
    const $title = screen.getByTestId("title");
    const $subtitle = screen.getByTestId("subtitle-filter");
    const $small = screen.getAllByTestId("small");

    expect($title).toBeInTheDocument(2);
    expect($subtitle).toBeInTheDocument(2);
    expect($small.length).toEqual(2);
  });
});
