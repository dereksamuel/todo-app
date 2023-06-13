import React from "react";
import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import { TodoList } from ".";
import { TodosProvider } from "@/context/todos";
import { GlobalsProvider } from "../../../context/globals";

describe("TodoList", () => {
  afterEach(cleanup);

  beforeEach(() => {
    const todosDefault = [
      {
        id: "54s54ad",
        title: "Hacer mis tareas",
        description: "Si, hacer mis tareas. Pero hoy",
        isDone: false,
      },
      {
        id: "54s54asad",
        title: "Hacer la cama",
        description: "Debo levantarme a las 8 am",
        isDone: true,
      },
      {
        id: "as99a",
        title: "Debo cumplir con todo hoy",
        isDone: false,
      },
    ];

    render(
      <GlobalsProvider>
        <TodosProvider todosDefault={todosDefault}>
          <TodoList></TodoList>
        </TodosProvider>
      </GlobalsProvider>,
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
});
