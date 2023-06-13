import React, { useRef } from "react";
import toastr from "toastr";
import { v4 as uuidv4 } from "uuid";

import { useTodosContext } from "@/context/todos";
import { useGlobalsContext } from "@/context/globals";
import { MainModalUI } from "./MainModalUI";
import "./styles.scss";

function MainModal() {
  const { todos, setTodos, deleteData, editableData } = useTodosContext();
  const { setIsModalVisible } = useGlobalsContext();
  const $form = useRef(null);

  function onSaveData(data, action) {
    setTodos(data);
    setIsModalVisible(false);
    toastr.success(`¡TODO ${action} con éxito!`);
  }

  function onDeleteTodo() {
    const newTodos = todos.filter((todo) => todo.id !== deleteData.id);
    onSaveData(newTodos, "eliminado");
  }

  function onUpgradeTodo(event) {
    event.preventDefault();

    const newForm = new FormData($form.current);
    const newTodo = {
      id: uuidv4(),
      title: newForm.get("name"),
      description: newForm.get("description"),
      isDone: false,
    };
    const newTodos = [...todos];

    if (editableData) {
      let todo = [...todos].find((todo) => todo.id === editableData.id);
      const todoIndex = todos.findIndex((todo) => todo.id === editableData.id);
      delete newTodo.isDone;
      todo = {
        ...todo,
        ...newTodo,
      };
      newTodos[todoIndex] = todo;
    }

    onSaveData(
      editableData ? newTodos : [...todos, newTodo],
      !editableData ? "creado" : "actualizado",
    );
  }

  return (
    <>
      <MainModalUI
        onUpgradeTodo={onUpgradeTodo}
        onDeleteTodo={onDeleteTodo}
        setIsModalVisible={setIsModalVisible}
        $form={$form}
        deleteData={deleteData}
        editableData={editableData}
      />
    </>
  );
}

export { MainModal };
