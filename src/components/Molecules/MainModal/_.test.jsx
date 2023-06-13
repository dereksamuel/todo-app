import React from "react";
import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it } from "vitest";

import { MainModal } from ".";
import { TodosProvider } from "@/context/todos";

describe("MainModal", () => {
  afterEach(cleanup);

  beforeEach(() => {
    render(
      <TodosProvider>
        <MainModal title="Hello">{() => <p>Hello</p>}</MainModal>
      </TodosProvider>,
    );
  });

  it("should render a MainModal atom", () => {
    const $modal = screen.getByTestId("modal");
    expect($modal).toBeInTheDocument();
  });
});
