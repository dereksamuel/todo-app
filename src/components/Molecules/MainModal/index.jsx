import React, { useRef } from "react";
import toastr from "toastr";
import PropTypes from "prop-types";

import { useTodosContext } from "@/context/todos";
import { MainModalUI } from "./MainModalUI";
import "./styles.scss";

function MainModal({ title, children }) {
  const { todos, setTodos, setIsModalVisible } = useTodosContext();
  const $form = useRef(null);

  function onUpgradeTodo(event) {
    event.preventDefault();

    const newForm = new FormData($form.current);
    const newTodo = {
      title: newForm.get("name"),
      description: newForm.get("description"),
      isDone: false,
    };

    toastr.success("¡TODO creado con éxito!");
    setTodos([...todos, newTodo]);
    setIsModalVisible(false);
  }

  return (
    <>
      <MainModalUI
        onUpgradeTodo={onUpgradeTodo}
        setIsModalVisible={setIsModalVisible}
        $form={$form}
        title={title}
      >
        {children}
      </MainModalUI>
    </>
  );
}

MainModal.propTypes = {
  title: PropTypes.any.isRequired,
  mode: PropTypes.string,
  children: PropTypes.func.isRequired,
};

export { MainModal };
