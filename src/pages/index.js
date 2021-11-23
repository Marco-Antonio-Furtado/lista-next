import { useState } from "react";
import Header from "../components/header";
import List from "../components/list";
import Kanban from "../components/kanban";
import { v4 as uuid } from "uuid";

const INITIAL_VALUE = [
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
];

function Home() {
  const [kanban, setKanban] = useState([
    <List INITIAL_VALUE={INITIAL_VALUE} key={uuid()} />,
  ]);
  return (
    <div>
      <Header kanban={kanban} setKanban={setKanban} />
      <Kanban kanban={kanban} />
    </div>
  );
}

export default Home;
