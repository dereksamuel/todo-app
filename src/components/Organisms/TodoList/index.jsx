import React from "react";
import { HiPlus } from "react-icons/hi";

import { TodoItem } from "@molecules/TodoItem";
import { Text } from "@atoms/Text";
import { Button } from "@atoms/Button";
import { useTodosContext } from "@/context/todos";
import { useGlobalsContext } from "@/context/globals";

import "./styles.scss";

function TodoList() {
  const { todos, setEditableData } = useTodosContext();
  const { setIsModalVisible } = useGlobalsContext();

  const onOpenAddModal = () => {
    setIsModalVisible(true);
    setEditableData(null);
  };

  return (
    <div
      data-testid="todo-list"
      className="todo-list-container bg-secondary px-5 pt-12 pb-32 flex flex-col gap-12"
    >
      {todos && todos.length ? (
        todos.map((todoItem) => (
          <TodoItem key={todoItem.id} {...todoItem}>
            {todoItem.description}
          </TodoItem>
        ))
      ) : (
        <Text className="text-start">
          Aún no tienes TODOS, por eso animate y crea algunos
        </Text>
      )}

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

export { TodoList };
