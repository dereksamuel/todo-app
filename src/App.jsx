import React from "react";
import { Text } from "@/components/Atoms/Text";
import { TodoList } from "./components/Organisms/TodoList";

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
  ];

  return (
    <div>
      <Text variant="title">todos</Text>
      <TodoList todoList={todoList} />
    </div>
  );
}

export default App;
