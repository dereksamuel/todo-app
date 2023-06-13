import React from "react";
import PropTypes from "prop-types";
import { HiX } from "react-icons/hi";

import { Modal } from "../../Atoms/Modal";
import { Button } from "../../Atoms/Button";
import { Input } from "../../Atoms/Input";
import { useTodosContext } from "../../context/todos";
import "./styles.scss";

function MainModal({ title, children }) {
  const { setIsModalHidden } = useTodosContext();

  return (
    <>
      <Modal>
        <Button
          variant="dark"
          data-testid="close-button"
          onClick={() => setIsModalHidden(false)}
          className="absolute close-button left-1/2"
        >
          <HiX size={38} className="text-white" />
        </Button>
        <form>
          <Input
            variant="serarch"
            required
            className="w-full"
            placeholder="Nombre"
          />
          <Input
            variant="textarea"
            type="text"
            className="w-full my-4"
            placeholder="Descripción"
            required
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
      {children({ setIsModalHidden })}
    </>
  );
}

MainModal.propTypes = {
  title: PropTypes.any.isRequired,
  mode: PropTypes.string,
  children: PropTypes.func.isRequired,
};

export { MainModal };
