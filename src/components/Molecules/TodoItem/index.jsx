import React from "react";
import PropTypes from "prop-types";
import { HiPencilAlt, HiTrash } from "react-icons/hi";

import { Text } from "@atoms/Text";
import { Input } from "@atoms/Input";
import { Button } from "@atoms/Button";
import { useTodosContext } from "@/context/todos";

import "./styles.scss";

function TodoItem({ title, children, isDone, id }) {
  const { todos, setTodos, setEditableData, setIsModalVisible, setDeleteData } =
    useTodosContext();
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
  };

  const onDelete = () => {
    setIsModalVisible(true);
    setDeleteData({ id });
  };

  return (
    <div data-testid="todo-item" className="todo-item-container">
      <div className="todo-item rounded-e-md p-3 z-10 relative bg-white">
        <label className="todo-item-title-container flex items-center justify-between">
          <Text
            variant="subtitle"
            className={isDone ? "line-through opacity-60" : ""}
          >
            {title}
          </Text>
          <Input variant="checkbox" checked={isDone} onChange={onCheck} />
        </label>
        {children && <Text variant="p">{children}</Text>}
      </div>
      <div className="buttons flex items-center justify-start gap-3 z-0">
        <Button variant="secondary-gray" className="pt-6" onClick={onEdit}>
          <span>Editar</span>
          <HiPencilAlt size={24} />
        </Button>
        <Button variant="secondary-danger" className="pt-6" onClick={onDelete}>
          <span>Borrar</span>
          <HiTrash size={24} />
        </Button>
      </div>
    </div>
  );
}

TodoItem.propTypes = {
  title: PropTypes.string.isRequired,
  isDone: PropTypes.bool.isRequired,
  children: PropTypes.any,
  id: PropTypes.string.isRequired,
};

export { TodoItem };
