import React, { createContext, useContext, useState } from "react";
import PropTypes from "prop-types";

const defaultState = {
  todos: [],
  isModalVisible: false,
  filterDone: true,
  filterPending: true,
};

export const todosContext = createContext(defaultState);

function TodosProvider({ children }) {
  const [state, setState] = useState(defaultState);

  const onChangeState = (key, value) => {
    setState({
      ...state,
      [key]: value,
    });
  };

  return (
    <todosContext.Provider value={{ ...state, onChangeState }}>
      {children}
    </todosContext.Provider>
  );
}

TodosProvider.propTypes = {
  children: PropTypes.any.isRequired,
};

export { TodosProvider };

export const useTodosContext = () => useContext(todosContext);
