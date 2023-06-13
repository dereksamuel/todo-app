import React from "react";

import { useTodosContext } from "@/context/todos";
import { useGlobalsContext } from "@/context/globals";

import "./styles.scss";
import { TodoListUI } from "./TodoListUI";

function TodoList() {
  const { todos, setEditableData, setDeleteData, search } = useTodosContext();
  const { setIsModalVisible, filterDone, filterPending } = useGlobalsContext();

  const onOpenAddModal = () => {
    setIsModalVisible(true);
    setEditableData(null);
    setDeleteData(null);
  };

  const onFilterTodosByDone = (todo) => {
    if (filterPending && filterDone) {
      return todo;
    } else if (filterPending && !todo.isDone) {
      return todo;
    } else if (filterDone && todo.isDone) {
      return todo;
    }
  };

  const onFilterTodosSearch = (todo) => {
    if (search === "") {
      return onFilterTodosByDone(todo);
    } else if (todo.title.toLowerCase().match(search.toLowerCase())) {
      return onFilterTodosByDone(todo);
    }
  };

  return (
    <TodoListUI
      onFilterTodosSearch={onFilterTodosSearch}
      onOpenAddModal={onOpenAddModal}
      todos={todos}
    />
  );
}

export { TodoList };
