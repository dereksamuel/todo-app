import React, { createContext, useContext, useState } from "react";
import PropTypes from "prop-types";

import { getStorage, setStorage } from "../utils/localStorage";

const defaultState = {
  todos: getStorage("todos") || [],
  isModalVisible: false,
  filterDone: true,
  filterPending: true,
};

export const todosContext = createContext(defaultState);

function TodosProvider({ children }) {
  const [todos, setTodos] = useState(getStorage("todos") || []);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [filterDone, setFilterDone] = useState(true);
  const [filterPending, setFilterPending] = useState(true);

  const onChangeSetTodos = (value) => {
    setTodos(value);
    setStorage("todos", value);
  };

  return (
    <todosContext.Provider
      value={{
        todos,
        setTodos: onChangeSetTodos,
        isModalVisible,
        setIsModalVisible,
        filterDone,
        setFilterDone,
        filterPending,
        setFilterPending,
      }}
    >
      {children}
    </todosContext.Provider>
  );
}

TodosProvider.propTypes = {
  children: PropTypes.any.isRequired,
};

export { TodosProvider };

export const useTodosContext = () => useContext(todosContext);
