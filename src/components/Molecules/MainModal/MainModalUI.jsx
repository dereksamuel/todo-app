import React from "react";
import PropTypes from "prop-types";
import { HiTrash, HiX, HiPencilAlt, HiPlus } from "react-icons/hi";

import { Modal } from "@atoms/Modal";
import { Text } from "@atoms/Text";
import { Button } from "@atoms/Button";
import { Input } from "@atoms/Input";
import "./styles.scss";

function MainModalUI({
  setIsModalVisible,
  onUpgradeTodo,
  onDeleteTodo,
  editableData,
  deleteData,
  $form,
}) {
  return (
    <Modal>
      <Button
        variant="dark"
        data-testid="close-button"
        onClick={() => setIsModalVisible(false)}
        className="absolute close-button left-1/2"
      >
        <HiX size={38} className="text-white" />
      </Button>
      {deleteData ? (
        <>
          <Text className="mb-4">
            Estás a punto de eliminar para siempre este TODO
          </Text>
          <Button
            className="w-full justify-between z-10"
            variant="danger"
            data-testid="main-button"
            onClick={onDeleteTodo}
          >
            Borrar <HiTrash size={24} />
          </Button>
        </>
      ) : (
        <form onSubmit={onUpgradeTodo} ref={$form}>
          <Input
            variant="search"
            type="text"
            required
            className="w-full"
            placeholder="Nombre"
            defaultValue={editableData?.title}
            name="name"
          />
          <Input
            variant="textarea"
            type="text"
            className="w-full my-4"
            placeholder="Descripción"
            defaultValue={editableData?.description}
            name="description"
          />
          <Button
            className="w-full justify-between z-10"
            variant="rounded"
            data-testid="main-button"
            type="submit"
          >
            {!editableData ? (
              <>
                Crear un TODO <HiPlus size={30} />
              </>
            ) : (
              <>
                Editar TODO <HiPencilAlt size={30} />
              </>
            )}
          </Button>
        </form>
      )}
    </Modal>
  );
}

MainModalUI.propTypes = {
  setIsModalVisible: PropTypes.func,
  onUpgradeTodo: PropTypes.func,
  onDeleteTodo: PropTypes.func,
  editableData: PropTypes.any,
  deleteData: PropTypes.any,
  $form: PropTypes.any.isRequired,
};

export { MainModalUI };
