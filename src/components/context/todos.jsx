import React, { createContext, useContext, useState } from "react";
import PropTypes from "prop-types";

export const todosContext = createContext({
  todos: [],
  isModalHidden: false,
});

function TodosProvider({ children }) {
  const [todos, setTodos] = useState();
  const [isModalHidden, setIsModalHidden] = useState();

  return (
    <todosContext.Provider
      value={{ todos, isModalHidden, setIsModalHidden, setTodos }}
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
