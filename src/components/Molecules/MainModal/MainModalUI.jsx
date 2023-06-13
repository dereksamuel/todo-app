import React from "react";
import PropTypes from "prop-types";
import { HiX } from "react-icons/hi";

import { Modal } from "@atoms/Modal";
import { Button } from "@atoms/Button";
import { Input } from "@atoms/Input";
import "./styles.scss";

function MainModalUI({
  title,
  children,
  setIsModalVisible,
  onUpgradeTodo,
  $form,
}) {
  return (
    <>
      <Modal>
        <Button
          variant="dark"
          data-testid="close-button"
          onClick={() => setIsModalVisible(false)}
          className="absolute close-button left-1/2"
        >
          <HiX size={38} className="text-white" />
        </Button>
        <form onSubmit={onUpgradeTodo} ref={$form}>
          <Input
            variant="search"
            type="text"
            required
            className="w-full"
            placeholder="Nombre"
            name="name"
          />
          <Input
            variant="textarea"
            type="text"
            className="w-full my-4"
            placeholder="Descripción"
            name="description"
          />
          <Button
            className="w-full justify-between z-10"
            variant="rounded"
            data-testid="main-button"
            type="submit"
          >
            {title}
          </Button>
        </form>
      </Modal>
      {children({ setIsModalVisible })}
    </>
  );
}

MainModalUI.propTypes = {
  title: PropTypes.any.isRequired,
  mode: PropTypes.string,
  children: PropTypes.func.isRequired,
  setIsModalVisible: PropTypes.func,
  onUpgradeTodo: PropTypes.func,
  $form: PropTypes.any.isRequired,
};

export { MainModalUI };
