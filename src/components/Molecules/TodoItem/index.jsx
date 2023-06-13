import React from "react";
import PropTypes from "prop-types";

import { useTodosContext } from "@/context/todos";
import { useGlobalsContext } from "@/context/globals";
import { TodoItemUI } from "./TodoItemUI";

import "./styles.scss";

function TodoItem({ title, children, isDone, id }) {
  const { todos, setTodos, setEditableData, setDeleteData } = useTodosContext();
  const { setIsModalVisible } = useGlobalsContext();

  const onCheck = () => {
    const newTodos = [...todos];
    let todo = [...todos].find((todo) => todo.id === id);
    const todoIndex = todos.findIndex((todo) => todo.id === id);
    todo = {
      ...todo,
      isDone: !isDone,
    };
    newTodos[todoIndex] = todo;

    setTodos(newTodos);
  };

  const onEdit = () => {
    setIsModalVisible(true);
    setEditableData({
      title,
      id,
      description: children,
      isDone,
    });
    setDeleteData(null);
  };

  const onDelete = () => {
    setIsModalVisible(true);
    setDeleteData({ id });
  };

  return (
    <TodoItemUI
      onDelete={onDelete}
      onCheck={onCheck}
      onEdit={onEdit}
      title={title}
      description={children}
      isDone={isDone}
    />
  );
}

TodoItem.propTypes = {
  title: PropTypes.string.isRequired,
  isDone: PropTypes.bool.isRequired,
  children: PropTypes.any,
  id: PropTypes.string.isRequired,
};

export { TodoItem };
