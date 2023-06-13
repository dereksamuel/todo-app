import React, { useState } from "react";
import PropTypes from "prop-types";
import { HiPencilAlt, HiTrash } from "react-icons/hi";

import { Text } from "../../Atoms/Text";
import { Input } from "../../Atoms/Input";
import { Button } from "../../Atoms/Button";

import "./styles.scss";

function TodoItem({ title, children, isDone = false }) {
  const [isChecked, setIsChecked] = useState(isDone);

  return (
    <div data-testid="todo-item" className="todo-item-container">
      <div className="todo-item rounded-e-md p-3 z-10 relative bg-white">
        <label className="todo-item-title-container flex items-center justify-between">
          <Text
            variant="subtitle"
            className={isChecked ? "line-through opacity-60" : ""}
          >
            {title}
          </Text>
          <Input variant="checkbox" onChange={() => setIsChecked(!isChecked)} />
        </label>
        <Text variant="p">{children}</Text>
      </div>
      <div className="buttons flex items-center justify-start gap-3 z-0">
        <Button variant="secondary-gray" className="pt-6">
          <span>Editar</span>
          <HiPencilAlt size={24} />
        </Button>
        <Button variant="secondary-danger" className="pt-6">
          <span>Borrar</span>
          <HiTrash size={24} />
        </Button>
      </div>
    </div>
  );
}

TodoItem.propTypes = {
  title: PropTypes.string.isRequired,
  isDone: PropTypes.bool,
  children: PropTypes.any,
};

export { TodoItem };
