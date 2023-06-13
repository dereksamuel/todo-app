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
  const [todos, setTodos] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [filterDone, setFilterDone] = useState(true);
  const [filterPending, setFilterPending] = useState(true);

  // const onChangeState = async (...params) => {
  //   for (const param of params) {
  //     const key = param[0];
  //     const value = param[1];

  //     const timer = setTimeout(() => {
  //       setState({
  //         ...state,
  //         [key]: value,
  //       });
  //       clearTimeout(timer);
  //     }, 100);
  //   }
  // };

  return (
    <todosContext.Provider
      value={{
        todos,
        setTodos,
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
