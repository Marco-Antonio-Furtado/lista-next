import React, { useState, useContext, createContext } from "react";
import { v4 as uuid } from "uuid";

const kanbanContext = createContext();

export default function KanbanProvider({ children }) {
  const [kanban, setKanban] = useState([
    {
      id: uuid(),
      name: "Monday",
      tasks: [
        {
          id: uuid(),
          title: "Something",
          completed: true,
        },
        {
          id: uuid(),
          title: "Other thing",
          completed: false,
        },
      ],
    },
    {
      id: uuid(),
      name: "Tuesday",
      tasks: [
        {
          id: uuid(),
          title: "Another thing",
          completed: true,
        },
        {
          id: uuid(),
          title: "Thing 4",
          completed: false,
        },
      ],
    },
  ]);

  return (
    <kanbanContext.Provider
      value={{
        kanban,
        setKanban,
      }}
    >
      {children}
    </kanbanContext.Provider>
  );
}

export function useKanban() {
  return useContext(kanbanContext);
}
