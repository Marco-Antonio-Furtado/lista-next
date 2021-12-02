import { useState } from "react";
import Header from "../components/header";
import Kanban from "../components/kanban";
import { v4 as uuid } from "uuid";

const INITIAL_VALUE = [
  {
    id: uuid(),
    name: "To Do",
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
    name: "Doing",
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
];

function Home() {
  const [kanban, setKanban] = useState(INITIAL_VALUE);
  return (
    <div>
      <Header kanban={kanban} setKanban={setKanban} />
      <Kanban kanban={kanban} setKanban={setKanban} />
    </div>
  );
}

export default Home;
