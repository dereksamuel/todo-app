import React from "react";
import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import { TodoList } from ".";

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

    render(<TodoList todoList={todoList}></TodoList>);
  });

  it("should render a TodoList", () => {
    const $todoList = screen.getByTestId("todo-list");
    expect($todoList).toBeInTheDocument();
  });

  it("should render todo-item molecule", () => {
    const $todoItem = screen.getAllByTestId("todo-item");
    expect($todoItem.length).toEqual(3);
  });
});
