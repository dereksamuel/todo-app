import React from "react";

import { TodoList } from "./components/Organisms/TodoList";
import { TodosProvider } from "./components/context/todos";
import { FilterSection } from "./components/Molecules/FilterSection";

function App() {
  const todoList = [
    {
      title: "Hacer mis tareas",
      description: "Si, hacer mis tareas. Pero hoy",
    },
    {
      title: "Hacer la cama",
      description: "Debo levantarme a las 8 am",
      isDone: true,
    },
    {
      title: "Debo cumplir con todo hoy",
    },
    {
      title: "Debo cumplir con todo hoy as",
    },
  ];

  return (
    <TodosProvider>
      <FilterSection />
      <TodoList todoList={todoList} />
    </TodosProvider>
  );
}

export default App;
