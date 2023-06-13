import React from "react";
import PropTypes from "prop-types";

import { TodoItem } from "../../Molecules/TodoItem";
import "./styles.scss";

function TodoList({ todoList }) {
  return (
    <div
      data-testid="todo-list"
      className="todo-list-container bg-secondary px-5 pt-12 pb-32 flex flex-col gap-12"
    >
      {todoList && todoList.length
        ? todoList.map((todoItem, index) => (
            <TodoItem
              key={index}
              isDone={todoItem.isDone}
              title={todoItem.title}
            >
              {todoItem.description}
            </TodoItem>
          ))
        : null}
    </div>
  );
}

TodoList.propTypes = {
  todoList: PropTypes.array.isRequired,
};

export { TodoList };
