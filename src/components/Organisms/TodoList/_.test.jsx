import React from "react";
import {
  cleanup,
  fireEvent,
  render,
  screen,
  waitFor,
} from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import { TodoList } from ".";
import { TodosProvider } from "../../context/todos";

describe("TodoList", () => {
  afterEach(cleanup);

  beforeEach(() => {
    const todoList = [
      {
        title: "Hacer mis tareas",
        description: "Si, hacer mis tareas. Pero hoy",
        isDone: false,
      },
      {
        title: "Hacer la cama",
        description: "Debo levantarme a las 8 am",
        isDone: true,
      },
      {
        title: "Debo cumplir con todo hoy",
        isDone: false,
      },
    ];

    render(
      <TodosProvider>
        <TodoList todoList={todoList}></TodoList>
      </TodosProvider>,
    );
  });

  it("should render a TodoList", () => {
    const $todoList = screen.getByTestId("todo-list");
    expect($todoList).toBeInTheDocument();
  });

  it("should render todo-item molecule", () => {
    const $todoItems = screen.getAllByTestId("todo-item");
    expect($todoItems.length).toEqual(3);
  });

  it("should render a button atom", () => {
    const $button = screen.getByTestId("main-button");
    expect($button).toBeInTheDocument();
  });

  it("should display the modal molecule when main button has been clicked", async () => {
    const $mainButton = screen.getByTestId("main-button");
    fireEvent(
      $mainButton,
      new MouseEvent("click", {
        bubbles: true,
        cancelable: true,
      }),
    );

    await waitFor(() => {
      const $modal = screen.getByTestId("modal");
      expect($modal).toBeInTheDocument();
    });
  });
});
