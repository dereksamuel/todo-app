import React from "react";
import PropTypes from "prop-types";
import { HiPencilAlt, HiTrash } from "react-icons/hi";

import { Text } from "@atoms/Text";
import { Input } from "@atoms/Input";
import { Button } from "@atoms/Button";

import "./styles.scss";

function TodoItemUI({ title, description, isDone, onCheck, onEdit, onDelete }) {
  return (
    <li
      data-testid="todo-item"
      className="todo-item-container md:max-w-md md:w-full md:flex-1"
    >
      <div className="todo-item rounded-e-md p-3 z-10 relative bg-white">
        <label className="todo-item-title-container flex items-center justify-between gap-2">
          <Text
            variant="subtitle"
            className={isDone ? "line-through opacity-60" : ""}
          >
            {title}
          </Text>
          <Input variant="checkbox" checked={isDone} onChange={onCheck} />
        </label>
        {description && <Text variant="p">{description}</Text>}
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
    </li>
  );
}

TodoItemUI.propTypes = {
  title: PropTypes.string.isRequired,
  isDone: PropTypes.bool.isRequired,
  description: PropTypes.any,
  onCheck: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export { TodoItemUI };
