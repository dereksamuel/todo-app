import React from "react";
import PropTypes from "prop-types";
import { HiPlus } from "react-icons/hi";

import { TodoItem } from "../../Molecules/TodoItem";
import { Button } from "../../Atoms/Button";
import { MainModal } from "../../Molecules/MainModal";

import "./styles.scss";

function TodoList({ todoList }) {
  return (
    <div
      data-testid="todo-list"
      className="todo-list-container bg-secondary px-5 pt-12 pb-32 flex flex-col gap-12"
    >
      <MainModal
        title={
          <>
            Crear un TODO <HiPlus size={30} />
          </>
        }
      >
        {({ setIsModalHidden }) => (
          <Button
            variant="primary-rounded"
            onClick={() => setIsModalHidden(true)}
            data-testid="main-button"
            className="w-fit fixed bottom-5 left-1/2 todo-list-container__main-button z-20"
          >
            <HiPlus size={40} />
          </Button>
        )}
      </MainModal>
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
