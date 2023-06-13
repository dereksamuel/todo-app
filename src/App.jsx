import React from "react";

import { TodoList } from "@organisms/TodoList";
import { FilterSection } from "@molecules/FilterSection";
import { MainModal } from "@molecules/MainModal";

function App() {
  return (
    <>
      <MainModal />
      <FilterSection />
      <TodoList />
    </>
  );
}

export default App;
