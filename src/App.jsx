import React from "react";

import { TodoList } from "@organisms/TodoList";
import { FilterSection } from "@molecules/FilterSection";
import { useTodosContext } from "@/context/todos";

function App() {
  const { todos } = useTodosContext();

  return (
    <>
      <FilterSection />
      <TodoList todoList={todos} />
    </>
  );
}

export default App;
