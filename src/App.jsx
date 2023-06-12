import React from "react";
import { TodoItem } from "@/components/Molecules/TodoItem";
import { Text } from "@/components/Atoms/Text";

function App() {
  return (
    <div>
      <Text variant="title">todos</Text>
      <TodoItem title="Hola mundo">Hello</TodoItem>
    </div>
  );
}

export default App;
