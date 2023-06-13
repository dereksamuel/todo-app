import React from "react";
import PropTypes from "prop-types";
import { HiPlus } from "react-icons/hi";

import { TodoItem } from "@molecules/TodoItem";
import { Text } from "@atoms/Text";
import { Button } from "@atoms/Button";

import "./styles.scss";

function TodoListUI({ todos, onFilterTodosSearch, onOpenAddModal }) {
  return (
    <div
      data-testid="todo-list"
      className="todo-list-container bg-secondary px-5 pt-12 pb-32 md:px-0"
    >
      <ul className="flex flex-col gap-12 md:max-w-3xl mx-auto md:px-5 md:flex-row md:flex-wrap 2xl:max-w-4xl">
        {todos && todos.length && todos.filter(onFilterTodosSearch).length ? (
          todos.filter(onFilterTodosSearch).map((todoItem) => (
            <TodoItem key={todoItem.id} {...todoItem}>
              {todoItem.description}
            </TodoItem>
          ))
        ) : (
          <Text className="text-start">No hay TODOS :(</Text>
        )}
      </ul>

      <Button
        variant="primary-rounded"
        onClick={onOpenAddModal}
        data-testid="main-button"
        className="w-fit fixed bottom-5 left-1/2 todo-list-container__main-button z-20"
      >
        <HiPlus size={40} />
      </Button>
    </div>
  );
}

TodoListUI.propTypes = {
  todos: PropTypes.array.isRequired,
  onFilterTodosSearch: PropTypes.func.isRequired,
  onOpenAddModal: PropTypes.func.isRequired,
};

export { TodoListUI };
