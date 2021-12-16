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
  const { kanban, setKanban } = useContext(kanbanContext);

  function updateKanban() {
    setKanban([...kanban]);
    window.localStorage.setItem("kanban", JSON.stringify(kanban));
  }

  function addTask(list, task) {
    const item = kanban.find((l) => l.id === list.id);
    item.tasks.push(task);
    setKanban([...kanban]);
    window.localStorage.setItem("kanban", JSON.stringify(kanban));
  }

  function addList(list) {
    setKanban([...kanban, list]);
    window.localStorage.setItem("kanban", JSON.stringify(kanban));
  }

  function taskDelete(list, taskId) {
    let item = kanban.find((l) => l.id === list.id);
    const newTasks = item.tasks.filter((task) => task.id !== taskId);
    item.tasks = newTasks;
    updateKanban();
    window.localStorage.setItem("kanban", JSON.stringify(kanban));
  }

  function handleTitle(list, name) {
    const item = kanban.find((l) => l.id === list.id);
    item.name = name;
    console.log(kanban);
    window.localStorage.setItem("kanban", JSON.stringify(kanban));
  }

  return {
    kanban,
    setKanban,
    updateKanban,
    addTask,
    addList,
    taskDelete,
    handleTitle,
  };
}
