import React, { createContext, useContext, useState } from "react";
import PropTypes from "prop-types";

import { getStorage, setStorage } from "@/utils/localStorage";

export const todosContext = createContext({});

function TodosProvider({ children, todosDefault = [] }) {
  const [todos, setTodos] = useState(getStorage("todos") || todosDefault);
  const [search, setSearch] = useState("");
  const [editableData, setEditableData] = useState(null);
  const [deleteData, setDeleteData] = useState(false);

  const onChangeSetTodos = (value) => {
    setTodos(value);
    setStorage("todos", value);
  };

  return (
    <todosContext.Provider
      value={{
        todos,
        setTodos: onChangeSetTodos,
        editableData,
        setEditableData,
        deleteData,
        setDeleteData,
        search,
        setSearch,
      }}
    >
      {children}
    </todosContext.Provider>
  );
}

TodosProvider.propTypes = {
  children: PropTypes.any.isRequired,
  todosDefault: PropTypes.array,
};

export { TodosProvider };

export const useTodosContext = () => useContext(todosContext);
