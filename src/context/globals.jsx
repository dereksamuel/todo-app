import React, { createContext, useContext, useState } from "react";
import PropTypes from "prop-types";

export const globalsContext = createContext({});

function GlobalsProvider({ children }) {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [filterDone, setFilterDone] = useState(true);
  const [filterPending, setFilterPending] = useState(true);

  return (
    <globalsContext.Provider
      value={{
        isModalVisible,
        setIsModalVisible,
        filterDone,
        setFilterDone,
        filterPending,
        setFilterPending,
      }}
    >
      {children}
    </globalsContext.Provider>
  );
}

GlobalsProvider.propTypes = {
  children: PropTypes.any.isRequired,
};

export { GlobalsProvider };

export const useGlobalsContext = () => useContext(globalsContext);
