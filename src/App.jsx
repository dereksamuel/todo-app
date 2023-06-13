import React from "react";
import { Text } from "@/components/Atoms/Text";
import { TodoList } from "./components/Organisms/TodoList";
import { TodosProvider } from "./components/context/todos";

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
      <Text variant="title">todos</Text>
      <TodoList todoList={todoList} />
    </TodosProvider>
  );
}

export default App;
